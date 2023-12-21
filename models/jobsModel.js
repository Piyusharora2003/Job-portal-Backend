import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company: {
      type: String,
      required: [true, "Company name is required"],
    },
    position: {
      type: String,
      required: [true, "Job Position is required"],
      maxlength: 100,
    },
    workType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "contract"],
      default: "full-time",
    },
    status: {
      type: String,
      enum: ['open', 'closed', 'on-hold'],
      default: 'closed',
    },
    workLocation: {
      type: {
        type: String,
        enum: ['city', 'remote', 'hybrid'],
        default: 'hybrid',
      },
      city: String,
      country: String,
    },
    requirements: [String],
    responsibilities: [String],
    salary:{
      type: String,
      default: "Negotiable"
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);


export default mongoose.model("Job", jobSchema);
