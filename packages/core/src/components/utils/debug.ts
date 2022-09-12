import { version } from './../../env';

export function addVersion() {
  if (document?.head) {
    const commentVersion = document.createComment(
      btoa(`ix-webcomponents: ${version}`)
    );
    document.body.appendChild(commentVersion);
  }
}
