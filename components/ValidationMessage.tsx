import { SafeParseReturnType, ZodError } from 'zod';
import './ValidationMessage.scss';

interface Props<T> {
  zodResult: SafeParseReturnType<T, T> | null;
  field: keyof T;
}

function findErrorsForField<T>(error: ZodError<T> | undefined, field: keyof T): string[] {
  if (!error) {
    return [];
  }

  return error.issues
    .filter(issue => issue.path.includes(field as string))
    .map(issue => issue.message);
}

export default function ValidationMessage<T>(props: Props<T>) {
  return (
    <ul className="validation">
      {!props.zodResult?.success &&
        findErrorsForField(props.zodResult?.error, props.field).map((message, index) => (
          <li key={index}>{message}</li>
        ))}
    </ul>
  );
}
