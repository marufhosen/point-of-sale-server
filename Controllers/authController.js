var admin = require("firebase-admin");
require("dotenv").config();

// var serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
var serviceAccount = require("../Config/pos-app-319-firebase-adminsdk-u7jjg-c8b3d3d493.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function verifyToken(req, res, next) {
  if (req.headers?.authorization?.startsWith("Bearer ")) {
    const idToken = req.headers.authorization.split("Bearer ")[1];
    try {
      const decodedUser = await admin.auth().verifyIdToken(idToken);
      req.decodedUserEmail = decodedUser.email;
    } catch {
      res.status(500).json({ error: "authorization error" });
    }
  }
  next();
}

module.exports = verifyToken;
