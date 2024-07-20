/**
 * 記事に関する状態の更新ロジックを中心に管理します。
 * @ArticleReducer
 */
export const articleReducer = (state: ArticleState, action: ArticleAction): ArticleState => {
  switch (action.type) {
    case 'FETCH_ARTICLES_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_ARTICLES_SUCCESS':
      return { ...state, loading: false, articles: action.payload };
    case 'FETCH_ARTICLES_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export type ArticleState = {
  articles: Article[];
  loading: boolean;
  error: string | null;
};

export type ArticleAction =
  | { type: 'FETCH_ARTICLES_REQUEST' }
  | { type: 'FETCH_ARTICLES_SUCCESS'; payload: Article[] }
  | { type: 'FETCH_ARTICLES_FAILURE'; payload: string };


export type Article = {
  id: number;
  post_type: string,
  title: string,
  slug: string,
  comments_count: number,
  liked_count: number,
  body_letters_count: number,
  article_type: string,
  emoji: string,
  is_suspending_private: boolean,
  published_at: Date,
  body_updated_at: Date,
  source_repo_updated_at: Date | null,
  pinned: boolean,
  path: string,
  user: User, 
  publication: Publication | null
}
export type Articles = {
  article: {
    articles: Article[]
    next_page: string | null
  }
}

type User = {
  id: number,
  username: string,
  name: string,
  avatar_small_url: string
}
type Publication = {
  id: number,
  name: string,
  display_name: string,
  avatar_small_url: string,
  pro: boolean,
  avatar_registered: boolean
}