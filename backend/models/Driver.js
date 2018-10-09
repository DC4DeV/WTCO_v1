import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const DriverSchema = new Schema({
    id: String,
    role: String,
    last_name: String,
    first_name: String,
    nickname: String,
    picture: String,
    birthdate: String,
    sexe: String,
    adress: String,
    licence: String,
    licence_validity: String,
    medical_visits: [{date: String}],
    fcos: String,
    formations: [{date: String, label: String, organism: String}],
    nss: String,
    mail: String,
    password: String,
    phone: Number,
    nationality: String,
    compagny_id: String,
    // languages: [Schema.Types.ObjectId],
    // current_vehicles: [Schema.Types.ObjectId],
    // vehicles_history: [Schema.Types.ObjectId],
    // missions: [Schema.Types.ObjectId],
    // articles_fav: [Schema.Types.ObjectId],
    // friends: [Schema.Types.ObjectId],
});

// export our module to use in server.js
export default mongoose.model('Driver', DriverSchema);
