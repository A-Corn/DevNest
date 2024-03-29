const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(espress.json());
app.use(express.urlencoded({extended: true }));
app.use(cors({ origin: "http://localhost:3000"}));


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)); 