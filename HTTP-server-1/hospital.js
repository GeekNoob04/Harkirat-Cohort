const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
var users = [
  {
    name: "harshit",
    mental: [
      {
        healthy: false,
      },
    ],
  },
];
app.get("/", (req, res) => {
  const harshitMental = users[0].mental;
  const numOfMental = harshitMental.length;
  let healthyMental = 0;
  for (let i = 0; i < harshitMental.length; i++) {
    if (harshitMental[i].healthy) {
      healthyMental = healthyMental + 1;
    }
  }
  const unhealthyMental = numOfMental - healthyMental;
  res.json({
    numOfMental,
    healthyMental,
    unhealthyMental,
  });
});

app.post("/", (req, res) => {
  const isMental = req.body.isMental;
  users[0].mental.push({
    healthy: isMental,
  });
  res.json({
    msg: "completed",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].mental.length; i++) {
    users[0].mental[i].healthy = true; // reset all to true
  }
  res.json({
    msg: "done put",
  });
});

function checkForUnhealthy() {
  let oneUnhealthy = false;
  for (let i = 0; i < users[0].mental.length; i++) {
    if (!users[0].mental[i].healthy) {
      oneUnhealthy = true;
    }
  }
  return oneUnhealthy;
}
app.delete("/", (req, res) => {
  const newMental = [];
  if (checkForUnhealthy()) {
    for (let i = 0; i < users[0].mental.length; i++) {
      if (users[0].mental[i].healthy) {
        newMental.push({
          healthy: true,
        });
      }
    }
    users[0].mental = newMental;
    res.json({
      msg: "delete done",
    });
  } else {
    res.status(411).json({
      msg: "no one is unhealthy",
    });
  }
});
app.listen(port);
