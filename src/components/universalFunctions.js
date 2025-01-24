

export const displayView = (viewType, viewPayload, dispatch) => {
    dispatch({
      type: viewType,
      payload: viewPayload,
    })
  }

