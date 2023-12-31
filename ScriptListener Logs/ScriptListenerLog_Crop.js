// normal positive direction crop
var idCrop = charIDToTypeID( "Crop" );
    var desc2757 = new ActionDescriptor();
    var idT = charIDToTypeID( "T   " );
        var desc2758 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc2758.putUnitDouble( idTop, idPxl, 0.000000 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc2758.putUnitDouble( idLeft, idPxl, 0.000000 );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc2758.putUnitDouble( idBtom, idPxl, 1350.000000 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc2758.putUnitDouble( idRght, idPxl, 1080.000000 );
    var idRctn = charIDToTypeID( "Rctn" );
    desc2757.putObject( idT, idRctn, desc2758 );

    var idAngl = charIDToTypeID( "Angl" );
    var idAng = charIDToTypeID( "#Ang" );
    desc2757.putUnitDouble( idAngl, idAng, 0.000000 );
    var idDlt = charIDToTypeID( "Dlt " );
    desc2757.putBoolean( idDlt, false );
    var idAutoFillMethod = stringIDToTypeID( "AutoFillMethod" );
    desc2757.putInteger( idAutoFillMethod, 1 );
    var idcropAspectRatioModeKey = stringIDToTypeID( "cropAspectRatioModeKey" );
    var idcropAspectRatioModeClass = stringIDToTypeID( "cropAspectRatioModeClass" );
    var idpureAspectRatio = stringIDToTypeID( "pureAspectRatio" );
    desc2757.putEnumerated( idcropAspectRatioModeKey, idcropAspectRatioModeClass, idpureAspectRatio );
    var idCnsP = charIDToTypeID( "CnsP" );
    desc2757.putBoolean( idCnsP, false );
executeAction( idCrop, desc2757, DialogModes.NO );


// USING NEGATIVE DIRECTION SHIFT CROP:
var idCrop = charIDToTypeID( "Crop" );
    var desc5088 = new ActionDescriptor();
    var idT = charIDToTypeID( "T   " );
        var desc5089 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc5089.putUnitDouble( idTop, idPxl, 0.000000 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc5089.putUnitDouble( idLeft, idPxl, -1080.000000 );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc5089.putUnitDouble( idBtom, idPxl, 1350.000000 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc5089.putUnitDouble( idRght, idPxl, 0.000000 );
    var idRctn = charIDToTypeID( "Rctn" );
    desc5088.putObject( idT, idRctn, desc5089 );
    var idAngl = charIDToTypeID( "Angl" );
    var idAng = charIDToTypeID( "#Ang" );
    desc5088.putUnitDouble( idAngl, idAng, 0.000000 );
    var idDlt = charIDToTypeID( "Dlt " );
    desc5088.putBoolean( idDlt, false );
    var idAutoFillMethod = stringIDToTypeID( "AutoFillMethod" );
    desc5088.putInteger( idAutoFillMethod, 1 );
    var idcropAspectRatioModeKey = stringIDToTypeID( "cropAspectRatioModeKey" );
    var idcropAspectRatioModeClass = stringIDToTypeID( "cropAspectRatioModeClass" );
    var idpureAspectRatio = stringIDToTypeID( "pureAspectRatio" );
    desc5088.putEnumerated( idcropAspectRatioModeKey, idcropAspectRatioModeClass, idpureAspectRatio );
    var idCnsP = charIDToTypeID( "CnsP" );
    desc5088.putBoolean( idCnsP, false );
executeAction( idCrop, desc5088, DialogModes.NO );

// Negative direction stretch crop (only expanding by left, right unchanged)
var idCrop = charIDToTypeID( "Crop" );
    var desc6218 = new ActionDescriptor();
    var idT = charIDToTypeID( "T   " );
        var desc6219 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc6219.putUnitDouble( idTop, idPxl, 0.000000 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc6219.putUnitDouble( idLeft, idPxl, -1080.000000 );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc6219.putUnitDouble( idBtom, idPxl, 1350.000000 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc6219.putUnitDouble( idRght, idPxl, 1080.000000 );

// stretch left + right
var idCrop = charIDToTypeID( "Crop" );
    var desc6596 = new ActionDescriptor();
    var idT = charIDToTypeID( "T   " );
        var desc6597 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc6597.putUnitDouble( idTop, idPxl, 0.000000 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc6597.putUnitDouble( idLeft, idPxl, -1080.000000 );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc6597.putUnitDouble( idBtom, idPxl, 1350.000000 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc6597.putUnitDouble( idRght, idPxl, 3240.000000 );

// starting index=1 | stretch left + right by 1
var idCrop = charIDToTypeID( "Crop" );
    var desc7350 = new ActionDescriptor();
    var idT = charIDToTypeID( "T   " );
        var desc7351 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc7351.putUnitDouble( idTop, idPxl, 0.000000 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc7351.putUnitDouble( idLeft, idPxl, -1080.000000 );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc7351.putUnitDouble( idBtom, idPxl, 1350.000000 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc7351.putUnitDouble( idRght, idPxl, 2160.000000 );

// starting index=2 | stretch left + right by 1
var idCrop = charIDToTypeID( "Crop" );
    var desc8098 = new ActionDescriptor();
    var idT = charIDToTypeID( "T   " );
        var desc8099 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc8099.putUnitDouble( idTop, idPxl, 0.000000 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc8099.putUnitDouble( idLeft, idPxl, -1080.000000 );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc8099.putUnitDouble( idBtom, idPxl, 1350.000000 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc8099.putUnitDouble( idRght, idPxl, 2160.000000 );