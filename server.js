const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Liana:SlsjleJQo2ItAbv9@cluster0.ymn1q1z.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    proccess.exit(1);
  });
