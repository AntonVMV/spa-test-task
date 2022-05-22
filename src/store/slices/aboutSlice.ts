import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IAbout } from "../types";
import { fetchRequest } from "../../helpers/fetchRequest";

interface InitialState {
  data: IAbout | null;
  loading: boolean;
  error: string | null;
}

export const fetchAbout = createAsyncThunk<
  IAbout,
  undefined,
  { rejectValue: string }
>("about/fetchAbout", async (_, thunkApi) => {
  try {
    const data = (await fetchRequest(
      "https://course.7t33n.ru/rest/v1/about/"
    )) as IAbout;
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

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbout.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchAbout.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAbout.rejected, (state, action) => {
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

export default aboutSlice.reducer;
