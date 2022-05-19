export const throwNotFoundError = (message?: string) => {
  const error = new Error(message);
  error.name = 'NotFoundError';
  throw error;
};