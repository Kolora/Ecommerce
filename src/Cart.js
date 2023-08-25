import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Box, Typography, makeStyles } from "@material-ui/core";
import { ListPricing } from "./ListPricing.js";
import BookItem from "./BookItem.js";

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
  },
  listPricingContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2)
    }
  }
}));

const Cart = ({ cartItems, setCartItems }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleRemoveFromCart = (book) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== book.id)
    );
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const onGoBackClick = () => {
    navigate("/");
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={8} md={8} className={classes.cartItemsContainer}>
        <Typography variant="h4">Cart</Typography>
        {cartItems.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            handleBtnClick={handleRemoveFromCart}
            btnText="Remove from Cart"
          />
        ))}
        {!cartItems?.length && (
          <Box sx={{ py: 2 }}>
            <Typography sx={{ pb: 1 }}>No Items in cart.</Typography>
            <Button color="primary" variant="contained" onClick={onGoBackClick}>
              Go to Inventory
            </Button>
          </Box>
        )}
      </Grid>

      <Grid
        item
        xs={4}
        sm={2}
        md={2}
        className={classes.listPricingContainer}
        justifyContent="flex-end"
      >
        <ListPricing cartItems={cartItems} />
      </Grid>

      <Grid item xs={12} className={classes.checkoutButtonContainer}>
        <Button
          color="secondary"
          variant="contained"
          onClick={handleCheckout}
          disabled={!cartItems?.length}
          className={classes.checkoutButton}
        >
          Proceed to Checkout
        </Button>
      </Grid>
    </Grid>
  );
};

export default Cart;
