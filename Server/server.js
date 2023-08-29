const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const dbURI = process.env.dbURI;
const mongoose = require("mongoose");
const userRouts = require("./Routes/userRouter");
const aboutUsRouts = require("./Routes/aboutUsRouter");
const paymentRouts = require("./Routes/paymentRouter");
const BlogRouts = require("./Routes/blogRouter");
const CultureRouts = require("./Routes/culturesRouter");
const ServiceRouts = require("./Routes/serviceRouter");
const EventsRouts = require("./Routes/EventsRouter");
const ConversationRouts = require("./Routes/conversationsRouter");
const MessageRouts = require("./Routes/messagesRouter");
const GoogleRouts = require("./Routes/googleRouter");
const ForgotRouts = require("./Routes/forgotRouter");
const ReportRouts = require("./Routes/reportRouter");

const notFoundHandler = require("./middleware/404");


const errorHandler = require("./middleware/500");
const Protected = require("./middleware/Protected");
const app = express();
app.use(cors());


const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(userRouts);
app.use(ReportRouts);
app.use(aboutUsRouts);
app.use(paymentRouts);
app.use(BlogRouts);
app.use(CultureRouts);
app.use(ServiceRouts);
app.use(EventsRouts);
app.use(ConversationRouts);
app.use(MessageRouts);
app.use(GoogleRouts);
app.use(ForgotRouts);
app.use("*", notFoundHandler);
app.use(errorHandler);
app.use(Protected);



module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(PORT, () => {
          console.log(`Starting server on port ${PORT}`);
        });
      });
  },
};



