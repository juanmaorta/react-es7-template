export const Actions = {
  DOCK_BUTTON_PRESSED: 'DOCK_BUTTON_PRESSED',
  TEST_ACTION: 'TEST_ACTION'
};

export function uiReducer(state = {}, action) {
    console.log('uiReducer was called with state', state, 'and action', action)

    switch (action.type) {
        case Actions.DOCK_BUTTON_PRESSED:
          state = {
            ...state
          }
          state.isOpened = !state.isOpened;
          console.log(state);
          return state;
        case Actions.TEST_ACTION:
          console.log('asdd');
          return state;
          break;
        // etc.
        default:
          return state;
    }
}
