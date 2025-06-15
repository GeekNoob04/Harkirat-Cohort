const express = require("express");
const app = express();
const port = 3000;

function calcSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}
app.get("/", (req, res) => {
  let n = req.query.n;
  let ans = calcSum(n);
  res.send(ans.toString());
});
app.listen(port);
