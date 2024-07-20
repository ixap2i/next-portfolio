import React, { createContext, useReducer, ReactNode } from 'react';
import { articleReducer, ArticleState, ArticleAction } from './ArticleReducer';

/**
 * 記事に関連するデータと機能を子コンポーネントに提供するための仕組みです。
 * @ArticleContext
 */
const initialState: ArticleState = {
  articles: [],
  loading: false,
  error: null,
};

export const ArticleContext = createContext<{
  state: ArticleState;
  dispatch: React.Dispatch<ArticleAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ArticleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(articleReducer, initialState);

  return (
    <ArticleContext.Provider value={{ state, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};