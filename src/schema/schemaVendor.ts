import mongoose from "mongoose";
export const vendorSchema = new mongoose.Schema({
  "Vendor Name": String,
  "Bank Account No*": String,
  "Bank Name": String,
  "Address Line 1": String,
  "Address Line 2": String,
  City: String,
  Country: String,
  "Zip Code": String,
});
export const vendorModel =
  mongoose.models.Info || mongoose.model("Info", vendorSchema);
