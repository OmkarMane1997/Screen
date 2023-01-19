const { StatusCodes } = require("http-status-codes");
const DBconnection = require("../db/Connection");

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
};

module.exports = Controller;
