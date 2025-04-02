import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  slug: string;
  date: string; // YYYY-MM-DD
  imageUrl: string;
  title: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ slug, date, imageUrl, title, excerpt }) => {
  const [year, month, day] = date.split('-');
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const monthAbbreviation = monthNames[parseInt(month) - 1];

  return (
    <article className="flex bg-white transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime={date}
          className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase dark:text-white"
        >
          <span>{year}</span>
          <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
          <span>{monthAbbreviation} {day}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt={title}
          src={imageUrl}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div
          className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
        >
          <Link to={`/blog/${slug}`}>
            <h3 className="font-bold text-gray-900 uppercase dark:text-white">
              {title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
            {excerpt}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            to={`/blog/${slug}`}
            className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-500"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;