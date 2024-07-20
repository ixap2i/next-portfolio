import React, { useEffect } from 'react';
import { useArticle } from './useArticle';
import Link from "next/link"
import CardBackground from './images/mesh-898.png'

const ArticleList: React.FC = () => {
  const { articles, loading, error, fetchArticles } = useArticle();

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) return <div>{Loading()}</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map(article => (
        <div key={article.id} className="bg-background rounded-lg overflow-hidden shadow-lg">
          <img
            src={CardBackground.src}
            width={400}
            height={300}
            alt={'Blog Post' + article.id}
            className="w-full h-48 object-cover bg-slate-700"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">{article.title}</h3>
            <p className="mt-2 text-muted-foreground">liked!!
            </p>
            <HeartComponent liked={article.liked_count} />
            <span className="mt-2 text-muted-foreground">published at {prettierDate(article.published_at)}</span>
            <div className="mt-4">
              <Link
                href={'https://zenn.dev/' + article.path}
                target='_blank'
                className="inline-flex items-center gap-2 text-primary hover:underline"
                prefetch={false}
              >
                <span>Read More</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ArrowRightIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
};

function Loading() {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="100"
      height="100"
      style={{shapeRendering: 'auto', display: 'block', background: 'rgb(255, 255, 255, 0)'}}>
      <g>
      <circle fill="#ec4899"
        r="13"
        cy="23"
        cx="50">
      <animate values="23;77;23"
      keyTimes="0;0.5;1" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" calcMode="spline" repeatCount="indefinite" dur="1s" attributeName="cy"></animate>
    </circle><g></g></g></svg>
  )
};
const HeartIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg 
      className={className}
      fill="rgb(236, 72, 153)"
      height="16px"
      width="16px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 471.701 471.701"
      style={{marginRight: '4px'}}>
      <g>
        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
          c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
          l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
          C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
          s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
          c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
          C444.801,187.101,434.001,213.101,414.401,232.701z"/>
      </g>
    </svg>
  )
}

function prettierDate(date: Date): string {
  return date.toISOString()
};

interface GoodComponentProps {
  liked: number
}

const HeartComponent: React.FC<GoodComponentProps> = ({liked}) => {
  return (
    <div className='flex basis-2'>
      {[...Array(liked)].map((_like, idx) => <HeartIcon key={idx} />)}
    </div>
  )
};

export default ArticleList;