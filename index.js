require('dotenv').config();

const username = process.env.USERNAME;
const shell = process.env.SHELL;

if (process.argv[2] === 'web-49') {
    console.log('Woohoo!');
} else {
    console.log('sadge :(');
}

console.log(`Current user: ${username}`);
console.log(`The shell is: ${shell}`);

const express = require('express');
const { json } = require('express/lib/response');
const app = express();

app.get('/hello', (req, res) => {
    res/json({ message: 'Howdy!' });
});

const port = process.env.PORT || 9000; // Heroku wants to set its own port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})