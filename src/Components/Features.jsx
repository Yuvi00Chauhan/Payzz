import React from "react";
import "./Features.css";

function Features() {
    
const features=[
    {
        icon:"💸",
        title: "Instant Money Transfer",
        descpription: "Transfer money instantly to anyone, anywhere, anytime."
    },
    {
        icon:"📲",
        title: "Mobile-Friendly Payments",
        descpription:"Seamless transactions from your mobile device, anywhere anytime.",
    },
    {
        icon: "🔐",
        title: "Secure Transactions",
        description: "Your data is protected with end-to-end encryption and secure authentication.",
      },
      {
        icon: "🧾",
        title: "Transaction History",
        description: "Track your expenses and payment history with detailed reports.",
      },
      {
        icon: "🌍",
        title: "Global Support",
        description: "Make international payments with ease and confidence.",
      },
      {
        icon: "🎁",
        title: "Rewards & Offers",
        description: "Enjoy cashback, discounts, and exclusive deals with every transaction.",
      },
    ];
  
    return (
      <div className="feature-page">
        <h1 className="feature-heading">Why Choose Payzz?</h1>
        <div className="feature-list">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }


export default Features;