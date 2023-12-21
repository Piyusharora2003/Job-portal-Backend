import userModel from "../models/userModel.js";

export const registerNewUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  //validate
  if (!name || !email || !password) {
    next("missing field is required");
  }
  
  const exisitingUser = await userModel.findOne({ email });
  if (exisitingUser) {
    next("Email already in use");
  }
  const user = await userModel.create(req.body);
  const token = user.createJWT();
  user.password = undefined;
  res.status(201).send({
    sucess: true,
    message: "User Created Successfully",
    user,
    token,
  });
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  //validation
  if (!email || !password) {
    next("Please Provide All Fields");
  }
  //find user by email
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid Useraname or password");
  }
  //compare password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid Useraname or password");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login SUccessfully",
    user:{
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      // profile picture can be added  based on app requirements
    },
    token,
  });
};
