import React from "react";
import { Book } from "../../shared/BestSellers";
import Review from "./Review";
import { useReviews } from "./useReviews";

interface Props {
  book: Book;
}

function BookCard({ book }: Props) {
  const [reviews, getReviews, reviewsLoading] = useReviews();

  return (
    <div className="w-1/2 p-4 bg-white shadow-lg m-4 rounded-xl border border-slate-200 flex flex-col items-center">
      <span className="block text-5xl">{book.rank}</span>
      <span className="block text-2xl text-indigo-700 capitalize">
        {book.title.toLowerCase()}
      </span>
      <span className="block">{book.author}</span>
      <span className="block text-sm">ISBN {book.primary_isbn13}</span>

      <div className="mt-6">
        {reviewsLoading && (
          <div className="w-10 h-10 bg-gray-400 rounded-full animate-pulse" />
        )}

        {!reviewsLoading &&
          (reviews === null ? (
            <button
              className="underline text-sky-600"
              onClick={() => getReviews(book.primary_isbn13)}
            >
              See reviews
            </button>
          ) : reviews.length === 0 ? (
            <span className="block">No reviews found</span>
          ) : (
            <span className="block">Reviews</span>
          ))}
      </div>

      <div>
        {reviews?.map((review) => (
          <Review key={review.url} review={review} />
        ))}
      </div>
    </div>
  );
}

export default BookCard;
