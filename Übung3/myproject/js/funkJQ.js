//================================================================================================
//    JavaScript-Datei in der die Funktionen mithilfe von jQuery vereinfacht wurden.
//
//    Datei: funkJQ.js
//    Datum: 29.12.2015
//    Autor: Tobias & Leon
//=================================================================================================



//================================================================================================
//
//  Attribute
//
//================================================================================================

// Diese Variablen beeinflussen das Submit verhalten des Formulars.
// Die freiwilligen Felder werden mit true initialisiert.
// Werden sie falsch ausefüllt, werden sie auf false gesetzt.
// Jede Eingabe wird per RegEx auf ihre Richtigkeit geprüft. Entsprechend wird der boolean Wert,
// der zugehörigen Variable verändert.
var vornameOk = true;
var nachnameOk = false;
var emailOk = true;
var telOk = true;
var strasseOk = false;
var plzOk = false;
var stadtOk = false;
var landOk = false;



//================================================================================================
//
//  Initialisierung
//
//================================================================================================

//Durch das folgende Konstrukt wird sichergestellt das die Funktionen
//erst mit den Buttons verknüpft werden, wenn die Seite geladen ist.

$(window).load(function() {
	funktionenInitialisieren();
	console.log("initialisiert")
});



//================================================================================================
//
//  Module
//
//================================================================================================

function funktionenInitialisieren() {
    // Initialisierung des Formulars, denn durch onsubmit wird auch ein Enter erkannt.
    // Erst wenn alle Variablen auf true gesetzt wurden kann gesendet werden.
	$("#formular").submit(function(event) {
		return darfSenden();
	});
    
	
	
    // Die folgenden Funktionen prüfen bei Eingabe das input-Feld.
    // Bei falscher eingabe wird das Feld rot markiert.
	$("#vorname").keyup(function(event){	
        checkEingabe(vorname, name, false);
        setIcon(vorname);
	});
    
    $("#nachname").keyup(function(event) {
        checkEingabe(nachname, name, true);
        setIcon(nachname);
    });
    
    $("#email").keyup(function(event){
        checkEingabe(email, email, false);
        setIcon(email);
    });
    
    $("#tel").keyup(function(event){
        checkEingabe(tel, tel, false);
        setIcon(tel);
    });
    
    $("#strasse").keyup(function(event){
        checkEingabe(strasse, strasse, true);
        setIcon(strasse);
    });
    
    $("#plz").keyup(function(event){
        checkEingabe(plz, plz, true);
        setIcon(plz);
    });
    
    $("#stadt").keyup(function(event){
        checkEingabe(stadt, name, true);
        setIcon(stadt);
    });
    
    $("#land").keyup(function(event){
        checkEingabe(land, name, true);
        setIcon(land);
    });
    
    
    
    // Buttons zum ändern der Texte für die Regionen
    // Wird ein Button geklickt, wird über paragraphAendern der jeweilige Text in p geändert.
    $("#aucklandInfoButton").click(function(){
		paragraphAendern("aucklandInfoButton");
        bildAendern("aucklandInfoButton");
	});
    
    $("#aucklandKlimaButton").click(function(){
        paragraphAendern("aucklandKlimaButton");
        bildAendern("aucklandKlimaButton");
    });
    
    $("#aucklandTodoButton").click(function(){
        paragraphAendern("aucklandTodoButton");
        bildAendern("aucklandTodoButton");
    });
    
    $("#aucklandEssenButton").click(function(){
        paragraphAendern("aucklandEssenButton");
        bildAendern("aucklandEssenButton");
    });
    
    
    
    $("#northlandInfoButton").click(function(){
        paragraphAendern("northlandInfoButton");
    });
    
    $("#northlandKlimaButton").click(function(){
        paragraphAendern("northlandKlimaButton");
    });
    
    $("#northlandTodoButton").click(function(){
       paragraphAendern("northlandTodoButton");
    });
    
    $("#northlandEssenButton").click(function(){
        paragraphAendern("northlandEssenButton");
    });
    
    
    
    $("#coromandelPeninsulaInfoButton").click(function(){
        paragraphAendern("coromandelPeninsulaInfoButton");
    });
    
    $("#coromandelPeninsulaKlimaButton").click(function(){
        paragraphAendern("coromandelPeninsulaKlimaButton");
    });
    
    $("#coromandelPeninsulaTodoButton").click(function(){
       paragraphAendern("coromandelPeninsulaTodoButton");
    });
    
    $("#coromandelPeninsulaEssenButton").click(function(){
        paragraphAendern("coromandelPeninsulaEssenButton");
    });
    
    
    
    $("#waikato&KingCountryInfoButton").click(function(){
        paragraphAendern("waikato&KingCountryInfoButton");
    });
    
    $("#waikato&KingCountryKlimaButton").click(function(){
        paragraphAendern("waikato&KingCountryKlimaButton");
    });
    
    $("#waikato&KingCountryTodoButton").click(function(){
       paragraphAendern("waikato&KingCountryTodoButton");
    });
    
    $("#waikato&KingCountryEssenButton").click(function(){
        paragraphAendern("waikato&KingCountryEssenButton");
    });
    
    
    
    $("#bayOfPlentyInfoButton").click(function(){
        paragraphAendern("bayOfPlentyInfoButton");
    });
    
    $("#bayOfPlentyKlimaButton").click(function(){
        paragraphAendern("bayOfPlentyKlimaButton");
    });
    
    $("#bayOfPlentyTodoButton").click(function(){
       paragraphAendern("bayOfPlentyTodoButton");
    });
    
    $("#bayOfPlentyEssenButton").click(function(){
        paragraphAendern("bayOfPlentyEssenButton");
    });
    
    
    
    $("#eastCoastInfoButton").click(function(){
        paragraphAendern("eastCoastInfoButton");
    });
    
    $("#eastCoastKlimaButton").click(function(){
        paragraphAendern("eastCoastKlimaButton");
    });
    
    $("#eastCoastTodoButton").click(function(){
       paragraphAendern("eastCoastTodoButton");
    });
    
    $("#eastCoastEssenButton").click(function(){
        paragraphAendern("eastCoastEssenButton");
    });
    
    
    
    $("#zentraleHochebeneInfoButton").click(function(){
        paragraphAendern("zentraleHochebeneInfoButton");
    });
    
    $("#zentraleHochebeneKlimaButton").click(function(){
        paragraphAendern("zentraleHochebeneKlimaButton");
    });
    
    $("#zentraleHochebeneTodoButton").click(function(){
       paragraphAendern("zentraleHochebeneTodoButton");
    });
    
    $("#zentraleHochebeneEssenButton").click(function(){
        paragraphAendern("zentraleHochebeneEssenButton");
    });
    
    
    
    $("#taranakiInfoButton").click(function(){
        paragraphAendern("taranakiInfoButton");
    });
    
    $("#taranakiKlimaButton").click(function(){
        paragraphAendern("taranakiKlimaButton");
    });
    
    $("#taranakiTodoButton").click(function(){
       paragraphAendern("taranakiTodoButton");
    });
    
    $("#taranakiEssenButton").click(function(){
        paragraphAendern("taranakiEssenButton");
    });
    
    
    
    $("#whanganui&PalmerstonNorthInfoButton").click(function(){
        paragraphAendern("whanganui&PalmerstonNorthInfoButton");
    });
    
    $("#whanganui&PalmerstonNorthKlimaButton").click(function(){
        paragraphAendern("whanganui&PalmerstonNorthKlimaButton");
    });
    
    $("#whanganui&PalmerstonNorthTodoButton").click(function(){
       paragraphAendern("whanganui&PalmerstonNorthTodoButton");
    });
    
    $("#whanganui&PalmerstonNorthEssenButton").click(function(){
        paragraphAendern("whanganui&PalmerstonNorthEssenButton");
    });
    
    
    
    $("#wellingtonInfoButton").click(function(){
        paragraphAendern("wellingtonInfoButton");
    });
    
    $("#wellingtonKlimaButton").click(function(){
        paragraphAendern("wellingtonKlimaButton");
    });
	
    $("#wellingtonTodoButton").click(function(){
       paragraphAendern("wellingtonTodoButton");
    });
    
    $("#wellingtonEssenButton").click(function(){
        paragraphAendern("wellingtonEssenButton");
    });
    
    
    
    $("#marlborough&NelsonInfoButton").click(function(){
        paragraphAendern("marlborough&NelsonInfoButton");
    });
    
    $("#marlborough&NelsonKlimaButton").click(function(){
        paragraphAendern("marlborough&NelsonKlimaButton");
    });
    
    $("#marlborough&NelsonTodoButton").click(function(){
       paragraphAendern("marlborough&NelsonTodoButton");
    });
    
    $("#marlborough&NelsonEssenButton").click(function(){
        paragraphAendern("marlborough&NelsonEssenButton");
    });
    
    
    
    $("#christchurchInfoButton").click(function(){
        paragraphAendern("christchurch&CanterburyInfoButton");
    });
    
    $("#christchurchKlimaButton").click(function(){
        paragraphAendern("christchurch&CanterburyKlimaButton");
    });
    
    $("#christchurchTodoButton").click(function(){
       paragraphAendern("christchurch&CanterburyTodoButton");
    });
    
    $("#christchurchEssenButton").click(function(){
        paragraphAendern("christchurch&CanterburyEssenButton");
    });
    
    
    
    $("#otagoInfoButton").click(function(){
        paragraphAendern("otagoInfoButton");
    });
    
    $("#otagoKlimaButton").click(function(){
        paragraphAendern("otagoKlimaButton");
    });
    
    $("#otagoTodoButton").click(function(){
       paragraphAendern("otagoTodoButton");
    });
    
    $("#otagoEssenButton").click(function(){
        paragraphAendern("otagoEssenButton");
    });
    
    
    
    $("#queenstownInfoButton").click(function(){
        paragraphAendern("queenstownInfoButton");
    });
    
    $("#queenstownKlimaButton").click(function(){
        paragraphAendern("queenstownKlimaButton");
    });
    
    $("#queenstownTodoButton").click(function(){
       paragraphAendern("queenstownTodoButton");
    });
    
    $("#queenstownEssenButton").click(function(){
        paragraphAendern("queenstownEssenButton");
    });
    
    
    
	$("#fjordland&SouthlandInfoButton").click(function(){
        paragraphAendern("fjordland&SouthlandInfoButton");
    });
    
    $("#fjordland&SouthlandKlimaButton").click(function(){
        paragraphAendern("fjordland&SouthlandKlimaButton");
    });
    
    $("#fjordland&SouthlandTodoButton").click(function(){
       paragraphAendern("fjordland&SouthlandTodoButton");
    });
    
    $("#fjordland&SouthlandEssenButton").click(function(){
        paragraphAendern("fjordland&SouthlandEssenButton");
    });
    
    
    
    $("#westCoastInfoButton").click(function(){
        paragraphAendern("westCoastInfoButton");
    });
    
    $("#westCoastKlimaButton").click(function(){
        paragraphAendern("westCoastKlimaButton");
    });
    
    $("#westCoastTodoButton").click(function(){
       paragraphAendern("westCoastTodoButton");
    });
    
    $("#westCoastEssenButton").click(function(){
        paragraphAendern("westCoastEssenButton");
    });
}

function paragraphAendern (button) {
    //Über einen switch wird der Aufrufparameter ausgewertet und entsprechend auf ihn reagiert.
    switch (button) {
        case "aucklandInfoButton":
            $("#aucklandTextart").html("Kurze Beschreibung:");
            $("#aucklandParagraph").html("Paris ist die Stadt der Liebe aber Auckland die Stadt der liebenden. Das zumindest bedeutet ihr Maori-Name Tamaki Makaurau. Zwei Häfen umrahmen eine Landenge mit Vulkankegeln und fruchtbarem Ackerland. An jedem der vielen Aussichtspunkte wird man verblüfft feststellen, wie die Tasmansee und der Pazifik kurz davor sind sich zu berühren und eine neue Insel zu formen. So kommt es, dass immer Wasser in der Nähe ist. Die 135.000 Schiffchen, die in den Jachthäfen liegen, haben der Stadt ihren beständigsten Spitznamen verliehen: Stadt der Segel. Dichte Regenwälder Thermalquellen, menschenleere Strände, Weingüter und Naturschutzgebiete liegen nie mehr als eine Autostunde von den Hochhäusern der Innenstadt entfernt.");
        break;
            
        case "aucklandKlimaButton":
            $("#aucklandTextart").html("Klima:");
            $("#aucklandParagraph").html("Das Klima in Auckland ist mit gelegentlichem Frost im Winter und mit hoher Luftfeuchtigkeit im Sommer eher mild. In jedem Sommermonat regnet es durchschnittlich acht Tage aber das Wetter ist bekanntermaßen sehr unbeständig. Das ganze Jahr über ist es möglich vier Jahreszeiten an einem Tag zu erleben.");
        break;
            
        case "aucklandTodoButton":
            $("#aucklandTextart").html("Aktivitäten:");
            $("#aucklandParagraph").html("Volcanic Field - Auckland wurde auf 50 nur zum Teil erloschenen Vulkanen errichtet. Sie erheben sich eindrucksvoll im Stadtbild und sind eine Besteigung wert.<br>Karekare - Ein Strand wie von einem fernen Planeten, scheinbar endlos und eingerahmt von hohen Felsen. Der schwarze Sandstrand gehört zu den tödlichsten Gewässern Neuseelands.<br>Piha - The place to be für Aucklands Surfer-Szene. Der Quarzsand-Strand ist jedoch so gefährlich das er seine eigene Reality Show hat, Piha Rescue, das neuseeländische Baywatch.<br>Bungy Jumpen - Vom Sky Tower, dem höchsten Bauwerk der südlichen Hemisphäre.<br>Sky Walk - In 328 Metern Höhe den Sky Tower an der Fassade umrunden.");
        break;
        
        case "aucklandEssenButton":
            $("#aucklandTextart").html("Essen:");
            $("#aucklandParagraph").html("Raw-Power - Bunt, Vegan, Rock 'n' Roll und frische Zutaten haben diesen Restaurant schon viel Besuch vom internationalen Rockadel beschert.<br>Non Solo Pizza - Unter einem Peroni-Kronleuchter dürfen Gäste hier italienische Küche vom feinsten genießen.<br>SPQR - Wie der Name schon erraten lässt, entführt es einen ins alte Rom und wartet mit Efeuranken und schummriger Beleuchtung auf.<br>Murder Burger - Üpige Burger und der absolute Veganer-Alptraum, hier gibt es Fleisch und zwar viel.");
        break;
    }
}

function bildAendern(button) {
    switch (button) {
        case "aucklandInfoButton":
            $("#aucklandImg").attr("src", "pictures/auckland/DSC_0146.JPG");
			break;
            
        case "aucklandKlimaButton":
            $("#aucklandImg").attr("src", "pictures/auckland/P1120750.JPG");
            break;
            
        case "aucklandTodoButton":
            $("#aucklandImg").attr("src", "pictures/auckland/DSCN0961.JPG");
            break;
        
        case "aucklandEssenButton":
            $("#aucklandImg").attr("src", "pictures/auckland/DSC_0917.JPG");
            break;
    }
}

function darfSenden() {
    return vornameOk && nachnameOk && emailOk && telOk && strasseOk && plzOk && stadtOk && landOk;
}

function checkEingabe (inputName, inputTyp, required) {
    //Variablen deklarieren
    //Input zeigt auf die Texteingabe
    //Output zeigt auf das Warnlabel
    //eingabeKorrekt ist der Rückgabewert
    var input;
    var output;
    var eingabeKorrekt = false;
    
    //Variablen abhängig Aufrufparameter initialisieren
    switch (inputName) {
        case vorname:
            input = document.newsFormular.vorname.value;
            output = "vornameWarnung";
            break;
            
        case nachname:
            input = document.newsFormular.nachname.value;
            output = "nachnameWarnung";
            break;
            
        case email:
            input = document.newsFormular.email.value;
            output = "emailWarnung";
            break;
            
        case tel:
            input = document.newsFormular.tel.value;
            output = "telWarnung";
            break;
            
        case strasse:
            input = document.newsFormular.strasse.value;
            output = "strasseWarnung";
            break;
            
        case plz:
            input = document.newsFormular.plz.value;
            output = "plzWarnung";
            break;
            
        case stadt:
            input = document.newsFormular.stadt.value;
            output = "stadtWarnung";
            break;
            
        case land:
            input = document.newsFormular.land.value;
            output = "landWarnung";
            break;
    }
    
    //Eingabe testen
    //Ist eine Eingabe, die required ist, leer wird eine Warnung ausgegeben.
    //Ein Feld das nicht required und leer ist, wird nicht weiter geprüft.
    //Hat ein Feld Inhalt wird über einen RegEx sein Inhalt geprüft.
    if (eingabeIstLeer(input)) {
        //if (required) document.getElementById(output).innerHTML = "<-- Bitte ausfüllen";
        if (required) eingabeKorrekt = false;
        else eingabeKorrekt = true;
    }
    
    //else if (falschesFormat (input, output, inputTyp)) document.getElementById(output).innerHTML = "<-- Falsches Format";
    else if (falschesFormat (input, output, inputTyp)) eingabeKorrekt = false;
    
    //else document.getElementById(output).innerHTML = "";
    else eingabeKorrekt = true;
    
    
    switch (inputName) {
        case vorname:
            vornameOk = eingabeKorrekt;
            break;
            
        case nachname:
            nachnameOk = eingabeKorrekt;
            break;
            
        case email:
            emailOk = eingabeKorrekt;
            break;
            
        case tel:
            telOk = eingabeKorrekt;
            break;
            
        case strasse:
            strasseOk = eingabeKorrekt;
            break;
            
        case plz:
            plzOk = eingabeKorrekt;
            break;
            
        case stadt:
            stadtOk = eingabeKorrekt;
            break;
            
        case land:
            landOk = eingabeKorrekt;
            break;
    }
    
    return eingabeKorrekt;
}

function setIcon (inputName) {
    var inputOk;
    var icon;
    switch (inputName) {
        case vorname:
            inputOk = vornameOk;
            icon = "#vornameIcon";
            break;
            
        case nachname:
            inputOk = nachnameOk;
            icon = "#nachnameIcon";
            break;
            
        case email:
            inputOk = emailOk;
            icon = "#emailIcon";
            break;
            
        case tel:
            inputOk = telOk;
            icon = "#telIcon";
            break;
            
        case strasse:
            inputOk = strasseOk;
            icon = "#strasseIcon";
            break;
            
        case plz:
            inputOk = plzOk;
            icon = "#plzIcon";
            break;
            
        case stadt:
            inputOk = stadtOk;
            icon = "#stadtIcon";
            break;
            
        case land:
            inputOk = landOk;
            icon = "#landIcon";
            break;
    }
    //if(inputOk) document.getElementById(icon).src="pictures/icons/formular/yesIcon.png";
    //else document.getElementById(icon).src="pictures/icons/formular/noIcon.png";
	
	if(inputOk) $(icon).attr("src", "pictures/icons/formular/yesIcon.png");
	else $(icon).attr("src", "pictures/icons/formular/noIcon.png");
}



//================================================================================================
//
//  Hilfsfunktionen
//
//================================================================================================

function eingabeIstLeer (inputName) {
    return inputName == "";
}

function falschesFormat (input, output, inputTyp) {
    //Variable deklarieren
    //Abhängig von inputTyp wird sie initialisert.
    //Im Anschluss wird verglichen.
    var regEx;
    switch (inputTyp) {
        case name:
            regEx = /^(([A-ZÄÖÜ]?[a-zäöüß]{0,20})(( |-|_| - | _ |\. )([A-Z]?[a-z]{0,20}))?)$/;
            break;
        
        case email:
            regEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@[-a-z0-9_][-a-z0-9_]+\.[-a-z0-9_]{2,4}$/i;
            break;
        
        case tel:
            regEx = /^\+\d{2}\(?\d{2,4}\)?\/?\d{7,8}$/;
            break;
        
        case strasse:
            regEx = /^([-a-z.ß]{1,30})( \d{1,5})( )?([-a-z]{0,5})?$/i;
            break;
        
        case plz:
            //Prüft ob fünf Zahlen eingegeben wurden
            regEx = /^\d{5}$/;
            break;
    }
    return (!regEx.test(input));
}



//================================================================================================
//
//  Slider
//
//================================================================================================
// fold

//    var dauer = 300; /* fade dauer */
//    var unsichtbar = 400; /* unsichtbar dauer */
//    var anzeige = 3200; /* Anzeigedauer */
//
//    var aktuellesBild = 0;
//
//    var element = document.getElementById("Slideshow");
//
//    var fArray = element.getElementsByTagName('div');
//    var laenge = fArray.length;
//
//    StartFade();
//    function StartFade()
//    { 
//        aktuellesBild = 1;
//        setTimeout("FadeOut()", anzeige);
//    }
//
//    function FadeOut()
//    {
//        for (i = 0; i <= 1; i += 0.01)
//        {
//            setTimeout("SetOpa(" + (1 - i) +")", i * dauer);
//        }
//          setTimeout("FadeIn()", (dauer + unsichtbar));
//    }
//
//    function FadeIn()
//    {
//        for (i = 0; i <= 1; i += 0.01)
//        {
//            setTimeout("SetOpa(" + i +")", i * dauer);
//        }
//        if (aktuellesBild == laenge)
//        {
//            aktuellesBild = 1
//            document.getElementById("slice" + aktuellesBild).style.display = "flex";
//            document.getElementById("slice" + laenge).style.display = "none";
//        }
//        else
//        {
//            document.getElementById("slice" + (aktuellesBild + 1)).style.display = "flex";
//            document.getElementById("slice" + aktuellesBild).style.display = "none";
//            aktuellesBild = aktuellesBild+1
//        }
//        setTimeout("FadeOut()", (dauer + anzeige));
//    }
//    function SetOpa(deckkraft)
//    {
//        element.style.opacity = deckkraft;
//        element.style.MozOpacity = deckkraft;
//        element.style.KhtmlOpacity = deckkraft;
//        element.style.WebkitOpacity = deckkraft;
//        element.style.KhtmlOpacity = deckkraft;
//        element.style.MsOpacity = deckkraft;
//        element.style.filter = 'alpha(opacity=' + (deckkraft * 100) + ');';
//    }
// end
//=================================================================================================
//  
//  E N D E
//  
//=================================================================================================