const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

const isNumber = value => typeof value === 'number' && !isNaN(value);

app.post('/bfhl', (req, res) => {
  try {
    const { array } = req.body;
    
 
    const user_id = "vishalli_2110992395"; 
    
    const numbersArray = array.map(item => Number(item)).filter(isNumber);
    const evenNumbers = numbersArray.filter(num => num % 2 === 0);
    const oddNumbers = numbersArray.filter(num => num % 2 !== 0);
    const alphabetsUpperCase = array.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());


    const response = {
      "is_success": true,
      "user_id": user_id,
      "email":"vishalli2395.be21@chitkara.edu.in",
      "roll_number":"2110992395",
      "odd_numbers": oddNumbers,
      "even_numbers": evenNumbers,
      "uppercase_alphabets": alphabetsUpperCase
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ "is_success": false, "error": "Internal server error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
