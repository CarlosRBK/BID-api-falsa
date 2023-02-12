const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) ); 
app.use(require('./routes/routes_usuarios'));
app.use(require('./routes/routes_company'));
app.use(require('./routes/routes_companie'));


app.listen( port, () => console.log(`Listening on port: ${port}`) );