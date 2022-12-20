import { createSlice } from '@reduxjs/toolkit';

// currentPoll is a collection exclusive for the poll publisher.
// Refers to the state after the poll was started, and before the poll has been published.
const currentPollSlice = createSlice({
  name: 'current-poll',
  initialState: {
    currentPollCollection: {},
    ready: false,
  },
  reducers: {
    addCurrentPoll: (state, action) => {
      const { currentPollObject } = action.payload;
      state.currentPollCollection[currentPollObject.id] =
        action.payload.currentPollObject.fields;
    },
    removeCurrentPoll: (state, action) => {
      const { currentPollObject } = action.payload;
      delete state.currentPollCollection[currentPollObject.id];
    },
    editCurrentPoll: (state, action) => {
      const { currentPollObject } = action.payload;
      state.currentPollCollection[currentPollObject.id] = {
        ...state.currentPollCollection[currentPollObject.id],
        ...action.payload.currentPollObject.fields,
      };
    },
    readyStateChanged: (state, action) => {
      state.ready = action.payload;
    },
  },
});

export const {
  addCurrentPoll,
  removeCurrentPoll,
  editCurrentPoll,
  readyStateChanged,
} = currentPollSlice.actions;
export default currentPollSlice.reducer;
