module.exports = {
  VerifyToken: (req, res, next) => {
    //console.log("header", req.rawHeaders[15]);
    //   if (
    //     req.rawHeaders[15] === "http://localhost:3000" ||
    //     req.rawHeaders[19] === "http://localhost:3000"
    //   )
    next();
  },
};
