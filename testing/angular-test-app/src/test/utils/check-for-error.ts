export function checkForError(
  consoleSpy: jasmine.Spy,
  errorName: string
): boolean {
  return consoleSpy.calls
    .allArgs()
    .some((arg) => arg[0].toString().includes(errorName));
}
