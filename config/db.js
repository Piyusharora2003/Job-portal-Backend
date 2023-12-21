import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(
      `Connected To Mongodb Database`
    );
  } catch (error) {
    console.warn(`MongoDB Erorr ${error}`);
  }
};

export default connectDB;
