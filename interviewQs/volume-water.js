// Find the Volume of Each Body of Water in a Landscape with Sinkholes
//
// Given an array of positive integers representing terrain heights (in 2-d, ala Super Mario) and an integer representing a flat sea level, return a container of integers representing the volume of each unique body of water.


/*

var terrains = [1, 5, 1, 4, 3, 2, 1, 3, 4, 5, 7];
var sea_level = 4;
var want = [3, 3, 7];

As a picture:
L = land
. = water

6                     L
5   L               L L
4 . L . L . . . . L L L
3 . L . L L . . L L L L
2 . L . L L L . L L L L
1 L L L L L L L L L L L
X 1 5 1 4 3 2 1 3 4 5 7

*/


// ----------------

function calculateWater(terrains, seaLevel) { //returns array of integers
    var result = []; 
    var water = 0; 
    //for each element in the array, calculate potential water (here or later)
    for (var i = 0, l = terrains.length; i < l; i++) {
        //check whether water 
        if (terrains[i] < seaLevel) {
            water += seaLevel - terrains[i];
        } else {
            if (water) {
                result.push(water);
                water = 0;
            }
        }
    }
    return result; 
}
