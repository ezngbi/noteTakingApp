const {nanoid} = require('nanoid')
const express = require('express');
const app = express();

app.use(express.json());

let notesList = [{
  id: nanoid(),
  text: "testing testing 1",
  date: 'mm/dd/yyyy'
},
{
  id: nanoid(),
  text: "testing testing 2",
  date: 'mm/dd/yyyy'
},
{
  id: nanoid(),
  text: "testing testing 3",
  date: 'mm/dd/yyyy'
}
]

app.get('/notes', (req, res) => {
  res.json(notesList);
})

app.post('/notes', (req, res) => {
  notesList.push(req.body);
  res.end()
})

app.delete('/notes/:id', (req, res) => {
  const {id} = req.params;
  console.log(id)
  notesList = notesList.filter((note) => note.id !== id)
  res.end()
})

app.listen(5000, () => { console.log("Server started on port 5000") });
