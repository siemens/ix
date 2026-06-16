/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { beforeEach, expect, test, jest } from '@jest/globals';
import { closeModal, dismissModal } from '@siemens/ix';
import { ModalService, IxActiveModal } from './';
import { InternalIxActiveModal } from './modal-ref';
import { createComponent } from '@angular/core';

jest.mock('@angular/core', () => {
  const actual =
    jest.requireActual<typeof import('@angular/core')>('@angular/core');

  return {
    ...actual,
    createComponent: jest.fn(),
    Injector: {
      ...actual.Injector,
      create: jest.fn(actual.Injector.create.bind(actual.Injector)),
    },
  };
});

jest.mock('@siemens/ix', () => ({
  closeModal: jest.fn(),
  dismissModal: jest.fn(),
  showModal: jest.fn(() =>
    Promise.resolve({
      onClose: {
        once: jest.fn(),
      },
      onDismiss: {
        once: jest.fn(),
      },
      htmlElement: { type: 'html-element' },
    })
  ),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('should create modal by templateRef', () => {
  const appRefMock = {
    attachView: jest.fn(),
  };
  const createEmbeddedViewMock = jest.fn((_: { $implicit: any }) => ({
    rootNodes: [{}],
    detectChanges: jest.fn(),
  }));
  const modalService = new ModalService(
    appRefMock as any,
    {} as any,
    {} as any
  );
  modalService.open({
    content: {
      createEmbeddedView: createEmbeddedViewMock,
    } as any,
    data: {
      sample: 'test',
    },
  });

  expect(createEmbeddedViewMock).toHaveBeenCalledWith({
    $implicit: {
      close: expect.any(Function),
      data: { sample: 'test' },
      dismiss: expect.any(Function),
    },
  });
  expect(appRefMock.attachView).toHaveBeenCalled();
});

test('should create modal by component type', async () => {
  const appRefMock = {
    attachView: jest.fn(),
  };
  const nativeElement: { style: { display?: string } } = { style: {} };
  const hostView = {
    detectChanges: jest.fn(),
    destroy: jest.fn(),
  };
  const componentRef = {
    hostView,
    injector: {
      get: jest.fn(() => ({
        nativeElement,
      })),
    },
  };
  const environmentInjectorMock = {};
  const injectorMock = {};

  jest.mocked(createComponent).mockReturnValue(componentRef as any);

  const modalService = new ModalService(
    appRefMock as any,
    environmentInjectorMock as any,
    injectorMock as any
  );

  class TestComponent {
    foo = 'bar';
  }

  await modalService.open({
    content: TestComponent,
    data: {
      foo: 'bar',
    },
  });

  const [[componentType, createOptions]] = jest.mocked(createComponent).mock
    .calls as any;

  expect(createComponent).toHaveBeenCalledWith(TestComponent, {
    environmentInjector: environmentInjectorMock as any,
    elementInjector: createOptions.elementInjector,
  });
  expect(componentType).toBe(TestComponent);

  const activeModal = createOptions.elementInjector.get(
    IxActiveModal
  ) as IxActiveModal;

  expect(activeModal.data).toEqual({ foo: 'bar' });
  expect(activeModal.modalElement).toEqual({ type: 'html-element' });
});

test('should close modal instance with reason and mark as closed', () => {
  const closeModalMock = jest.fn(function (
    this: { closed?: boolean },
    reason?: any
  ) {
    if (typeof reason !== 'undefined') {
      this.closed = true;
    }
  });
  const instance = {
    htmlElement: {
      closeModal: closeModalMock,
      closed: false,
    },
  };
  const modalService = new ModalService({} as any, {} as any, {} as any);
  const reason = 'user-dismissed';
  modalService.close(instance, reason);
  expect(closeModalMock).toHaveBeenCalledWith(reason);
  expect(instance.htmlElement.closed).toBe(true);
});

test('should throw TypeError if instance cannot be closed', () => {
  const instance = {
    htmlElement: {},
  };
  const modalService = new ModalService({} as any, {} as any, {} as any);

  expect(() => modalService.close(instance)).toThrow(TypeError);
  expect(() => modalService.close(instance)).toThrow(
    'Invalid modal instance: cannot close'
  );
});

test('should close active modal immediately when modal element exists', () => {
  const activeModal = new InternalIxActiveModal();
  const modalElement = { type: 'html-element' } as any;

  activeModal.setModalElement(modalElement);
  activeModal.close('close-reason');

  expect(closeModal).toHaveBeenCalledWith(modalElement, 'close-reason');
});

test('should dismiss active modal immediately when modal element exists', () => {
  const activeModal = new InternalIxActiveModal();
  const modalElement = { type: 'html-element' } as any;

  activeModal.setModalElement(modalElement);
  activeModal.dismiss('dismiss-reason');

  expect(dismissModal).toHaveBeenCalledWith(modalElement, 'dismiss-reason');
});

test('should close active modal after modal element is set', () => {
  const activeModal = new InternalIxActiveModal();
  const modalElement = { type: 'html-element' } as any;

  expect(() => activeModal.close('close-reason')).not.toThrow();
  expect(closeModal).not.toHaveBeenCalled();

  activeModal.setModalElement(modalElement);

  expect(closeModal).toHaveBeenCalledTimes(1);
  expect(closeModal).toHaveBeenCalledWith(modalElement, 'close-reason');
});

test('should dismiss active modal after modal element is set', () => {
  const activeModal = new InternalIxActiveModal();
  const modalElement = { type: 'html-element' } as any;

  expect(() => activeModal.dismiss('dismiss-reason')).not.toThrow();
  expect(dismissModal).not.toHaveBeenCalled();

  activeModal.setModalElement(modalElement);

  expect(dismissModal).toHaveBeenCalledTimes(1);
  expect(dismissModal).toHaveBeenCalledWith(modalElement, 'dismiss-reason');
});

test('should only run first pending active modal action', () => {
  const activeModal = new InternalIxActiveModal();
  const modalElement = { type: 'html-element' } as any;

  activeModal.close('close-reason');
  activeModal.dismiss('dismiss-reason');

  activeModal.setModalElement(modalElement);

  expect(closeModal).toHaveBeenCalledTimes(1);
  expect(closeModal).toHaveBeenCalledWith(modalElement, 'close-reason');
  expect(dismissModal).not.toHaveBeenCalled();
});
