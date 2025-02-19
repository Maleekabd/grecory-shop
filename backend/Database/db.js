import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("mongodb connected");
  } catch (error) {
    console.error("mongodb connection failed " + error.message);
    process.exit(1);
  }
};

export default connectToMongoDB;
