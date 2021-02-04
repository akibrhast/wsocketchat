/** server for groupchat */

const PORT = process.env.PORT || 3000;

const app = require("./app");


app.listen(PORT, function () {
  console.log("server started on 3000");
});