import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: null,
  category: [
    'По юр лицам',
    'По номеру ИП',
    'По номеру ИД',
    'По ИНН юр лица',
  ],
  activeCategory: null,
  debtorData: []
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    }
  }
});

export const { setCategoryId } = categorySlice.actions;
export default categorySlice.reducer;
