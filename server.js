const express = require('express');
const app = express();
//const uuidAPIKey = require('uuid-apikey');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));
app.use(express.json());


const key = {
  apiKey: '2GD4YNP-PDA4JZX-M4T3SXW-7GPQWJ3',
  uuid: '141a4f56-b354-497f-a134-3cf73c2d7e48'
}



app.post('/api/users/', async (req, res) => {
    //let { apikey, type } = req.params;

    const AdForm = {
        name: "songAD",
        AdLink: "this is a link",
        description: "hi this is a testAd!!"
    }

    // if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
    //     res.send('api key is not valid..');
    // } else {
        const hobby = {
            Fashion: req.body.Fashion,
            Food: req.body.Food,
            Travel: req.body.Travel,
            Medical: req.body.Medical,
            Education: req.body.Education,
            Exercise: req.body.Exercise
        }
        console.log(hobby);

        // ** use groth16 **
        //res.send(AdForm);
        if (hobby.Fashion > 1 && hobby.Medical > 1 && hobby.Education > 1) {
            res.send(AdForm);
        } else {
            res.send("invalid!!!");
        }

    //}
});

app.listen(port, () => console.log(`Listen ${port}`));
