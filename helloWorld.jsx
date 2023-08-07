// app.preferences.rulerUnits = Units.PIXELS;
app.preferences.rulerUnits = Units.INCHES;
// app.preferences.typeUnits = TypeUnits.PIXELS
var dpi = 300;
var width = 2550/dpi;
var height = 3300/dpi;

// app.documents.add(w,h,...) expects w and height in the app unit preferences
var newDocument = app.documents.add(width, height, dpi, 'My New Photoshop Design', NewDocumentMode.RGB);

var layers = newDocument.artLayers;
var newLayer = layers.add();
newLayer.name = 'My new layer';
newLayer.kind = LayerKind.TEXT;

var textItem = newLayer.textItem;

var myColour = new SolidColor();
var rgbPart = myColour.rgb;
rgbPart.red = 0;
rgbPart.green = 120;
rgbPart.blue = 255;

var fonts = app.fonts;
var randomFont = fonts[Math.floor(Math.random() * fonts.length)];

textItem.contents = 'Hello World!';
textItem.color = myColour;
textItem.font = randomFont.postScriptName;
// textItem.size = 96;
textItem.justification = Justification.CENTER;
// textItem.position = [newDocument.width*.5, 300];
textItem.position = [newDocument.width*.5, newDocument.height*.5];

$.write("test write\n")
$.writeln("test writeln")
alert("test alert")