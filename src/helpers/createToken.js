const jwt = require("jsonwebtoken");

module.exports = {
  createAccessToken: (data) => {
    const key = "saitama";
    const token = jwt.sign(data, key, { expiresIn: "2h" });
    return token;
  },
  createEmailVerifiedToken: (data) => {
    const key = "king";
    const token = jwt.sign(data, key, { expiresIn: "1m" });
    
  },
  createTokenRefresh: (data) => { // untuk ambil token access yang baru setelah kadaluarsa
    
    const key = "gogo"
    const toket = jwt.sign(data, key)
    return token;
  }
  
};
