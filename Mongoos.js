// Mongoose Query Object:-

//Mongoose models provide several static helper functions for CRUD operations.
// Each of these functions returns a mongoose Query object.
//A mongoose query can be executed in one of two ways. First,
// if you pass in a callback function, Mongoose will
// execute the query asynchronously and pass the results to the callback.

//A query also has a .then() function, and thus can be used as a promise.

//Here are some Query Object-

//   1. Model.deleteMany()
//Deletes all of the documents that match conditions from the collection.
// It returns an object with the property deletedCount containing the
// number of documents deleted. Behaves like remove(), but deletes all
// documents that match conditions regardless of the single option.


//   2. Model.updateOne()
//Same as update(), except it does not support the multi or overwrite options.

//MongoDB will update only the first document that matches filter
// regardless of the value of the multi option.

//   3. Model.findByID()
//Finds a single document by its _id field. findById(id)
// is almost* equivalent to findOne({ _id: id }).
// If you want to query by a document's _id, use findById()
// instead of findOne().
//The id is cast based on the Schema before sending the command.

//   4. Model.findOneAndReplace()
//Finds a matching document, replaces it with the provided doc,
// and passes the returned doc to the callback.
//Executes the query if callback is passed.

