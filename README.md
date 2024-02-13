# Welcome to my note taking app
The design credit goes to https://dribbble.com/shots/11875872-A-simple-and-lightweight-note-app/attachments/3501129?mode=media

# Backend
Express.js
APIs used:
  - GET /notes: retrieving all notes from the server to display to the client
  - POST /notes: creating new notes to the server
  - DELETE /notes/:id : deleting the note that has the given id

# Frontend
HTML, CSS, JavaScript, React.js
React components include: Note (containing the content and display the notes), NoteContainer (containing the Note objects), AddNote (a special "Note" that is used just for adding new notes)

# How to use the code
  - Download the zip file from the github repo
  - Open the folder in the terminal
  - To set up the server:
      - `cd server`
      - `npm i`
      - `npm run dev`
  - To set up the client:
  -   `cd client`
  -   `npm i`
  -   `npm start`
  -   The client should automatically open the website on your server. If it doesn't then you can access it by going to localhost:3000

# How can this project be improved:
## Backend:
- Implement a database system (SQL or noSQL should both be fine)
- Implement a login system
    - Since we haven't had a login system, the APIs are not protected so anyone can use tools like Postman to send unauthorized API requests
- Deploy in a Dockerized environment
- App needs to be deployed to the internet on services like Firebase or Heroku
- MVC design pattern
## Frontend:
- Implement safety measures to avoid attacks like Cross-site Scripting
- Implement more advanced CSS
## Functionality
- Adding tags to notes
- Having a search functionality
- Login system
