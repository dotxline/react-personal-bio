const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();
const secret = require("./keys.js");
const sg = require("sendgrid")(secret.values.api_key);
const compression = require("compression");

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));
app.set('view cache', true);

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.post('/sent', (req, res) => {
    var request = sg.emptyRequest({
        method: "POST",
        path: "/v3/mail/send",
        body: {
            personalizations: [{
                to: [{
                    email: secret.values.email,
                }, ],
                subject: req.body.subject,
            }, ],
            from: {
                email: req.body.email,
            },
            content: [{
                type: "text/plain",
                value: req.body.text,
            }, ],
        },
    });

    sg.API(request)
        .then(response => {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        })
        .catch(error => {
            console.log(error.response.statusCode);
        });
})

app.listen(port);
console.log("Server started")