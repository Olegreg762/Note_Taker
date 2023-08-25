// Module imports
const express = require("express");
const path = require("path");
const fs = require("fs");
const {v4 : uuidv4} = require("uuid");
// Initailize express router 
const router = express.Router();
// Path for json used as a database
const notes_path = "../db/db.json";
// Sets the database file to be read as JSON
let notes_db = JSON.parse(fs.readFileSync(path.join(__dirname, notes_path)))

////// ## API Routing ## ////// 

// Sets the route for notes takinn data
router.get("/api/notes",(req,res)=>{
    res.json(notes_db)
});
// Sets route for how a new notes will be processed
router.post("/api/notes",(req,res)=>{
    const new_note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    notes_db.push(new_note);
    fs.writeFileSync(path.join(__dirname, notes_path),JSON.stringify(notes_db));
    res.json(new_note);
});
// Determines how note deletes will be processed
router.delete("/api/notes/:id", (req,res)=>{
    const note_id = req.params.id;
    notes_db = notes_db.filter((note)=> note.id !== note_id);
    fs.writeFileSync(path.join(__dirname, notes_path), JSON.stringify(notes_db));
    res.json(notes_db);
});

////// ## HTML Routing ## ////// 

// route for the HTML file for notes  page
router.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Sets route for all undefined routes to route to main landing page index.html
router.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// Exports the router instant
module.exports = router;