import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { onRequestSearch } from "common";

type TResult = {
  title: string;
  desciption: string;
  url: string;
};

type SearchState = {
  results: TResult[];
};

const initialState: SearchState = {
  results: [],
};

export const fetchResults = createAsyncThunk(
  "results/fetchResults",
  async () => {
    const response = await onRequestSearch({
      q: "python",
      part: "snippet",
      key: "AIzaSyBW0uCM9zAxXShUnOR8mxdM2FPrp1fzTz4",
      maxResults: 5,
    });
    if (response.data === 200) {
      console.log(response);
      return response.data;
    } else {
      console.log("fail");
    }
  }
);

export const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResults.fulfilled, (state, action) => {
      state.results = action.payload;
    });
  },
});

export default resultSlice.reducer;
