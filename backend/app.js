const express =require("express");
const bcrypt = require('bcrypt');
const XLSX = require('xlsx');
const csv = require('fast-csv');
const cors =require('cors');
const fs =require('fs');
const Schema= require('./models/user_master_models.js');
require('./databases/connection.js');
const app =  express();
const port =process.env.PORT||8080;
app.use(express.json());
app.use(cors());
app.use("/files",express.static("./public/files"))

app.post('/add_user',async(req,resp)=>{
  let add_user = new Schema.user_model(req.body)
    let result = await add_user.save();
    result = result.toObject();
    let myToken = await add_user.getAuthToken();
    resp.status(200).json({message:"token generate",token:myToken})
    resp.send(result);



})


app.post('/addshipment',async(req,resp)=>{
  let addShipment = new Schema.addShipment_modal(req.body)
    let result = await addShipment.save();
    result = result.toObject();
    resp.send(result);
})

app.get('/shipments',async(req,resp)=>{
  let result = await Schema.shipment_record.find();
  resp.send(result);
  
})


app.post('/login', async (req, res) => {
  const { password, email } = req.body;

  if (password && email) {
    let user = await Schema.user_model.findOne({ email: email }); 

    if (user) {
      console.log(user.password)
      let match = await bcrypt.compare(password, user.password);
      console.log(match)
      if (match) {
        res.send({
          user,
          message: 'Login successful',
          status: 200
        });
      } else {
        res.send({
          message: 'Invalid email or password',
          status: 400
        });
      }
    } else {
      res.send({
        message: 'Invalid email or password',
        status: 400
      });
    }
  } else {
    res.send({
      message: 'Please provide both email and password',
      status: 400
    });
  }
});


app.get('/export', async (req, res) => {
  try {
    // Fetch the data from MongoDB collection
    const userData = await Schema.shipment_record.find();
    const csvStream = csv.format({ headers: true });

    if (!fs.existsSync("public/files")) {
      fs.mkdirSync("public/files");
    }

    if (!fs.existsSync("public/files/export")) {
      fs.mkdirSync("public/files/export");
    }

    const writableStream = fs.createWriteStream(
      "public/files/export/data.csv"
    );

    csvStream.pipe(writableStream);

    userData.forEach((user) => {
      csvStream.write({
        ClientCode: user.ClientCode || "-",
        TrackingNo: user.TrackingNo || "-",
        CourierCode: user.CourierCode || "-"
      });
    });

    csvStream.end();

    writableStream.on("finish", function() {
      res.json({
        downloadUrl: `http://localhost:8080/files/export/data.csv`
      });
    });

    writableStream.on("error", function(error) {
      console.error('Error:', error);
      res.status(500).send('An error occurred');
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});


 

app.listen(port, () => {
    console.log("Server is running on port " + port);
  })