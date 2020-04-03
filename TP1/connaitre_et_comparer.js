/*
import checkboxEnvironnement from "./script.js";
import checkboxEducation from "./script.js";
import checkboxEnergie from "./script.js";
import checkboxSante from "./script.js";
import checkboxArts from "./script.js";
import checkboxTransport from "./script.js";
import checkboxImmigration from "./script.js";
import checkboxEconomie from "./script.js";
*/



function myFunction(x) {
    
    if ((x.id == "star_square_normal1") || (x.id == "star_square_normal2")) {
        x.id = "star_square_replacement";
    } else if ((x.id == "star_square_replacement") && (x.className == "normal1")) {
        x.id = "star_square_normal1";
    } else if ((x.id == "star_square_replacement") && (x.className == "normal2")) {
        x.id = "star_square_normal2";
    }

    if (x.childNodes[1].id == "star_noire") {
        x.childNodes[1].id = "star_jaune";
    } else {
        x.childNodes[1].id = "star_noire";
    }
}

var sujetsCheckbox = document.getElementsByClassName("sujetsCheckbox");
var sujetsBlocs = document.getElementsByClassName("SujetsBlocs");

for (let k = 0; k < sujetsCheckbox.length; k++) {
    sujetsCheckbox[k].addEventListener("change", function() {
        if (sujetsCheckbox[k].checked) {
            console.log("cas1");
            sujetsBlocs[k].style.display = "block";
        }
        else{
            console.log("cas2");
            sujetsBlocs[k].style.display = "none";
        }
    });
}

//var test = sessionStorage.get('test');
//console.log(test);
