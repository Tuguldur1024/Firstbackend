import { client } from "./dbconnect.js";

export const getCars = (req, res) => {
  client.connect((err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const collection = client.db("test").collection("MyDatabases");
    collection.find().toArray((err, result) => {
      if (err) res.status(500).send(err);
      if (result) res.status(200).json(result);
      client.close();
    });
  });
};

export const addcar = async (req, res) => {
  console.log(req.body);
  await client.connect((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    } else {
      console.log("successfully connected");
    }
    // const car = req.body;
    // const collection = client.db("test").collection("MyDatabases");
    // collection.insertOne(car, (err, result) => {
    //   if (err) res.status(500).send(err);
    //   if (result) res.status(200).json(result);
    //   client.close();
    // });
  });
};
