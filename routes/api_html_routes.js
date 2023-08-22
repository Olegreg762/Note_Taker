const express = require("express");
const path = require("path");
const fs = require("fs");
const {v4 : uuidv4} = require("uuid");
const router = express.Router();

const notes_path = "../db/db.json";
let notes_db = JSON.parse(
    fs.readFileSync(path.join(__dirname, notes_path))
)


////// ## HTML Routing ## ////// 

router.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

////// ## API Routing ## ////// 

router.get("/api/notes",(req,res)=>{
    res.json(notes_db)
});

router.post("/api/notes",(req,res)=>{
    const new_note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    notes_db.push(new_note);
    fs.writeFileSync(path.join(__dirname, notes_path),
    JSON.stringify(notes_db));
});

module.exports = router;