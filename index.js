const express = require('express');
const app = express();
const server = app.listen(8080, () => {
    console.log(`Server running on port ${server.address().port}`);
});
app.use(express.static('assets'))
console.log("imported assets")
app.use(express.static('img')) // Yes i can keep it in public but i dont care 
console.log("imported img")
console.log("static imports finished")
// static imports are don i think
