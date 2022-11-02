const { MongoClient, ServerApiVersion } = require("mongodb");
export function ConnectDatabase() {
  const uri = `mongodb+srv://bertan:${process.env.DB_PASSWORD}@cluster0.stm0wtw.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  return client;
}
