import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/mydatabase")
  .then(() => {
    console.log("u have successfully connected guys to mongodb  ");
  })
  .catch((e) => {
    console.log(e);
  });
// now we need a schema for register pages
const Register = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Register", Register);

export default Users;
