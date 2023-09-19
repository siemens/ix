export interface Validator<A> {
  validate: (x: A) => boolean;
  errorMessage?: string;
}
