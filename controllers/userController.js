import userModel from "../models/userModel.js";

export const updateUserController = async (req, res, next) => {
  const { name, email, lastName } = req.body;
  // req.user : provided by the authmiddleware on token data mapping
  
  const user = await userModel.findOne({ _id: req.user.userId });
  for (const key in req.body){
   user[key] = req.body[key];
  }
  await user.save();
  const token = user.createJWT();
  // preventing the password from transferring
  user.password = undefined;
  res.status(200).json({
    user,
    token,
  });
};

export const getMyInfo = async (req, res, next) => {
  const user = await userModel.findOne({_id: req.user.userId});
  user.password = undefined;
  res.status(200).json({
    user
  });
}
