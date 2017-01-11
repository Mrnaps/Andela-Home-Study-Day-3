'use strict'

module.exports = {
   findMissing: function(arr1,arr2){
      var arr1sum = 0;
      var arr2sum = 0;
      for(var i in arr1){
         arr1sum += arr1[i];
      }
      for(var i in arr2){
         arr2sum += arr2[i];
      }
      return (arr2sum - arr1sum);
   }
} 
