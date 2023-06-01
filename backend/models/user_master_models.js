const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const user_schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    c_password:{
        type:String,
        required: true
    },
    tokens:[
        {
            token:{
                type:String,
                require:true
            }
        }
    ]
    
});

const addShipment_schema = new mongoose.Schema({
    awb : String,
    name : String,
    email : String,
    orderId : String,
    stype : String,
    couriers : String,
    mobile : Number,
    country : String,
    companyname : String,
    currentDate : String
})
const shipment_schema = new mongoose.Schema({
    clientCode:String,
    trackingNo:String,
    courierCode:Number,
    
})

user_schema.pre('save', function(next) {
    if (this.password && this.isModified('password')) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
  
        bcrypt.hash(this.password, salt, (err, hashedPassword) => {
          if (err) return next(err);
          this.password = hashedPassword;
  
          bcrypt.hash(this.c_password, salt, (err, hashedCPassword) => {
            if (err) return next(err);
            this.c_password = hashedCPassword;
            next();
          });
        });
      });
    } else {
      next();
    }
  });
  

user_schema.methods.getAuthToken =async function(data){
    let params = {
        id:this._id,
        email:this.email,
        password:this.password
    }
    var tokenValue = jwt.sign(params, 'shhhhhsafdgjghjgjg');
    this.tokens = this.tokens.concat({token:tokenValue})
    await this.save()
    return tokenValue;
}


const addShipment_modal= mongoose.model('addShipments',addShipment_schema);
const user_model = mongoose.model('user_data',user_schema);
const shipment_record = mongoose.model('shipment_records',shipment_schema);

module.exports = {addShipment_modal, user_model,shipment_record}
