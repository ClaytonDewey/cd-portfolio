const express = require("express");
const router = express.Router();
const cors = require("cors");
require("dotenv").config();
const nodemailer = require("nodemailer");

const app = express();
const hostname = "165.227.207.57";
const port = 5000;
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port, hostname, () =>
  console.log(`Server Running on http://${hostname}:${port}`)
);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "clay@dryadmedia.com",
    subject: subject,
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

contactEmail.verify((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Ready to Send");
  }
});
