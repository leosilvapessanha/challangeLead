import { ValidationError } from 'yup';

interface ValidationProps {
  [key: string]: string;
}

export default function getValidation(err: ValidationError): ValidationProps {
  const ValidationErrors: ValidationProps = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err.inner.forEach((error: any | undefined) => {
    ValidationErrors[error.path] = error.message;
  });

  return ValidationErrors;
}
