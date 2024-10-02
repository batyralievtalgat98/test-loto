import { createSelector } from '@reduxjs/toolkit';

type WithAnnualApplicationState = {
  loto: {
    data: (number | null)[][]
  };
};

export const lotoStateSelector = (
  state: WithAnnualApplicationState,
): {data: (number | null)[][]} => state.loto;

export const getLotoDataSelector = createSelector(
    lotoStateSelector,
  (lotoState) => {
    return lotoState.data;
  },
);