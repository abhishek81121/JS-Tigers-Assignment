import mongoose from "mongoose";

export const conn = async () => {
  return await mongoose.connect(process.env.CONNECTION_STRING as string);
};
