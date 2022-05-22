import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./slices/articlesSlice";
import featuredSlice from "./slices/featuredSlice";
import aboutSlice from "./slices/aboutSlice";
import currentArticleSlice from "./slices/currentArticleSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    articlesSlice,
    featuredSlice,
    aboutSlice,
    currentArticleSlice,
  },
  middleware: (getDefalutMiddleware) => getDefalutMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
