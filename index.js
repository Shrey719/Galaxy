const express = require('express');
const app = express();
const server = app.listen(8080, () => {
    console.log(`Server running on port ${server.address().port}`);
});
app.use(express.static('public'))
app.use(express.static('img')) // I know that you can prob just put it in /public but i dont care 
