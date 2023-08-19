const express = require("express");
const html_router = require("./routes/html_routes");
const api_router = require("./routes/api_routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(html_router);
app.use(api_router);


app.listen(PORT, ()=>
    console.log(`App is listening at http://localhost:${PORT}`)
);