// Module imports
const express = require("express");
const api_html_route = require("./routes/api_html_routes");
// Initailize express as app
const app = express();
// Set PORT variable that will change based on if the app is deployed via a service or locally
const PORT = process.env.PORT || 3002;
// Functions for express app to use
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",api_html_route);

// Port that express app is listening to
app.listen(PORT, ()=>
    console.log(`App is listening at http://localhost:${PORT}`)
);