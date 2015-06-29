// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// var emptyArray = [] ---> '[]'
var stringifyJSON = function(obj) {

	// BASE CASE: if the length of the obj array is not equal to 0

		// TEST FOR A NULL || NUMBER || BOOLEAN
		if(obj === null || typeof obj === 'number' || typeof obj === 'boolean'){ // if the type of object == null
			return("" + obj);
		} // End of Null/Number/Boolean Test

		// TEST FOR AN ARRAY
		if(Array.isArray(obj)){
			var results = [];
			_.each(obj, function(item){
				var stringifiedItem = stringifyJSON(item);
				results.push(stringifiedItem);
		})
		return '[' + results.join() + ']'; // this will add all the items separated by a comma
} // End of Array Test

		// TEST FOR AN OBJECT	
		if(typeof obj === 'object'){
			var results = []; // create an array to hold the value
			_.each(obj, function(item, key){
				if(typeof item !== 'function' && item !== undefined){
					var stringifiedKey = stringifyJSON(key);
					var stringifiedItem = stringifyJSON(item);
					var stringResults = stringifiedKey + ':' + stringifiedItem;
					results.push(stringResults);
				}
			});
			return '{' + results.join(',') + '}'; // add the array and format it		
		} // End of Object Test 	

		// TEST FOR A STRING
		if(typeof obj === 'string') {
			return('"'+ obj + '"');
		} // End of String Test
		
	 // END OF BASE CASE: return the value
	
};

