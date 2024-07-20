import { ArticleProvider } from "../ArticleContext"
import ArticleList from '../ArticleList';

export default function BlogParts() {
  return(
    <section id="blog" className="py-12 md:py-24 lg:py-32">
      <h2 className="text-center px-4 md:px-6 gap-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tech Blog</h2>
      <div className="px-4 md:px-6 space-y-12">
        <div className="text-center">
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            zennに書き溜めているテックブログです。
          </p>
        </div>
        <ArticleProvider>
          <div className="App">
            <ArticleList />
          </div>
        </ArticleProvider>
      </div>
    </section>
  )
};
