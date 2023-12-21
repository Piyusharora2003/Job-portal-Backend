import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
//schema
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, " Email is Required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "password is require"],
      minlength: [6, "Password length should be greater than 6 character"],
      // select: false,
    },
    type: {
      type: String,
      required: true,
      enum: ['job_seeker', 'employer'],
    },
    profile: {
      type: mongoose.Schema.Types.Mixed, // Specific fields based on user type declared down 
      required: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },{ timestamps: true });

if (userSchema.type === 'job_seeker') {
  userSchema.profile = {
    skills: [String],
    experience: [String],
    education: [String],
  };
} else if (userSchema.type === 'employer') {
  userSchema.profile = {
    company: {
      type: String,
    },
  };
}

// middelwares
userSchema.pre("save", async function () {
  if (!this.isModified) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare password
userSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

//JSON WEBTOKEN
userSchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
export default mongoose.model("User", userSchema);




