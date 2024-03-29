const express = require('express');
const handle = require('./handlers')




const app = express();
const port =4000;

app.get('/', (req, res) => res.json({hello: 'world'}));


app.use(handle.notFound);
app.use(handle.errors);



app.listen(port, console.log(`Server stared on port ${port}`));