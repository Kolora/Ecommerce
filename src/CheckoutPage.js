import React, { useState } from "react";
import { makeStyles, Grid, TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  },
  formContainer: {
    marginBottom: theme.spacing(2)
  },
  textField: {
    marginRight: theme.spacing(2)
  },
  checkoutButton: {
    marginTop: theme.spacing(2)
  }
}));

const CheckoutPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Redirect to payment page
    navigate("/payment");
  };

  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={12} sm={8} md={6} lg={4} className={classes.formContainer}>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={classes.textField}
            required
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={classes.textField}
            required
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            fullWidth
          />
          <Button
            color="secondary"
            type="submit"
            variant="contained"
            onClick={handlePayment}
            className={classes.checkoutButton}
          >
            Proceed to Payment
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default CheckoutPage;
