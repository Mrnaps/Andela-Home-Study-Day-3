Array.prototype.toTwenty = function() {
   for(i=1; i<=20; i++){
      this.push(i);
   }
   return this;
};

Array.prototype.toForty = function() {
   
   for(i=2; i<=40; i+=2){
      this.push(i);
    }
   return this;
};

Array.prototype.toOneThousand = function() {
   
   for(i=10; i<=1000; i+=10){
      this.push(i);
    }
   return this;
};

Array.prototype.search = function(value) {
this.count = 0;
this.index = -1;
    var min = 0;
    var max = this.length - 1;
    var currentIndex;
    var currentElement;
   while (min <= max) {

      currentIndex = Math.floor((min + max) / 2);        
      currentElement = this[currentIndex];

      if (this[min]  === value) {
          this.index = min;
           break;
      }
      else if (this[max]  === value){
          this.index = max;
           break;
      }

      if (currentElement < value) {
         min = currentIndex + 1;
        }
      else if (currentElement > value) {
         max = currentIndex - 1;
        }
      else {
         this.index = currentIndex;
         break;
        }
      this.count++;
   }    
   return this;

   /*
  * Binary search implementation to return
  * {count : c, index: i, length: n}
  */
};
