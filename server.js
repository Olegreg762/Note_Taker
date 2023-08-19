const express = require("express");
const html_route = require("./routes/html_routes");
const api_route = require("./routes/api_routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(html_route);
app.use(api_route);


app.listen(PORT, ()=>
    console.log(`App is listening at http://localhost:${PORT}`)
);