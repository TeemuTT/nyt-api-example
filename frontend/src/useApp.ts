import { useEffect, useState } from "react";
import { ListName } from "../../shared/BestSellerListNames";
import { Book } from "../../shared/BestSellers";
import axios from "axios";

export function useApp() {
  const [listNames, setListNames] = useState<ListName[]>([]);
  const [selectedListName, setSelectedListName] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [listNamesLoading, setListNamesLoading] = useState<boolean>(false);
  const [booksLoading, setBooksLoading] = useState<boolean>(false);

  useEffect(() => {
    setListNamesLoading(true);
    axios
      .get<ListName[]>("http://localhost:3000/api/lists")
      .then((response) => {
        setListNamesLoading(false);
        setListNames(response.data);
      })
      .catch((error) => {
        setListNamesLoading(false);
        console.error("Error fetching listNames", error);
      });
  }, []);

  const getBooks = (listName: string): void => {
    setSelectedListName(listName);
    setBooksLoading(true);
    axios
      .get<Book[]>(`http://localhost:3000/api/lists/${listName}/best-sellers`)
      .then((response) => {
        setBooksLoading(false);
        setBooks(response.data);
      })
      .catch((error) => {
        setBooksLoading(false);
        console.error("Error fetching books", error);
      });
  };

  return [
    listNames,
    selectedListName,
    books,
    getBooks,
    listNamesLoading,
    booksLoading,
  ] as const;
}
