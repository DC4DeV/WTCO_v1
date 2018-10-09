import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const MissionsSchema = new Schema({
  id: String,
  compagny_id: String,
  loading_place: String,
  loading_adress: String,
  loading_postcode: String,
  loading_city: String,
  loading_date: String,
  real_loading_date: String,
  loading_hour: String,
  arrival_loading_hour: String,
  departure_loading_hour: String,
  km_loading: Number,
  unloading_place: String,
  unloading_adress: String,
  unloading_postcode: String,
  unloading_city: String,
  unloading_date: String,
  real_unloading_date: String,
  unloading_hour: String,
  arrival_unloading_hour: String,
  departure_unloading_hour: String,
  km_unloading: Number,
  mission_comment: String,
  comment_load: String,
  comment_unload: String,
  drivers: Array,
  vehicle_id: String, // ID de vehicles utilisé
  trailor_id: String, // ID du vehicles le cas échéant
  loaded: Boolean,
  unloaded: Boolean,
});

// export our module to use in server.js
export default mongoose.model('Mission', MissionsSchema);