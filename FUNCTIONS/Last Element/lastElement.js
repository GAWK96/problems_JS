//write a function called lastElement which accepts a single string argument.  
//The function should return the last element of the string (without removing the element).  
//If the array is empty, the function should return null


function lastElement(array)
   {
    if (array.length > 0) {
      return array.slice(-1);    
  } else 
  return null; }


