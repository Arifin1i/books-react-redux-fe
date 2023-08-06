import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  status: boolean;
  title: string;
  author: string;
  genre: string;
  published: string;
}

const initialState: IProduct = {
  status: false,
  title: "",
  author: "",
  genre: "",
  published: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setAuthor: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setPublished: (state, action: PayloadAction<string>) => {
      state.published = action.payload;
    },
  },
});

export const { toggleState } = bookSlice.actions;

export default bookSlice.reducer;
