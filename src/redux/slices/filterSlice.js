import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sortType: { name: 'popularity', type: 'rating' },
  sortOrder: 'desc'

}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setSortType: (state, action) => {
      state.sortType = action.payload
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload
    },
  },
})

export const { setCategoryId, setSortType, setSortOrder } = filterSlice.actions

export default filterSlice.reducer