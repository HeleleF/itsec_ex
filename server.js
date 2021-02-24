const express = require('express');
const app = express();
const port = 4200;

// serve static files
app.use(express.static(__dirname, {
    index: 'index.html'
}));

// start server
app.listen(port, () => {
    console.log(`Test server started on port ${port}!`);
});

