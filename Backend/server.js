import express from "express";
import Users from "./Mongo.js";
import cors from "cors";
import bcrypt from "bcrypt";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: "birhan_kabtamu",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/sessions",
    }),
    cookie: { secure: false, httpOnly: true },
  })
);

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Could not hash the password");
  }
};

app.post("/register", async (req, res) => {
  const { Username, email, password, role } = req.body;
  try {
    if (!Username || !email || !password || !role) {
      return res.status(401).json({ message: "All fields are required" });
    }
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await hashPassword(password);
    const user = new Users({ Username, email, password: hashedPassword, role });
    await user.save();
    res.status(202).json({ message: "Successfully Registered!" });
  } catch (error) {
    console.error("Error saving user to database: ", error);
    res.status(500).json({ message: "Registration failed!" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch && user.role === role) {
      req.session.userId = user._id;
      req.session.role = user.role;
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Login failed" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

app.get("/hr", isAuthenticated, hasRole("hr"), (req, res) => {
  res
    .status(200)
    .json({ message: `Welcome, HR pages guys be free to be whom  you are ` });
});
app.get("/manager", isAuthenticated, hasRole("manager"), (req, res) => {
  res.status(200).json({
    message: `Welcome, Manager pages guys be free to be whom  you are `,
  });
});
app.get(
  "/receptionist",
  isAuthenticated,
  hasRole("receptionist"),
  (req, res) => {
    res.status(200).json({
      message: `Welcome, Receptions pages guys be free to be whom  you are receptionist in this country`,
    });
  }
);
function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  } else {
    res.status(401).json({ message: "Please log in" });
  }
}

function hasRole(role) {
  return (req, res, next) => {
    if (req.session.role === role) {
      return next();
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  };
}
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.status(200).json({ message: "Logout successful" });
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
