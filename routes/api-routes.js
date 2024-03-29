// // This file contains the routes for the api.
const router = require("express").Router();
const uuidv1  = require("uuid/v1");
const fs = require("fs");

// // Route to index.html
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    res.json(dbJson);
});

// // Route to notes.html
router.post('/api/notes', async (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv1(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);
});

// // Route for delete request
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync("db/db.json","utf8");
    const dataJSON =  JSON.parse(data);
    const newNotes = dataJSON.filter((note) => { 
      return note.id !== req.params.id;
    });
    fs.writeFileSync("db/db.json",JSON.stringify(newNotes));
    res.json("Note deleted.");
  });

module.exports = router;