const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;


//DO I NEED TO USE THESE ; I THINK YES.
/*
app.use(express.urlencoded);
app.use(express.json())
*/


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//ADD IN MY ROUTES
app.use(routes);

//setup the
//mongoose.connect(process.env.MONGODB_URI || "monogodb://localhost/googlebooks", {useNewUrlParser: true})
// SAVING THE ABOVE BECAUSE OH MY GOD --- WHY DID THIS TAKE SO LONG FOR ME TO SEE THE TYPO
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true});


// Send every request to the React app
// Define any API routes before this runs

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
