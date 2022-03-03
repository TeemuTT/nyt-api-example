export interface BookReviewsResponse {
    status: string;
    copyright: string;
    num_results: number;
    results: BookReview[];
}
export interface BookReview {
    url: string;
    publication_dt: string;
    byline: string;
    book_title: string;
    book_author: string;
    summary: string;
    uuid: string;
    uri: string;
    isbn13: string[];
}
