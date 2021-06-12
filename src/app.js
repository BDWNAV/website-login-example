const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const config = require("./config.json");

//Connect to the database.
mongoose.connect(config.mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("Connected to the database.");
}).catch((err) => {
    console.log(err);
});

//Setting the view directory, set the view engine (ejs) and also letting us serve css.
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

//define external routes


app.get('/', (req, res) => {
    res.render('index');
});

//Listen on port 3000
app.listen(port, () => {
    console.log(`On http://localhost:${port}.`);
});