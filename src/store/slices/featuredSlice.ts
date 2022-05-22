import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "../types";
import { fetchRequest } from "../../helpers/fetchRequest";

interface InitialState {
  data: IArticle | null;
  loading: boolean;
  error: string | null;
}

export const fetchFeatured = createAsyncThunk<
  IArticle,
  undefined,
  { rejectValue: string }
>("featured/fetchFeatured", async (_, thunkApi) => {
  try {
    const data = (await fetchRequest(
      "https://course.7t33n.ru/rest/v1/blog/featured"
    )) as IArticle;
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

const featuredSlice = createSlice({
  name: "featured",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeatured.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchFeatured.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFeatured.rejected, (state, action) => {
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

export default featuredSlice.reducer;
