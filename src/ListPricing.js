import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const ListPricing = (props) => {
  const { cartItems } = props;
  let totalPrice = 0;

  cartItems &&
    cartItems.forEach((element) => {
      totalPrice += element.saleInfo.listPrice?.amount;
    });

  return cartItems.length ? (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 300,
        margin: "auto",
        padding: 2,
        backgroundColor: "#3f51b5"
      }}
    >
      <CardContent>
        <Typography variant="h6">Total Price</Typography>
        <Typography variant="h4" sx={{ color: "white" }}>
          ${totalPrice.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  ) : null;
};
