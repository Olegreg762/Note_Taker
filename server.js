const express = require("express");
const api_html_route = require("./routes/api_html_routes");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",api_html_route);


app.listen(PORT, ()=>
    console.log(`App is listening at ${PORT}`)
);