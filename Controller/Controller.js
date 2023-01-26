const { StatusCodes } = require("http-status-codes");
const DBconnection = require("../db/Connection");
const validator = require("validator");

const Controller = {
  read: async (req, res) => {
    try {
      let getAllData = `Select id,name, email, avatar, role,lastLogin,twoStep,created_date from screen_master WHERE is_active=1`;
      let result = await DBconnection(getAllData);
      // console.log(result);
      let length = result.length;
      res.status(StatusCodes.OK).json({ result, length });
    } catch (err) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const { name, email, role, twoStep } = req.body;
      if (validator.isAlpha(name) && !validator.isWhiteSpace(name) == false) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ msg: " Enter Only Aa-Zz Characters" });
      }
      // Validation of Email
      if (validator.isEmail(email) == false) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ msg: " Enter Only Valid Email" });
      }
      if (validator.isAlpha(role) && !validator.isWhiteSpace(name) == false) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ msg: " User Role Not Empty" });
      }

      let insertData = `INSERT INTO screen_master (name, email, role, twoStep ) VALUES ("${name}","${email}","${role}","${twoStep}")`;
      // console.log(insertData);
      let result = await DBconnection(insertData);
      // console.log(result.insertId);
      if (result.insertId > 0) {
        res
          .status(StatusCodes.OK)
          .json({ msg: " Registration SuccessFull", result });
      }
    } catch (err) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: err.message });
    }
  },
};

module.exports = Controller;
