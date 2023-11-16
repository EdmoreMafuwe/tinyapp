const express = require("express");
const app = express();
const PORT = 3000;

// Add this line to use EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse the request body
app.use(express.urlencoded({ extended: true }));

// Dummy function to generate a random string
function generateRandomString() {
  // Your implementation here
}

// GET route to render the form
app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

// POST route to handle form submission
app.post("/urls", (req, res) => {
  console.log(req.body); // Log the POST request body to the console

  // Replace the following with your logic to handle form submission
  res.send("Ok");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


