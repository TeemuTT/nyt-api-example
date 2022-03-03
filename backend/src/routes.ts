import express from 'express';
import axios from 'axios';
import { BestSellerListNamesResponse } from '../../shared/BestSellerListNames';
import { BestSellersResponse } from '../../shared/BestSellers';
import { BookReviewsResponse } from '../../shared/BookReviews';

const router = express.Router();

router.get('/lists', async (req, res, next) => {
  const url: string = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.API_KEY}`;

  axios
    .get<BestSellerListNamesResponse>(url)
    .then((response) => res.json(response.data.results))
    .catch(next);
});

router.get('/lists/:listName/best-sellers', async (req, res, next) => {
  const url: string = `https://api.nytimes.com/svc/books/v3/lists/current/${req.params.listName}.json?api-key=${process.env.API_KEY}`;

  return axios
    .get<BestSellersResponse>(url)
    .then((response) => {
      const top10 = response.data.results.books
        .sort((a, b) => a.rank - b.rank)
        .slice(0, 10);
      res.json(top10);
    })
    .catch(next);
});

router.get('/reviews/:isbn13', async (req, res, next) => {
  const url: string = `https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${req.params.isbn13}&api-key=${process.env.API_KEY}`;

  return axios
    .get<BookReviewsResponse>(url)
    .then((response) => res.json(response.data.results))
    .catch(next);
});

export default router;
