app.preferences.rulerUnits = Units.PIXELS;
var doc = app.activeDocument;

var cropWidth = 1080;
var cropHeight = 1350;

var fullWidth = doc.width;

var n_px = fullWidth / cropWidth; 
// division works, but printing this gives a " px" after the 8
// iteration on it works too
var n = new Number(n_px);

for(var i = 0; i < n_px; i++){
    $.write(i+" ")
}
$.writeln()

for(var i = 0; i < n; i++){
    $.write(i+" ")
}
$.writeln()

$.writeln("There are " + n_px + " cells to crop")
$.writeln("There are " + n + " cells to crop")

