export enum ValidationProperty {
    BODY = 'body',
    PARAMS = 'params',
    QUERY = 'query',
}
  
export enum ValidationErrors {
    INVALID = 'Invalid Field',
    REQUIRED = 'Required Field',
    IS_EMAIL = 'Field must be a valid e-mail',
    IS_NUMBER = 'Field must be a number',
    IS_DATE = 'Field must be a date',
}