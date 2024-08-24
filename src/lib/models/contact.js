import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: String,
    phone: String,
    email: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      enum: ["", "frontend", "backend", "fullstack"],
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

const Contacts =
  mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);

export default Contacts;
