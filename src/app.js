const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
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

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//define external routes
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const userRoute = require("./routes/userRoute");

app.get('/', (req, res) => {
    res.send("Bruh");
});

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/user/:id', userRoute);

//Listen on port 3000
app.listen(port, () => {
    console.log(`On http://localhost:${port}.`);
});