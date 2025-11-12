import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/premium";

export async function calculatePremium(data) {
  const response = await axios.post(`${API_BASE_URL}/calculate`, {
    name: data.name,
    ageNextBirthday: Number(data.ageNextBirthday),
    dateOfBirth: data.dob,
    occupation: data.occupation,
    sumInsured: Number(data.deathSumInsured),
  });
  return response.data;
}
