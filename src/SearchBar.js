import axios from "axios";
import React, { useEffect, useState } from "react";
import BookList from "./BookList.js";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Link, Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  cartItemsContainer: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2)
    }
  },
  checkoutButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  checkoutButton: {
    marginLeft: theme.spacing(2)
  }
}));

const SearchBar = ({
  searchResults,
  setSearchResults,
  setCartItems,
  cartItems
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const list_of_search_terms = [
    "node.js",
    "express.js",
    "mongodb",
    "mysql",
    "middleware"
  ];

  const navigate = useNavigate();
  const classes = useStyles();

  const handleSearch = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
          searchTerm
        )}&key=AIzaSyAav2UZsFBJ_nkqmjbHLElNiheoOevoAd8`
      )
      .then((response) => {
        setSearchResults(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  };

  useEffect(() => {
    let current_search_term =
      list_of_search_terms[
        Math.floor(Math.random() * list_of_search_terms.length)
      ];
    if (!searchTerm) {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
            current_search_term
          )}&key=AIzaSyAav2UZsFBJ_nkqmjbHLElNiheoOevoAd8`
        )
        .then((response) => {
          setSearchResults(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    }
  }, [searchTerm, setSearchResults]);

  useEffect(() => {
    setSearchResults([]);
  }, []);

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Box display="flex" gap={2}>
        <TextField
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search books..."
          size="small"
        />
        <Button onClick={handleSearch} color="primary" variant="contained">
          Search
        </Button>
      </Box>
      <Grid container justifyContent="flex-end">
        <Button
          color="secondary"
          variant="contained"
          onClick={handleCart}
          className={classes.checkoutButton}
        >
          Go To Cart
        </Button>
      </Grid>
      <BookList
        setCartItems={setCartItems}
        cartItems={cartItems}
        books={searchResults}
      />
    </Box>
  );
};

export default SearchBar;
