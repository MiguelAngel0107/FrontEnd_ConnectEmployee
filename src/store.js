import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

// Crea y configura el store de Redux
const makeStore = () =>
  configureStore({
    reducer: {},
  });

// Exporta la función createWrapper
export const wrapper = createWrapper(makeStore);
