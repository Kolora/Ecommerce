import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Button,
  Snackbar,
  Grid,
  TextField
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  },
  paymentForm: {
    marginBottom: theme.spacing(2)
  },
  paymentButton: {
    marginTop: theme.spacing(2)
  }
}));

const PaymentPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: ""
  });

  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Logic for payment processing
    // Upon successful payment, set the state to true to show the alert
    // Simulate a successful payment after 2 seconds
    setTimeout(() => {
      setIsPaymentSuccess(true);
      // Redirect to home page or order confirmation page
      // navigate("/");
    }, 1000);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsPaymentSuccess(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevPaymentData) => ({
      ...prevPaymentData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic for processing payment form data
    console.log(paymentData);
    // Complete the payment process
    // Show payment success message or redirect to success page
  };

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={12} sm={8} md={6} lg={4} className={classes.paymentForm}>
        <h2>Payment</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Card Number"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Card Holder Name"
            name="cardHolderName"
            value={paymentData.cardHolderName}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Expiry Date"
            name="expiryDate"
            value={paymentData.expiryDate}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="CVV"
            name="cvv"
            value={paymentData.cvv}
            onChange={handleChange}
            required
            fullWidth
          />
          <Grid item xs={12} className={classes.checkoutButtonContainer}>
            <Button
              color="secondary"
              type="submit"
              variant="contained"
              className={classes.paymentButton}
              onClick={handlePayment}
            >
              Submit Payment
            </Button>
          </Grid>
        </form>
      </Grid>
      <Snackbar
        open={isPaymentSuccess}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert onClose={handleAlertClose} severity="success">
          Order successfully placed!
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default PaymentPage;
