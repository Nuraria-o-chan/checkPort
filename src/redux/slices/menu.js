import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchFilialMenu = createAsyncThunk(
  "filial/fetchFilialMenu",
  async ({ selectedFilialId, currentPage, stateActive }) => {
    const page = Number(currentPage) + 1;
    let activeParam =
      stateActive === null || stateActive === undefined
        ? ""
        : `&active=${stateActive}`;
    if (stateActive === true) {
      activeParam = "&active=active";
    } else if (stateActive === false) {
      activeParam = "&active=no_active"; 
    }
    const { data } = await axios.get(
      `/filial/${selectedFilialId}/menu/?limit=2&page=${page}${activeParam}`
    );
    return data;
  }
);
const initialState = {
  items: [],
  maxPages: null,
  currentPage: 0,
  stateActive: null,
  status: "idle",
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setStateActive(state, action) {
      state.stateActive = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilialMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilialMenu.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.maxPages = action.payload.max_pages;
        state.status = "loaded";
      })
      .addCase(fetchFilialMenu.rejected, (state) => {
        state.status = "error";
        console.error("Ошибка при загрузке меню");
      });
  },
});
export const menuReducer = menuSlice.reducer;
export const { setCurrentPage, setStateActive } = menuSlice.actions;
