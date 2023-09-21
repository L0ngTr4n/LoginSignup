const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")
const LogInCollection = require("./mongo")
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)


app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.post('/signup', async (req, res) => {

    const newUser = new LogInCollection({
        name: req.body.name,
        password: req.body.password
    })

    console.log(req.body.name, req.body.password);
    
    LogInCollection.exists({name: req.body.name})
    .then((result) => {
        if (result === null) {
            newUser.save()
            .then(() => console.log("Inserted user with ", req.body.username, req.body.password))
            .catch((error) => console.log(error));
            
        } else {
            console.log("user already exists!");
            res.render("user details already exists");
        }
    })

    res.status(201).render("home", {
        naming: req.body.name
    })
})


app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })
        console.log(req.body.name, req.body.password);
        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }
    } 
    
    catch (e) {

        res.send("wrong details")
        

    }


})



app.listen(port, () => {
    console.log('port connected');
})