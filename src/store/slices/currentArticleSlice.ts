import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IFullArticle } from "../types";
import { fetchRequest } from "../../helpers/fetchRequest";

interface InitialState {
  data: IFullArticle | null;
  loading: boolean;
  error: string | null;
}

export const fetchFullArticle = createAsyncThunk<
  IFullArticle,
  number,
  { rejectValue: string }
>("currentArticle/fetchFullArticle", async (id, thunkApi) => {
  try {
    const data = (await fetchRequest(
      `https://course.7t33n.ru/rest/v1/blog/article/${id}`
    )) as IFullArticle;
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue(
      e instanceof Error ? e.message : "Server Error"
    );
  }
});

const initialState: InitialState = {
  data: null,
  loading: false,
  error: null,
};

const currentArticleSlice = createSlice({
  name: "currentArticle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFullArticle.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchFullArticle.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFullArticle.rejected, (state, action) => {
        state.data = null;
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = "Unknown Error";
        }
      });
  },
});

export default currentArticleSlice.reducer;
