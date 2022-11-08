import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  //code here
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1]; //"Bearer of97fd78fgd7s9g7ds9g7s7g9g8s0d9g8"

    if (token) {
      let decodedData = jwt.decode(token);
      req.googleId = decodedData.sub; //9189d8sd9f8df
    }
    next();
  } catch (error) {
    res.send(error.message);
  }
};

export default auth;
