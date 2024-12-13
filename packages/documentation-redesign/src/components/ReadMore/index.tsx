/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useState } from 'react';

export default function ReadMore({ children }: { children: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const text = isExpanded ? children : `${children.substring(0, 215)}...`;
  const textFit = children.length <= 215;
  return (
    <div>
      <p>
        {textFit ? children : text}
        {!textFit && (
          <a
            href="#"
            className="ml-2"
            onClick={({ nativeEvent }) => {
              nativeEvent.preventDefault();
              toggleReadMore();
            }}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </a>
        )}
      </p>
    </div>
  );
}
