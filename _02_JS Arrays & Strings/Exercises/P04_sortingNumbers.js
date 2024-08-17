function sortingNumbers(array) {
   let sorterArray = array.sort((a,b) => a-b);
  
    let outputArray = [];
  
   while (sorterArray.length > 0) {
    outputArray.push(sorterArray.shift())
    if(sorterArray.length === 0) {
        break;
    }
    outputArray.push(sorterArray.pop());
    
   }
   console.log(outputArray);
    return(outputArray);
  }

  sortingNumbers([1,2,3,4,5,6])