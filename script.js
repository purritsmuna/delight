var theArray = [];
for (var i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
        theArray.push(i);
    }
}
var total = 0;
for(var i in theArray) {total += theArray[i];}
document.write(total/theArray.length);