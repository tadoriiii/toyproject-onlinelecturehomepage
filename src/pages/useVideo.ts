import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector, fetchResults } from "redux";

type TUseVideo = {
  getResults: () => void;
};

export const useVideo = (): TUseVideo => {
  const dispatch = useAppDispatch();
  const results = useAppSelector((state) => state.research.results);

  const getResults = useCallback(() => {
    dispatch(fetchResults());
  }, [dispatch]);

  return {
    getResults,
  };
};
