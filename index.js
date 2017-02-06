/*

- create/cd project folder
- mkdir views folder
- create/save form.pug into views
- create/save index.js (below) into root
- npm init
- npm install --save express
- npm install -g nodemon
- npm install --save body-parser multer
- npm install --save pug
- from browser, invoke http://localhost:3000/

*/

// ================= START /index.js ============================

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); 
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(upload.array()); // for parsing multipart/form-data
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('form');
});

app.post('/', function(req, res){
	console.log("WORKS........");
    console.log(req.body);
    res.send("recieved your request!");
});

app.listen(3000);

// ================= END /index.js ============================

/*
// ============ START views/form.pug ========================

html
    head
        title Form Tester
    body
        form(action="/", method="POST")
            div
                label(for="say") Say: 
                input(name="say" value="Hi")
            br
            div
                label(for="to") To: 
                input(name="to" value="Express forms")
            br
            button(type="submit") Send my greetings


// ============ END views/form.pug ========================
*/