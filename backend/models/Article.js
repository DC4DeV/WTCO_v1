import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const ArticlesSchema = new Schema({
  id: String,
  title: String,
  author: String,
  date: String,
  content: String,
  comments:  [{author: String, date: String, content: String}],
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Article', ArticlesSchema);