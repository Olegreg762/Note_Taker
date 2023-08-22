const express = require("express");
const html_route = require("./routes/html_route");
const api_route = require("./routes/api_route");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(html_route);
// app.use(api_route);


app.listen(PORT, ()=>
    console.log(`App is listening at http://localhost:${PORT}`)
);