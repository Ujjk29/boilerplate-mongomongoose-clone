require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = require("mongoose/lib/browser");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  let person = new Person({
    name: "Ujjawal Kumar",
    age: 21,
    favoriteFoods: ['Dhosa', 'Panner tikka']
  });
  person.save(function (err, data) {
    if(err) {
      console.log(err);
      done(err);
    } else {
      console.log("Data saved successfully. Data: " + data);
      done(null, data);
    }
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if(err) {
      done(err);
    } else {
      done(null, data);
    }
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function (err, data) {
    if(err) {
      done(err);
    } else {
      done(null, data);
    }
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, data) {
    if(err) {
      done(err);
    } else {
      done(null, data);
    }
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, data) {
    if(err) {
      done(err);
    } else {
      done(null, data);
    }
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function (err, person) {
    if(err) {
      done(err);
    }
    person.favoriteFoods.push(foodToAdd);
    person.save(function (err, updatedPerson) {
      if(err) {
        done(err);
      } else {
        done(null, updatedPerson);
      }
    })
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
