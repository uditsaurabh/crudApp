import { createSlice } from "@reduxjs/toolkit";
import { get, post, put, deleteBook } from "../../api";
import { toast } from "react-toastify";
const uri = "http://localhost:5000/api/v1/book";
// Slice
const slice = createSlice({
  name: "book",
  initialState: [],
  reducers: {
    GetBook: (state, action) => {
      state = action.payload;
      return state;
    },
    AddBook: (state, action) => {
      let data = action.payload;
      data.id = state.length + 1;
      state.push(action.payload);
    },
    DeleteBook: (state, action) => {
      state = state.filter((book) => {
        return book._id !== action.payload;
      });
      return state;
    },
    EditBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});
export default slice.reducer;

// Actions
const { AddBook, EditBook, DeleteBook, GetBook } = slice.actions;

export const GetBooksInStore = () => async (dispatch) => {
  try {
    const res = await get(uri);
    dispatch(GetBook(res));
  } catch (e) {
    return console.error(e.message);
  }
};

export const AddBookInStore = (data) => async (dispatch) => {
  try {
    const res = await post(uri, data);
    toast("Add sucessfull");
    dispatch(AddBook(res));
  } catch (e) {
    toast("Add failed");
    return console.error(e.message);
  }
};
export const EditBookInStore = (data) => async (dispatch) => {
  try {
    const res = await put(uri, data);
    toast("Edit sucessfull");
    return dispatch(EditBook(res));
  } catch (e) {
    toast("Edit failed");
    return console.error(e.message);
  }
};
export const DeleteBookInStore = (data) => async (dispatch) => {
  try {
    let r = await deleteBook(uri, data);
    toast("delete sucessfull");
    return dispatch(DeleteBook(data));
  } catch (e) {
    toast("delete failed");
    return console.error(e.message);
  }
};
