import { useState } from "react";
import { BookReview } from "../../shared/BookReviews";
import axios from "axios";

export function useReviews() {
  const [reviews, setReviews] = useState<BookReview[] | null>(null);
  const [reviewsLoading, setReviewsLoading] = useState<boolean>(false);

  const getReviews = (isbn13: string): void => {
    setReviewsLoading(true);
    axios
      .get<BookReview[]>(`http://localhost:3000/api/reviews/${isbn13}`)
      .then((a) => {
        setReviewsLoading(false);
        setReviews(a.data);
      })
      .catch((e) => {
        setReviewsLoading(false);
        console.error("Error fetching books", e);
      });
  };

  return [reviews, getReviews, reviewsLoading] as const;
}
