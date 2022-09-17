import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { searchShow: false };
const searchList = createSlice({
  name: "search list",
  initialState,
  reducers: {
    showSearch(state) {
      state.searchShow = true;
    },
    coleSearch(state) {
      state.searchShow = false;
    },
  },
});

const store = configureStore({
  reducer: searchList.reducer,
});

// multiinitialState
// multiinitialState
// const store = configureStore({
//   reducer: {search:initalState.reducers},
// });

export const searchAction = searchList.actions;

export default store;
