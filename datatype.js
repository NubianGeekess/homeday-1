function dataTypes(data){
  if(typeof data==="string"){
    return data.length;
  }
  else if (data === null || data===undefined){
    return 'no value';
  }
  else if (typeof data === "boolean"){
    return data ;
  }
    
  else if (typeof data==="number"){
   if(data <100){
     return "less than 100";
   }
   else if (data> 100){
     return "more than 100";
   }
     else{
       return "equal to 100"
     }
  }
   else if([] <= data){
     if(data[2]===undefined){
       return 'undefined'
     }
     return data[2];
   }
   
   else {
     if(typeof(data) === "function"){
     return data(true);
    }
   }
    
  
} 