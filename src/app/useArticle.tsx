import { useContext } from 'react';
import axios from 'axios';
import { ArticleContext } from './ArticleContext';
import { Articles } from './ArticleReducer';

export const useArticle = () => {
  const { state, dispatch } = useContext(ArticleContext);

  const fetchArticles = async () => {
    dispatch({ type: 'FETCH_ARTICLES_REQUEST' });
    try {
      const response = await axios.get<Articles>('/api/article');
      const articles = response.data.article.articles.map(article => ({
        ...article,
        published_at: new Date(article.published_at)
      }));
      dispatch({ type: 'FETCH_ARTICLES_SUCCESS', payload: articles });
    } catch (error) {
      dispatch({ type: 'FETCH_ARTICLES_FAILURE', payload: `${error}` });
    }
  };

  return {
    articles: state.articles,
    loading: state.loading,
    error: state.error,
    fetchArticles,
  };
};