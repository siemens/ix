export function toKebabCase(input: string) {
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .trim()
    .toLowerCase();
}
