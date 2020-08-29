export const SCROLL_HEIGHT = "SCROLL_HEIGHT"

const getScrollHeightPayload = payload => ({
  type: SCROLL_HEIGHT,
  payload
})

export const getScrollHeight = (refs) => dispatch => {
  const ref = refs.map(singleRef => singleRef.current.getBoundingClientRect().top)
  const scrollHeight = {
    homeScrollHeight: ref[0],
    aboutScrollHeight: ref[1],
    goalsScrollHeight: ref[2]
  }
  const action = getScrollHeightPayload(scrollHeight)
  return dispatch(action)
}

