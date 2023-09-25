const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Client = require('../models/Client');

passport.use(new LocalStrategy({
    usernameField: 'email'
},
  async (username:any,password:any,done:any) => {
    const client = await Client.findOne({email:username});
    if(!client){
        return done(null,false,{msg:'E-mail incorreto!'})
    }
    const clientHash = client.hash;
    const hash = client.getHash(password,client.salt);
    if(clientHash != hash){
        return done(null,false,{msg:'Senha incorreta!'})
    }
    return done(null,client);
  }
));