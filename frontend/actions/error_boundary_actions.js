export const RECEIVE_EB_ERRORS = 'RECEIVE_EB_ERRORS';

export const receiveEBErrors = errors => ({
    type: RECEIVE_EB_ERRORS,
    errors
});