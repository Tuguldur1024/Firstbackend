import { MongoClient, ServerApiVersion } from "mongodb";
import { connectionString } from "../secret.js";

export const client = new MongoClient(
  "mongodb+srv://Tuguldur1024:Bilguun1024@dbuser2.qx4oh.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  }
);
