app.preferences.rulerUnits = Units.PIXELS;
app.displayDialogs = DialogModes.NO;

var doc = app.activeDocument;

if(!doc.isValid){
    $.writeln("[ERROR] Document Invalid"); // why this even happening up here??
}

var cropWidth = Number(prompt("Enter cell width (px): ", "1080", "Enter Cell Width"));
var cropHeight = Number(prompt("Enter cell height (px): ", "1350", "Enter Cell Height"));
var exportPrefix = prompt("Enter filename prefix: ", "", "Enter Prefix");

var fullWidth = doc.width;
var n = fullWidth / cropWidth;

$.writeln(doc.path);
$.writeln(doc.name);
$.writeln();
$.writeln("Full doc width: " + fullWidth);
$.writeln("Crop dimensions: [" + [cropWidth, cropHeight] + "] px");
$.writeln("Cells to crop: " + Number(n));
$.writeln();


for(var i = 0; i < n; i++){
    cropBounds = [cropWidth, 0, cropWidth*2, cropHeight];
    if(i === 0){ cropBounds = [0, 0, cropWidth, cropHeight]; }
    crop(cropBounds);
    saveJPEG(doc, exportPrefix + "_" + (i+1));
}
// crop([(1-n)*cropWidth, 0, cropWidth, cropHeight]); // reset crop, not quite working




// ****************** FUNCTIONS ******************

// TODO: [ERROR] figure out why doc.saveAs isn't working
function saveJPEG(doc, filename){
    // if(!doc.isValid){
    //     $.writeln("[ERROR] saveJPEG Fail: "+doc+" Invalid document object");
    //     return;
    // }
    // var saveFile = new File(doc.path +'/'+ filename);
    // var options = new JPEGSaveOptions();
    // options.quality = 12;
    // options.embedColorProfile = true;
    // doc.saveAs(saveFile, options, true, Extension.LOWERCASE);
    // $.writeln("Saved: " + filename + ".jpg");

    save_sl(doc, filename);
}

// app.activeDocument.saveAs(new File('~/Documents/Photoshop/Scripting/ScrollCropExport/test1'), new JPEGSaveOptions(), true, Extension.LOWERCASE)
// ^ this works in the Debug Console perfectly fine


function save_sl(doc, filename){
    // save function based on ScriptListener log
    // TODO: clean up like the crop function, make more pretty
    var idsave = charIDToTypeID( "save" );
    var desc = new ActionDescriptor();

    var idAs = charIDToTypeID( "As  " );
    var descSaveAs = new ActionDescriptor();
    descSaveAs.putInteger( charIDToTypeID( "EQlt" ), 12 );
    var idMttC = charIDToTypeID( "MttC" );
    var idNone = charIDToTypeID( "None" );
    descSaveAs.putEnumerated( idMttC, idMttC, idNone );

    desc.putObject( idAs, charIDToTypeID( "JPEG" );, descSaveAs );
    var idIn = charIDToTypeID( "In  " );
    desc.putPath( idIn, new File( doc.path + '/' + filename + '.jpg' ) );
    desc.putInteger( charIDToTypeID( "DocI" ), 59 );
    desc.putBoolean( charIDToTypeID( "Cpy " ), true );
    desc.putBoolean( charIDToTypeID( "LwCs" ), true );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveBegin = stringIDToTypeID( "saveBegin" );
    desc.putEnumerated( idsaveStage, idsaveStageType, idsaveBegin );
    executeAction( idsave, desc, DialogModes.NO );
}



// bounds = [left, top, right, bottom]
function crop(bounds){
    var left = bounds[0];
    var top = bounds[1];
    var right = bounds[2];
    var bottom = bounds[3];

    var desc = new ActionDescriptor();
    var descRectangle = new ActionDescriptor();

    var idPxl = charIDToTypeID("#Pxl");
    descRectangle.putUnitDouble(charIDToTypeID('Left'), idPxl, left);
    descRectangle.putUnitDouble(charIDToTypeID('Top '), idPxl, top);
    descRectangle.putUnitDouble(charIDToTypeID('Rght'), idPxl, right);
    descRectangle.putUnitDouble(charIDToTypeID('Btom'), idPxl, bottom);

    desc.putObject(charIDToTypeID('T   '), charIDToTypeID('Rctn'), descRectangle);
    desc.putUnitDouble(charIDToTypeID('Angl'), charIDToTypeID('#Ang'), 0.0);
    desc.putBoolean(charIDToTypeID('Dlt '), false); // don't delete cropped pixels
    // not sure why I need these extra bits below but oh well
    desc.putInteger(stringIDToTypeID( "AutoFillMethod" ), 1);
    desc.putEnumerated(stringIDToTypeID( "cropAspectRatioModeKey" ), stringIDToTypeID( "cropAspectRatioModeClass" ), stringIDToTypeID( "pureAspectRatio" ));
    desc.putBoolean(charIDToTypeID( "CnsP" ), false);

    executeAction(charIDToTypeID('Crop'), desc, DialogModes.NO);

    // looks like there's extra stuff in the scriptlistener I didn't add... the CnsP stuff?
}

/*
*        top 
*        __  
*       |  |
*  left |  | right
*       |__|
*      bottom
*/
// Imagine this box as being the current (og) canvas frame
// the crop function bounds define how far to move the current canvas frame lines

// left defines how many units away from og-left line to place left crop bound
// right defines how many units away from og-left line to place right crop bound
// top defiens how many units away from og-top line to place top crop bound
// bottom defines how many units away from og-top line to place bottom crop bound

// key point is that right and bottom depend on left and top respectively

// if left=100, the left bound gets moved 100 units away from its current position (towards the right)
// if right=200, the right bound gets moved 200 units away from the og-left bound
