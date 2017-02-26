export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export function signupRequest(email, password) {
  return {
    type: SIGNUP_REQUEST,
    email,
    password
  }
}

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS
  }
}

export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export function signupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    error
  }
}
