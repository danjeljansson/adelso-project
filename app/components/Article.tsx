import React from "react";
import Image from "next/image";

type Article = {
  imageUrl: string;
  alt: string;
  name: string;
  articleUrl: string;
};

type ArticleDocument = {
  _id: string;
  articles?: Article[];
};

type ArticleProps = {
  articleData: ArticleDocument[];
};

const Articles: React.FunctionComponent<ArticleProps> = ({ articleData }) => {
  if (!articleData || articleData.length === 0) return null;

  const allArticles = articleData.reduce<Article[]>((acc, doc) => {
    if (doc.articles && doc.articles.length > 0) {
      return [...acc, ...doc.articles];
    }
    return acc;
  }, []);

  if (allArticles.length === 0) return null;

  return (
    <section className="text-gold-600 mx-auto my-12 w-full max-w-3xl rounded-lg border border-gray-200 bg-gradient-to-br from-pastel-green to-white p-6 shadow-lg">
      <h2 className="text-gold-600 prose mb-6 text-center font-serif text-4xl italic leading-tight">
        Läs om oss
      </h2>
      <div className="mt-6 flex flex-wrap justify-center gap-8">
        {allArticles.map((article, index) => (
          <a
            key={`${article.imageUrl}-${index}`}
            href={article.articleUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-40 w-40 items-center justify-center transition"
          >
            <Image
              src={article.imageUrl}
              alt={article.alt || article.name}
              width={200}
              height={200}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles;
