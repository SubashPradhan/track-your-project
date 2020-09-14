export const SHOW_MODAL = "SHOW_MODAL"

const getShowModalPayload = payload => ({
  type: SHOW_MODAL,
  payload
})

export const showModalStat = () => dispatch => {
  return dispatch(getShowModalPayload())
}