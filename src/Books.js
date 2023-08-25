import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./BookList.js";
import { Typography } from "@mui/material";
const Books = ({ setCartItems, cartItems }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from Google Books API
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAav2UZsFBJ_nkqmjbHLElNiheoOevoAd8"
      )
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div>
      <img
        src={`https://getliterary.com/app/uploads/2018/06/Bookstore-Bookshelves_iStock-541137274_Get-Lit_EL-1120x630.jpeg`}
        alt="Books"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover"
        }}
      />
      <Typography variant="h4" sx={{ pb: 1, pt: 3 }}>
        Discover your Books
      </Typography>
      <BookList
        setCartItems={setCartItems}
        cartItems={cartItems}
        books={books}
      />
    </div>
  );
};

export default Books;
