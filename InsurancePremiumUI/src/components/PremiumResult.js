import React from "react";
import "./PremiumResult.css";

const PremiumResult = ({ premium, formData }) => {
  if (!premium) return null;

  return (
    <div className="premium-result-card">
      <h3>Premium Details</h3>

      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Age Next Birthday:</strong> {formData.ageNextBirthday}
      </p>
      <p>
        <strong>Occupation:</strong> {formData.occupation}
      </p>
      <p>
        <strong>Death Cover:</strong> ₹
        {Number(formData.deathSumInsured).toLocaleString()}
      </p>

      <hr />

      <h4>
        Monthly Premium:{" "}
        <span className="premium-amount">₹{premium?.monthlyPremium?.toFixed(2)}</span>
      </h4>
    </div>
  );
};

export default PremiumResult;
