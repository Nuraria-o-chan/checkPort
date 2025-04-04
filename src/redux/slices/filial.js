import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchFilial = createAsyncThunk("filial/fetchFilial", async () => {
  const { data } = await axios.get("/filial/");
  return data;
});

const initialState = {
  filials: {
    items: [],
    status: "idle",
  },
  selectedFilialId: 1,
};
const filialSlice = createSlice({
  name: "filial",
  initialState,
  reducers: {
    setSelectedFilialId: (state, action) => {
      state.selectedFilialId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilial.pending, (state) => {
        state.filials.items = [];
        state.filials.status = "loading";
      })
      .addCase(fetchFilial.fulfilled, (state, action) => {
        state.filials.items = action.payload;
        state.filials.status = "loaded";
      })
      .addCase(fetchFilial.rejected, (state) => {
        state.filials.items = [];
        state.filials.status = "error";
        console.error("Ошибка при загрузке филиалов");
      });
  },
});
export const { setSelectedFilialId } = filialSlice.actions;
export const filialReduser = filialSlice.reducer;
