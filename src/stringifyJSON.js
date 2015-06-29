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
		if(Array.isArray(obj)){ // if the obj == array
			var result = '[';
				for(var i = 0; i < obj.length; i++) { // loop through each element
					result += (i ? ',' :'') + stringifyJSON(obj[i]);// call the function each element in the array
				}
			return(result + ']'); 
		} // End of Array Test

		// TEST FOR AN OBJECT	
		if(typeof obj === 'object'){
			var results = []; // create an array to hold the value
			for(var key in obj){
				results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key])); // recursively call the function on each key
				if(obj[key] === undefined || obj[key] === 'function') // if the object's key value is undefined
					return '{}'; // return {};
			} 
			return '{' + results.join(',') + '}'; // add the array and format it		
		} // End of Object Test 	

		// TEST FOR A STRING
		if(typeof obj === 'string') {
			return('"'+ obj + '"');
		} // End of String Test
		
	 // END OF BASE CASE: return the value
	
};
