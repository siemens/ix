/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useLayoutEffect, useRef } from 'react';

export function useVideoAnimtation() {
  const videoRef = useRef<HTMLVideoElement>();
  useLayoutEffect(() => {
    const videoElement = videoRef.current;
    const { top, height } = videoElement.getBoundingClientRect();

    const onScroll = () => {
      const deplayScrollOffset = window.visualViewport.height * 0.2;
      const scrollOffset =
        window.scrollY +
        window.visualViewport.height -
        top -
        deplayScrollOffset;
      if (scrollOffset > 0 && scrollOffset < height) {
        const playFactor = scrollOffset / height;
        const duration = videoElement.duration;
        const time = duration * playFactor;
        videoElement.currentTime = time;
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return videoRef;
}
