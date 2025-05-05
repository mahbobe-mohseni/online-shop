import mongoose from "mongoose";

async function connect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shopping");
  console.log("connected.");
}

function convertToObj(doc) {  // This is the correct name: "convertToObj"
  doc._id = doc._id.toString();
  return doc;
}

const db = { connect, convertToObj }; // Exporting the correct function name
export default db;
