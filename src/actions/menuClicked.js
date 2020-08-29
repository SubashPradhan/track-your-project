export const MENU_CLICKED = 'MENU_CLICKED'

const getMenuClickedStatPayload = payload => ({
  type: MENU_CLICKED,
  payload
})

export const getMenuClickedStat = () => dispatch => {
  return dispatch(getMenuClickedStatPayload())
}