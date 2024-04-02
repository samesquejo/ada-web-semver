/**
 * Transforming error field response to reusable error state as return, checking if field errors comes from backend field validation or default endpoint error response
 */
const formatApiErrorFieldResponse = (fieldErrors: any) => {
  const errors = {} as any;

  if (fieldErrors.length) {
    for (const fieldError of fieldErrors) {
      const { msg, path } = fieldError;
      errors[path] = {
        message: msg,
      };
    }
  } else {
    errors.form = {
      message: fieldErrors.message,
    };
  }

  return errors;
};

export default formatApiErrorFieldResponse;
