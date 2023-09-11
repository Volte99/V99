const Users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUsers = async (req, res) => {
  //1 if phoneNumber already exists
  const matched = await Users.exists({ phoneNumber: req.body.phoneNumber });
  if (matched) {
    res.status(409).json({
      msg: "User Already Exists",
    });
  } else {
    //encrypt the password
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    await Users.create(req.body);
    res.status(201).json({
      msg: "User created successfully",
    });
  }
};

const loginUsers = async (req, res) => {
  //req.body -> phoneNumber, password
  const data = await Users.findOne({
    phoneNumber: req.body.phoneNumber,
  }).lean();
  if (data) {
    const isMatched = await bcrypt.compare(req.body.password, data.password);
    if (isMatched) {
      const { password, ...userDetails } = data;
      //token generating logic
      const token = jwt.sign(
        { phoneNumber: req.body.phoneNumber },
        process.env.SECRET_KEY
      );
      res.json({
        success: true,
        token,
        userDetails,
      });
    } else {
      res.json({
        success: false,
        msg: "Incorrect login credentials",
      });
    }
  } else {
    res.json({
      success: false,
      msg: "No User Found",
    });
  }
}

module.exports = {
  registerUsers,
  loginUsers,
};
