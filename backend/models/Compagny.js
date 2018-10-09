import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const CompagnySchema = new Schema({
  id: String,
  role: String,
  name: String,
  owner: String,
  mail: String,
  phone: String,
  siret: String,
  adress: String,
  password: String,
  });

// export our module to use in server.js
export default mongoose.model('Compagny', CompagnySchema);
