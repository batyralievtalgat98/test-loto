import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {data: (number | null)[][]} = {
  data: [
    [null, null, 28, null, 41, 55, null, 70, 82],
    [8, 14, null, null, 46, null, 62, 79, null],
    [6, null, 20, 39, null, null, 65, null, 90],
  ],
};

const lotoSlice = createSlice({
  name: "loto",
  initialState,
  reducers: {
    changeData: (state, action: PayloadAction<(number | null)[][]>) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { actions: lotoSliceActions } = lotoSlice;
export default lotoSlice.reducer;

