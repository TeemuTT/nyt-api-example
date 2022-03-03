import React from "react";
import BookCard from "./BookCard";
import { useApp } from "./useApp";

function App() {
  const [
    listNames,
    selectedListName,
    books,
    getBooks,
    listNamesLoading,
    booksLoading,
  ] = useApp();

  return (
    <div className="p-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl">Bestsellers</h1>
        <h2 className="text-xl text-zinc-500">
          Select a category to see the current top 10 books
        </h2>
      </div>

      <div className="m-6 flex flex-row flex-wrap justify-center">
        {listNamesLoading && (
          <div className="w-10 h-10 bg-gray-400 rounded-full animate-pulse" />
        )}

        {listNames?.map((listName) => (
          <button
            onClick={() => getBooks(listName.list_name_encoded)}
            key={listName.list_name_encoded}
            className={
              "m-1 p-1 cursor-pointer rounded-xl hover:bg-sky-400" +
              (selectedListName === listName.list_name_encoded
                ? " bg-sky-400"
                : " bg-slate-200")
            }
          >
            {listName.display_name}
          </button>
        ))}
      </div>

      <div className="flex flex-col flex-wrap items-center">
        {booksLoading && (
          <div className="w-10 h-10 bg-gray-400 rounded-full animate-pulse" />
        )}

        {books?.map((book) => (
          <BookCard key={book.primary_isbn13} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
