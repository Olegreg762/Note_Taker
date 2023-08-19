const path = require("path");
const router = require("express");

router.get("/notes",(req,res)=>{
    res.send(path.join(__dirname, "../public/notes.html"));
});
router.get("*",(req,res)=>{
    res.send(path.join(__dirname, "../public/index.html"))
})

module.exports = router;