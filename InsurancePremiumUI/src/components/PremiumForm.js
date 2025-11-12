import React, { useState } from "react";
import { calculatePremium } from "../services/premiumService";
import PremiumResult from "./PremiumResult";
import "./PremiumForm.css";

const occupations = [
  { name: "Cleaner", rating: "Light Manual" },
  { name: "Doctor", rating: "Professional" },
  { name: "Author", rating: "White Collar" },
  { name: "Farmer", rating: "Heavy Manual" },
  { name: "Mechanic", rating: "Heavy Manual" },
  { name: "Florist", rating: "Light Manual" },
  { name: "Other", rating: "Heavy Manual" },
];

const PremiumForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    ageNextBirthday: "",
    dob: "",
    occupation: "",
    deathSumInsured: "",
  });

  const [premium, setPremium] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    if (name === "occupation" && isValidForm(updatedForm)) {
      handleCalculate(updatedForm);
    }
  };

  const isValidForm = (data) =>
    data.name && data.ageNextBirthday && data.dob && data.occupation && data.deathSumInsured;

  const handleCalculate = async (data) => {
    try {
      const response = await calculatePremium(data);
      setPremium(response);
    } catch (error) {
      alert("Error calculating premium. Check backend connection.");
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm(formData)) {
      handleCalculate(formData);
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div className="premium-form-container">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Age Next Birthday:</label>
        <input
          type="number"
          name="ageNextBirthday"
          value={formData.ageNextBirthday}
          onChange={handleChange}
          required
        />

        <label>Date of Birth (MM/YYYY):</label>
        <input
          type="month"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Usual Occupation:</label>
        <select
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        >
          <option value="">Select Occupation</option>
          {occupations.map((occ) => (
            <option key={occ.name} value={occ.name}>
              {occ.name} ({occ.rating})
            </option>
          ))}
        </select>

        <label>Death – Sum Insured:</label>
        <input
          type="number"
          name="deathSumInsured"
          value={formData.deathSumInsured}
          onChange={handleChange}
          required
        />

        <button type="submit">Calculate Premium</button>
      </form>

      {premium && <PremiumResult premium={premium} formData={formData} />}
    </div>
  );
};

export default PremiumForm;
