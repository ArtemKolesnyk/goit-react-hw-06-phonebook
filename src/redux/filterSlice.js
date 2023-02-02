import { createSlice } from '@reduxjs/toolkit';

const initialStateFilters = { filter: '' };

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialStateFilters,
  reducers: {
    setFilterContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { setFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
