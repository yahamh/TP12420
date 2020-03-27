fetch("https://log2420-serve.herokuapp.com/JSON/output.json")
  .then(function(resp){
        return resp.json();
      })
      .then(function(data){

        // partie qui gere les infos de la carte 1
        document.getElementById("election").innerHTML = ` <h3>Élections</h3> `
        document.getElementById("boutton1").innerHTML = ` 
        <input type="radio" id="chk1" name="1Choix" onclick="ShowHideDiv1()" checked>
            <span class="nomChoix">${data.Elections[0].name}<span><br>
                <span class="nomDetails">${data.Elections[0].date}<span>
                    </input><br><br>
        ` 
        document.getElementById("boutton2").innerHTML = `
        <input type="radio" id="chk2" name="1Choix" onclick="ShowHideDiv2()">
            <span class="nomChoix">${data.Elections[1].name}<span><br>
                <span class="nomDetails">${data.Elections[1].date}<span>
                    </input><br><br>
        ` 
        document.getElementById("boutton3").innerHTML = ` 
        <input type="radio" id="chk3" name="1Choix" onclick="ShowHideDiv1()">
            <span class="nomChoix">${data.Elections[2].name}<span><br>
                <span class="nomDetails">${data.Elections[2].date}<span>
                    </input><br><br>
        ` 
        document.getElementById("boutton4").innerHTML = ` 
        <input type="radio" id="chk4" name="1Choix" onclick="ShowHideDiv2()">
        <span class="nomChoix">${data.Elections[3].name}<span><br>
            <span class="nomDetails">${data.Elections[3].date}<span>
                </input><br><br>
        `

        //partie qui gere les infos de la carte 2 sous les options " 43e élection fédérale" dans card-1
        document.getElementById("titre").innerHTML = ` 
        <h3 align="left">Partis politiques fédéreaux</h3>
        `
        document.getElementById("checkbox1").innerHTML = ` 
        <input type="checkbox" id="connaitre1" value="1" onclick="comparerBouttons()" />
        <span class="nomChoix">${data.PartisFederaux[0].abreviation}<span><br>
            <span class="nomDetails">${data.PartisFederaux[0].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox2").innerHTML = ` 
        <input type="checkbox" id="connaitre2" value="1" onclick="comparerBouttons()" />
        <span class="nomChoix">${data.PartisFederaux[1].abreviation}<span><br>
            <span class="nomDetails">${data.PartisFederaux[1].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox3").innerHTML = ` 
        <input type="checkbox" id="connaitre3" value="1" onclick="comparerBouttons()" />
        <span class="nomChoix">${data.PartisFederaux[2].abreviation}<span><br>
            <span class="nomDetails">${data.PartisFederaux[2].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox4").innerHTML = ` 
        <input type="checkbox" id="connaitre4" value="1" onclick="comparerBouttons()" />
        <span class="nomChoix">${data.PartisFederaux[3].abreviation}<span><br>
            <span class="nomDetails">${data.PartisFederaux[3].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox5").innerHTML = ` 
        <input type="checkbox" id="connaitre5" value="1" onclick="comparerBouttons()" />
        <span class="nomChoix">${data.PartisFederaux[4].abreviation}<span><br>
            <span class="nomDetails">${data.PartisFederaux[4].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox6").innerHTML = ` 
        <input type="checkbox" id="connaitre6" value="1" onclick="comparerBouttons()" />
        <span class="nomChoix">${data.PartisFederaux[5].abreviation}<span><br>
            <span class="nomDetails">${data.PartisFederaux[5].fullname}<span>
                </input><br><br>
        `


        //partie qui gere les infos de la carte 2 sous les options "Élections générales provinciales" dans card-1

        document.getElementById("titre_2").innerHTML = ` 
        <h3 align="left"> Partis politiques provinciaux </h3>
        `
        document.getElementById("checkbox1_2").innerHTML = ` 
        <input type="checkbox" id="connaitre1_2" value="2" onclick="comparerBouttons( )" />
        <span class="nomChoix">${data.PartisProvinciaux[0].abreviation}<span><br>
            <span class="nomDetails">${data.PartisProvinciaux[0].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox2_2").innerHTML = ` 
        <input type="checkbox" id="connaitre2_2" value="2" onclick="comparerBouttons( )" />
        <span class="nomChoix">${data.PartisProvinciaux[1].abreviation}<span><br>
            <span class="nomDetails">${data.PartisProvinciaux[1].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox3_2").innerHTML = ` 
        <input type="checkbox" id="connaitre3_2" value="2" onclick="comparerBouttons( )" />
        <span class="nomChoix">${data.PartisProvinciaux[2].abreviation}<span><br>
            <span class="nomDetails">${data.PartisProvinciaux[2].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox4_2").innerHTML = ` 
        <input type="checkbox" id="connaitre4_2" value="2" onclick="comparerBouttons( )" />
        <span class="nomChoix">${data.PartisProvinciaux[3].abreviation}<span><br>
            <span class="nomDetails">${data.PartisProvinciaux[3].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox5_2").innerHTML = ` 
        <input type="checkbox" id="connaitre5_2" value="2" onclick="comparerBouttons( )" />
        <span class="nomChoix">${data.PartisProvinciaux[4].abreviation}<span><br>
            <span class="nomDetails">${data.PartisProvinciaux[4].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox6_2").innerHTML = ` 
        <input type="checkbox" id="connaitre6_2" value="2" onclick="comparerBouttons( )" />
        <span class="nomChoix">${data.PartisProvinciaux[5].abreviation}<span><br>
            <span class="nomDetails">${data.PartisProvinciaux[5].fullname}<span>
                </input><br><br>
        `
        document.getElementById("checkbox7_2").innerHTML = ` 
        <input type="checkbox" id="connaitre7_2" value="2" onclick="comparerBouttons( )" />
        <span class="nomChoix">${data.PartisProvinciaux[6].abreviation}<span><br>
            <span class="nomDetails">${data.PartisProvinciaux[6].fullname}<span>
                </input><br><br>
        `






});



//<!-- JavaScript pour la selection des options-->
function ShowHideDiv1() {
  var chk1 = document.getElementById("chk1");
  //var dvFederaux = document.getElementById("dvFederaux");
  //dvFederaux.style.display = chk1.checked ? "block" : "none";
  //dvProvinciaux.style.display = "none";
  if (chk1) {
     dvFederaux.style.display = "block";
     dvProvinciaux.style.display = "none";
   } else {
     dvFederaux.style.display = "none";
   }
}

function ShowHideDiv2() {
  var chk2 = document.getElementById("chk2");
  //var dvPassport = document.getElementById("dvProvinciaux");
  //dvProvinciaux.style.display = chk2.checked ? "block" : "none";
  //dvFederaux.style.display = "none";
  if (chk2) {
        dvProvinciaux.style.display = "block";
        dvFederaux.style.display = "none";
      } else {
        dvProvinciaux.style.display = "none";
      }
}


//JavaScript function that enables or disables a submit button depending
//on whether a checkbox has been ticked or not.

function comparerBouttons(termsCheckBox){
  var checked=0;

  //If the checkbox has been checked
  if(connaitre1.checked){checked++;}
  if(connaitre2.checked){checked++;}
  if(connaitre3.checked){checked++;}
  if(connaitre4.checked){checked++;}
  if(connaitre5.checked){checked++;}
  if(connaitre6.checked){checked++;}
  if(connaitre1_2.checked){checked++;}
  if(connaitre2_2.checked){checked++;}
  if(connaitre3_2.checked){checked++;}
  if(connaitre4_2.checked){checked++;}
  if(connaitre5_2.checked){checked++;}
  if(connaitre6_2.checked){checked++;}
  if(connaitre7_2.checked){checked++;}

  console.log(checked);

      //Set the disabled property to FALSE and enable the button.
  if (checked == 1){
      document.getElementById("submit1_button").disabled = false;
      document.getElementById("submit2_button").disabled = true;
  } else if(checked == 2){
      document.getElementById("submit1_button").disabled = true;
      document.getElementById("submit2_button").disabled = false;
  } else {
      //Otherwise, disable the submit button.
      document.getElementById("submit1_button").disabled = true;
      document.getElementById("submit2_button").disabled = true;

  }
}



