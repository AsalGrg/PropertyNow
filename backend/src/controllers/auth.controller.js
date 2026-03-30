const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcryt = require("bcryptjs");
const { createJwtToken, isTokenValid } = require("../utilities/jwt.utilities");

async function registerUser(req, res) {
  try {
    // getting all the data in the response
    const { email, password, name } = req.body;

    // checking if the email already exists
    const userExists = await checkForEmailExists(email);

    // if user with same email exists
    if (userExists) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    // if not all fields are filled properly
    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long.",
      });
    }

    //   creating a new user
    await UserModel.create({
      name: name,
      password: await bcryt.hash(password, 10),
      email: email,
    });

    //   sending the generated token in cookie in client side

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong, please try again later.",
    });
  }
}

async function loginUser(req, res) {
  try {
    const { usernameOrEmail, password } = req.body;
    // getting user with same username or password
    const user = await UserModel.findOne({
      $or: [{ email: usernameOrEmail }, { name: usernameOrEmail }],
    });

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long.",
      });
    }

    //   giving user not found message if no user is found
    if (!user) {
      return res.status(401).json({
        message: "User does not exist",
      });
    }

    //   checking if the password is valid
    const isPasswordValid = await bcryt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    //   create a token if credentials match
    const token = createJwtToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
    });

    res.status(200).json({
      message: "User login successful",
      user:user
    });
  } catch {
    res.status(400).json({
      message: "Something went wrong, please try again later.",
    });
  }
}

async function getCurrentUserData(req, res) {
  const decoded = isTokenValid(req);
  if (!decoded) {
    return res.status(401).json({
      message: "User not logged in",
    });
  }

  const user = await UserModel.findOne({
    _id: decoded.id,
  });

  res.status(200).json({
    user: user,
  });
}

// utility function
async function checkForEmailExists(email) {
  const user = await UserModel.findOne({
    email: email,
  });

  if (user) {
    return true;
  } else {
    return false;
  }
}

module.exports = { registerUser, loginUser, getCurrentUserData };
