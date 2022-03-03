import { BookReview } from "../../shared/BookReviews";
import React from "react";

interface Props {
  review: BookReview;
}

function Review({ review }: Props) {
  return (
    <div className="mt-6">
      <span className="block">{review.byline || "By unknown reviewer"}</span>
      <span className="block">{review.summary}</span>
      <a href={review.url} rel="noreferrer" target="_blank" className="underline text-sky-600">
        {review.url}
      </a>
    </div>
  );
}

export default Review;
