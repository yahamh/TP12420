
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