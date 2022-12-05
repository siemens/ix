/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@jest/globals';
import { ModalService } from './modal.service';

jest.mock('@siemens/ix', () => ({
  modal: jest.fn(() =>
    Promise.resolve({
      onClose: {
        once: jest.fn(),
      },
      onDismiss: {
        once: jest.fn(),
      },
    })
  ),
}));

test('test', () => {
  const createEmbeddedViewMock = jest.fn((_: { $implicit: any }) => ({
    rootNodes: [{}],
    detectChanges: jest.fn(),
  }));
  const modalService = new ModalService();
  modalService.open({
    content: {
      createEmbeddedView: createEmbeddedViewMock,
    } as any,
    title: '',
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
});
