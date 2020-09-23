export const HANDLE_SIGNUP = "HANDLE_SIGNUP"

const signupPayload = payload => ({
  type: HANDLE_SIGNUP,
  payload
})

export const signupStat = () => dispatch => {
  return dispatch(signupPayload())
}