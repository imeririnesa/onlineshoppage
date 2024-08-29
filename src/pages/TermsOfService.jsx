import React from "react";
import classes from "./TermsOfService.module.css"; // Assuming you will add custom styles

function TermsOfService() {
  return (
    <div className={`${classes.termsOfService} page page-width`}>
      <h1>Terms of Service</h1>

      <section className={classes.section}>
        <h2>Introduction</h2>
        <p>
          Welcome to TNZ! These Terms of Service govern your use of our website
          and services. By using our website, you agree to these terms and
          conditions. If you do not agree with any part of these terms, please
          do not use our services.
        </p>
      </section>

      <section className={classes.section}>
        <h2>Intellectual Property</h2>
        <p>
          All content on our website, including text, images, and graphics, is
          the property of TNZ or its content suppliers and is protected by
          copyright and intellectual property laws. You may not reproduce,
          distribute, or create derivative works from any content without our
          express written permission.
        </p>
      </section>

      <section className={classes.section}>
        <h2>User Responsibilities</h2>
        <p>
          You agree to use our website and services in compliance with all
          applicable laws and regulations. You are responsible for maintaining
          the confidentiality of your account information and for all activities
          that occur under your account. If you believe your account has been
          compromised, please contact us immediately.
        </p>
      </section>

      <section className={classes.section}>
        <h2>Limitation of Liability</h2>
        <p>
          TNZ shall not be liable for any indirect, incidental, special, or
          consequential damages arising out of or in connection with your use of
          our website or services. Our total liability to you for any claims
          arising from these Terms of Service shall be limited to the amount you
          paid for the services or products in question.
        </p>
      </section>

      <section className={classes.section}>
        <h2>Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Any
          changes will be effective immediately upon posting on our website.
          Your continued use of our services following the posting of any
          changes constitutes your acceptance of those changes.
        </p>
      </section>

      <section className={classes.section}>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at tnz@email.com.
        </p>
      </section>
    </div>
  );
}

export default TermsOfService;
