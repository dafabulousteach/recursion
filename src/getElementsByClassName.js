// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// THE CALL document.getElementsByClassName('targetClassName');

var getElementsByClassName = function(className
){
  // className is passed
  var child = document.body;
  var matches = []; // instantiate a variable to hold the matching class names

  if(child.getAttribute('class') === className){ // if the class name is equal to the target
    matches.push(child);// push it to the array

  }
  
    function digDeep(val){
      for(var i = 0; i < val.childNodes.length; i++){
        if(val.childNodes[i].hasChildNodes()){ // if there is a child node present
          digDeep(val.childNodes[i]); // call digDeep on the child nodes
        }
        if($(val.childNodes[i]).hasClass(className)){ // if the class name is equal to the target
          matches.push(val.childNodes[i]); // push it to the array
        
    }
    

      }
    }
    digDeep(child);
    console.log(matches);
    return matches;// return an array of the matching nodes
};


