import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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
  async (_, { rejectWithValue }) => {
    const response = await onRequestSearch({
      q: "python",
      part: "snippet",
      key: "AIzaSyBW0uCM9zAxXShUnOR8mxdM2FPrp1fzTz4",
      maxResults: 5,
    });

    // FIXME: data에 바로 http status code가 오나요
    if (response.data === 200) {
      // TODO: 개발 당시에만 console 체크하고 나중에 지우기
      console.log(response);
      return response.data as SearchState;
    } else {
      return rejectWithValue(response);
      // console.log("fail");
    }
  }
);

const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchResults.fulfilled,
      (state, action: PayloadAction<SearchState | undefined>) => {
        state = action.payload as SearchState;
        // state.results = action.payload;
      }
    );
  },
});

export default resultSlice.reducer;
