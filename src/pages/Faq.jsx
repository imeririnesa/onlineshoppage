import React, { useState } from "react"; 
import classes from "./Faq.module.css"; 
import { faqs } from "../assets/dummyData"; 

function FAQPage() {
  // useState hook to manage the index of the currently opened FAQ item
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the visibility of an answer when a question is clicked
  const toggleAnswer = (index) => {
    // If the clicked question is already open, close it by setting openIndex to null
    // Otherwise, set openIndex to the clicked question's index
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${classes.faqPage} page page-width page-width--narrow`}>
      <h2>Frequently Asked Questions</h2>
      <div className={classes.faqList}>
        {/* Map over the list of FAQs and render each question */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={classes.faqItem}
            onClick={() => toggleAnswer(index)}
          >
            <div className={classes.faqQuestion}>
              <h4>{faq.question}</h4>
              {/* Display a "-" if the answer is open, otherwise display a "+" */}
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            {/* Conditionally render the answer based on whether the question is open */}
            {openIndex === index && (
              <div className={classes.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
