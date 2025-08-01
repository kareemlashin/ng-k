export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SERVER_ERROR: 500,
};

export const HTTP_STATUS_MESSAGES = {
  200: 'Request successful',
  201: 'Resource created',
  400: 'Invalid request',
  401: 'Unauthorized',
  403: 'Access forbidden',
  404: 'Resource not found',
  409: 'Conflict occurred',
  500: 'Internal server error',
};
