var arr = [3,1,6,2,4,8,7,9,15,5,11,18,10];
var k;
for (var i = 0; i < arr.length; i++) { 

    for (var j = 0; j < arr.length; j++) { 
       	if (arr[j + 1] < arr[j]) { 
	        k = arr[j + 1];
	        arr[j + 1] = arr[j];
	        arr[j] = k;
        }
    }
}   
document.body.innerHTML = arr;
