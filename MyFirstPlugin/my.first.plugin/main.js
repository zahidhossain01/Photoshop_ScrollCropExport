// CHECK OUT THE EXPORT > ARTBOARD TO FILES CODE IF AVAILABLE
// "C:\Program Files\Adobe\Adobe Photoshop (Beta)\Presets\Scripts\ArtBoards To Files.jsx"
// "C:\Program Files\Adobe\Adobe Photoshop (Beta)\Presets\Scripts\ArtboardExport.inc"

async function showLayerNames() {
    const app = require("photoshop").app;
    const ufs = require('uxp').storage.localFileSystem;

    const allLayers = app.activeDocument.layers;
    const allLayerNames = allLayers.map(layer => layer.name);
    const sortedNames = allLayerNames.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    document.getElementById("layers").innerHTML = `
        <ul>${
            sortedNames.map(name => `<li>${name}</li>`).join("")
        }</ul>`;
    
    let file = await ufs.getFileForSaving("testpluginfile.jpg");
    
    try {
        let test_string = prompt("Enter response:", "pre-gray-text");
        console.log(test_string);
        console.log("post-prompt log");
        app.activeDocument.saveAs.jpg(file, {quality: 12, embedColorProfile: true}, true);
    } catch (e) {
        console.log(e);
    }
}

document.getElementById("btnPopulate").addEventListener("click", showLayerNames);