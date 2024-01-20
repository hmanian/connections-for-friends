const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
// recordRoutes.route("/connectoin").get(function (req, res) {
//  let db_connect = dbo.getDb("employees");
//  db_connect
//    .collection("records")
//    .find({})
//    .toArray(function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// This section will help you get a single record by id
// recordRoutes.route("/record/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("records")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// This section will help you create a new record.
router.post("/puzzle/add", async(req, response) => {
 let db_connect = dbo.getDb();
//  console.log(db_connect)
 let newDocument = {
   user_name: req.body.user_name,
   date_time: new Date(),
   puzzle: req.body.puzzle
 };
 let collection = await db_connect.collection("connections");
 let result = await collection.insertOne(newDocument);
  response.send(result).status(204);
});

// This section will help you get a list of all the records.
router.get("/puzzle/:user/:time", async(req, response) => {
  let db_connect = dbo.getDb();
  console.log(req.params.user)
  console.log(req.params.time);
 let query = { user_name: req.params.user, date_time: new Date(req.params.time)};
 let mycollection = await db_connect.collection("connections");
 let result = await mycollection.findOne(query);

  if (!result) response.send("Not found").status(404);
  else response.send(result['puzzle']).status(200);
});
 
 
// This section will help you update a record by id.
// recordRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level,
//    },
//  };
//  db_connect
//    .collection("records")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 
module.exports = router;
// export default router;
// module.exports.routes;