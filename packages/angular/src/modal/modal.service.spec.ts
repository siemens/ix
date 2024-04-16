/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@jest/globals';
import { IxActiveModal } from './modal-ref';
import { ModalService } from './modal.service';

jest.mock('@siemens/ix', () => ({
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

test('should create modal by component typ', async () => {
  const appRefMock = {
    attachView: jest.fn(),
  };
  const factory = {
    create: jest.fn(() => ({
      hostView: {
        rootNodes: [jest.fn()],
        detectChanges: jest.fn(),
      },
      injector: {
        get: jest.fn(() => ({
          nativeElement: {}
        })),
      },
    })),
  };
  const componentFactoryMock = {
    resolveComponentFactory: jest.fn(() => factory),
  };
  const injectorMock = jest.fn();

  const modalService = new ModalService(
    appRefMock as any,
    componentFactoryMock as any,
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

  const [[{ records }]] = factory.create.mock.calls as any;

  const injectorRecords = records as Map<Function, any>;

  expect(injectorRecords.get(IxActiveModal).value).toEqual({
    modalData: { foo: 'bar' },
    modalElement: { type: 'html-element' },
  });
});
