export interface Validator<A> {
  validate: (x: A) => boolean;
  errorMessage?: string;
}

export type InputValidator = {
  validator: string;
  errorMessage: string;
};
