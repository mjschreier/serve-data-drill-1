const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
app.use(cors());

var cohorts = [{
    id: 1,
    cohortName: "17-01-WD-DP",
    cohortCode: "g100",
    students: 28,
  },{
    id: 2,
    cohortName: "17-01-DS-GT",
    cohortCode: "g105",
    students: 24,
  },{
    id: 3,
    cohortName: "17-02-WD-PX",
    cohortCode: "g109",
    students: 29,
  },{
    id: 4,
    cohortName: "17-03-WD-BD",
    cohortCode: "g110",
    students: 29,
  }
];

function findById(data, id) {
  for(let i = 0; i < data.length; i++) {
    if(data[i].id == id) {
      return data[i];
    }
  }
  return null;
}

app.get("/", function(request, response) {
  response.status(200);
  response.json({data: cohorts});
})

app.get("/:id", function(request, response) {
  var record = findById(cohorts, request.params.id);
  if(!record) {
    response.status(404);
    response.json({
      error: {
        message: "No record found",
    }})
  }
  response.status(200);
  response.json({data: record});
})

app.listen(port);
