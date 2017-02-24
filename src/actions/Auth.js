export const AUTH_REQUEST = 'AUTH_REQUEST';
export function authRequest(email, password) {
  return {
    type: AUTH_REQUEST,
    email,
    password
  }
}

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export function authSuccess(user) {
  return {
    type: AUTH_SUCCESS,
    user
  }
}
