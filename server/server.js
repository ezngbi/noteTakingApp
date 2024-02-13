const {nanoid} = require('nanoid')
const express = require('express');
const app = express();

app.use(express.json());

const notesList = [{
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

app.post('/notes', async (req, res) => {
  notesList.push(req.body);
  res.end()
})

app.listen(5000, () => { console.log("Server started on port 5000") });
