const app = require("./app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Site is live at http://localhost:${PORT}`);
});
