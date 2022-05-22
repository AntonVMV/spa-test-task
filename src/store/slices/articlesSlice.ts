import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "../types";
import { fetchRequest } from "../../helpers/fetchRequest";

interface InitialState {
  data: IArticle[];
  loading: boolean;
  error: string | null;
}

export const fetchArticles = createAsyncThunk<
  IArticle[],
  undefined,
  { rejectValue: string }
>("articles/fetchArticles", async (_, thunkApi) => {
  try {
    const data = (await fetchRequest(
      "https://course.7t33n.ru/rest/v1/blog/articles"
    )) as IArticle[];
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue(
      e instanceof Error ? e.message : "Server Error"
    );
  }
});

const initialState: InitialState = {
  data: [],
  loading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = "Unknown Error";
        }
      });
  },
});

export default articlesSlice.reducer;
