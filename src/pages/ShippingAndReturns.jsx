import React from "react";
import classes from "./ShippingAndReturns.module.css"; // Assuming you will add custom styles

// Define the ShippingAndReturns functional component
function ShippingAndReturns() {
  return (
    <div className={`${classes.shippingAndReturns} page page-width`}>
      <h1>Shipping and Returns</h1>

      <section className={classes.section}>
        <h2>Shipping Information</h2>
        <p>
          We aim to process and ship your order as quickly as possible. Please
          see below for more details on our shipping policies and options.
        </p>

        <h3>Processing Time</h3>
        <p>
          All orders are processed within 1-2 business days (excluding weekends
          and holidays) after receiving your order confirmation email. You will
          receive another notification when your order has shipped.
        </p>

        <h3>Shipping Rates and Estimates</h3>
        <p>
          Shipping charges for your order will be calculated and displayed at
          checkout.
        </p>
        <ul>
          <li>
            <strong>Standard Shipping:</strong> 5-7 business days
          </li>
          <li>
            <strong>Express Shipping:</strong> 2-3 business days
          </li>
          <li>
            <strong>Overnight Shipping:</strong> 1-2 business days
          </li>
        </ul>

        <h3>Local Delivery</h3>
        <p>
          Free local delivery is available for orders over $50 within a 10-mile
          radius. For orders under $50, we charge a $5 delivery fee.
        </p>
      </section>

      <section className={classes.section}>
        <h2>Returns and Exchanges</h2>
        <p>
          We accept returns up to 30 days after delivery if the item is unused
          and in its original condition. We will refund the full order amount
          minus the return shipping costs.
        </p>

        <h3>Return Process</h3>
        <p>
          To start a return, please contact our support team at support@tnz.com.
        </p>

        <h3>Exchanges</h3>
        <p>
          The fastest way to ensure you get what you want is to return the item
          you have, and once the return is accepted, make a separate purchase
          for the new item.
        </p>
      </section>
    </div>
  );
}

export default ShippingAndReturns;
