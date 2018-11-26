var multiArray = [["Hello", "Kevin", "and Erin"], ["Hi", "Kenn"], ["Good", "morning", "Meka"]];
var stopCounter = multiArray.length;
var array = [];

for( var i =0; i<multiArray.length; i++){
    let s = "";
   for(var j = 0; j<multiArray[i].length; j++){
       // array.push(multiArray[i][j]);
       s+=multiArray[i][j] + " ";
   }
array.push(s);
}



console.log(array);