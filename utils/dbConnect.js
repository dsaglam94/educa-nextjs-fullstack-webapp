const mongoose = require("mongoose");

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  console.log("MongoDB is connecting...");

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
  console.log("MongoDB is connected.");
}

export default dbConnect;
