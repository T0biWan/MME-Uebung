//================================================================================================
//    JavaScript-Datei welche die Funktionen der Seite ermöglicht.
//
//    Datei: funktionen.js
//    Datum: 15.11.2015
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
function init() {
    funktionenInitialisieren();
}
window.addEventListener("load", init, false);



//================================================================================================
//
//  Module
//
//================================================================================================

function funktionenInitialisieren() {
    // Initialisierung des Formulars, denn durch onsubmit wird auch ein Enter erkannt.
    // Erst wenn alle Variablen auf true gesetzt wurden kann gesendet werden.
    document.getElementById("formular").onsubmit = function (event) {
        return darfSenden();
    }
    
    
    
    // Die folgenden Funktionen prüfen bei Eingabe das input-Feld.
    // Bei falscher eingabe wird das Feld rot markiert.
    document.getElementById("vorname").onkeyup = function (event) {
        checkEingabe(vorname, name, false);
        setIcon(vorname);
    }
    
    document.getElementById("nachname").onkeyup = function (event) {
        checkEingabe(nachname, name, true);
        setIcon(nachname);
    }
    
    document.getElementById("email").onkeyup = function (event) {
        checkEingabe(email, email, false);
        setIcon(email);
    }
    
    document.getElementById("tel").onkeyup = function (event) {
        checkEingabe(tel, tel, false);
        setIcon(tel);
    }
    
    document.getElementById("strasse").onkeyup = function (event) {
        checkEingabe(strasse, strasse, true);
        setIcon(strasse);
    }
    
    document.getElementById("plz").onkeyup = function (event) {
        checkEingabe(plz, plz, true);
        setIcon(plz);
    }
    
    document.getElementById("stadt").onkeyup = function (event) {
        checkEingabe(stadt, name, true);
        setIcon(stadt);
    }
    
    document.getElementById("land").onkeyup = function (event) {
        checkEingabe(land, name, true);
        setIcon(land);
    }
    
    
    
    // Buttons zum ändern der Texte für die Regionen
    // Wird ein Button geklickt, wird über paragraphAendern der jeweilige Text in p geändert.
    document.getElementById("aucklandInfoButton").onclick = function () {
        paragraphAendern("aucklandInfoButton");
        bildAendern("aucklandInfoButton");
    }
    
    document.getElementById("aucklandKlimaButton").onclick = function () {
        paragraphAendern("aucklandKlimaButton");
        bildAendern("aucklandKlimaButton");
    }
    
    document.getElementById("aucklandTodoButton").onclick = function () {
        paragraphAendern("aucklandTodoButton");
        bildAendern("aucklandTodoButton");
    }
    
    document.getElementById("aucklandEssenButton").onclick = function () {
        paragraphAendern("aucklandEssenButton");
        bildAendern("aucklandEssenButton");
    }
    
    
    
    document.getElementById("northlandInfoButton").onclick = function () {
        paragraphAendern("northlandInfoButton");
    }
    
    document.getElementById("northlandKlimaButton").onclick = function () {
        paragraphAendern("northlandKlimaButton");
    }
    
    document.getElementById("northlandTodoButton").onclick = function () {
       paragraphAendern("northlandTodoButton");
    }
    
    document.getElementById("northlandEssenButton").onclick = function () {
        paragraphAendern("northlandEssenButton");
    }
    
    
    
    document.getElementById("coromandelPeninsulaInfoButton").onclick = function () {
        paragraphAendern("coromandelPeninsulaInfoButton");
    }
    
    document.getElementById("coromandelPeninsulaKlimaButton").onclick = function () {
        paragraphAendern("coromandelPeninsulaKlimaButton");
    }
    
    document.getElementById("coromandelPeninsulaTodoButton").onclick = function () {
       paragraphAendern("coromandelPeninsulaTodoButton");
    }
    
    document.getElementById("coromandelPeninsulaEssenButton").onclick = function () {
        paragraphAendern("coromandelPeninsulaEssenButton");
    }
    
    
    
    document.getElementById("waikato&KingCountryInfoButton").onclick = function () {
        paragraphAendern("waikato&KingCountryInfoButton");
    }
    
    document.getElementById("waikato&KingCountryKlimaButton").onclick = function () {
        paragraphAendern("waikato&KingCountryKlimaButton");
    }
    
    document.getElementById("waikato&KingCountryTodoButton").onclick = function () {
       paragraphAendern("waikato&KingCountryTodoButton");
    }
    
    document.getElementById("waikato&KingCountryEssenButton").onclick = function () {
        paragraphAendern("waikato&KingCountryEssenButton");
    }
    
    
    
    document.getElementById("bayOfPlentyInfoButton").onclick = function () {
        paragraphAendern("bayOfPlentyInfoButton");
    }
    
    document.getElementById("bayOfPlentyKlimaButton").onclick = function () {
        paragraphAendern("bayOfPlentyKlimaButton");
    }
    
    document.getElementById("bayOfPlentyTodoButton").onclick = function () {
       paragraphAendern("bayOfPlentyTodoButton");
    }
    
    document.getElementById("bayOfPlentyEssenButton").onclick = function () {
        paragraphAendern("bayOfPlentyEssenButton");
    }
    
    
    
    document.getElementById("eastCoastInfoButton").onclick = function () {
        paragraphAendern("eastCoastInfoButton");
    }
    
    document.getElementById("eastCoastKlimaButton").onclick = function () {
        paragraphAendern("eastCoastKlimaButton");
    }
    
    document.getElementById("eastCoastTodoButton").onclick = function () {
       paragraphAendern("eastCoastTodoButton");
    }
    
    document.getElementById("eastCoastEssenButton").onclick = function () {
        paragraphAendern("eastCoastEssenButton");
    }
    
    
    
    document.getElementById("zentraleHochebeneInfoButton").onclick = function () {
        paragraphAendern("zentraleHochebeneInfoButton");
    }
    
    document.getElementById("zentraleHochebeneKlimaButton").onclick = function () {
        paragraphAendern("zentraleHochebeneKlimaButton");
    }
    
    document.getElementById("zentraleHochebeneTodoButton").onclick = function () {
       paragraphAendern("zentraleHochebeneTodoButton");
    }
    
    document.getElementById("zentraleHochebeneEssenButton").onclick = function () {
        paragraphAendern("zentraleHochebeneEssenButton");
    }
    
    
    
    document.getElementById("taranakiInfoButton").onclick = function () {
        paragraphAendern("taranakiInfoButton");
    }
    
    document.getElementById("taranakiKlimaButton").onclick = function () {
        paragraphAendern("taranakiKlimaButton");
    }
    
    document.getElementById("taranakiTodoButton").onclick = function () {
       paragraphAendern("taranakiTodoButton");
    }
    
    document.getElementById("taranakiEssenButton").onclick = function () {
        paragraphAendern("taranakiEssenButton");
    }
    
    
    
    document.getElementById("whanganui&PalmerstonNorthInfoButton").onclick = function () {
        paragraphAendern("whanganui&PalmerstonNorthInfoButton");
    }
    
    document.getElementById("whanganui&PalmerstonNorthKlimaButton").onclick = function () {
        paragraphAendern("whanganui&PalmerstonNorthKlimaButton");
    }
    
    document.getElementById("whanganui&PalmerstonNorthTodoButton").onclick = function () {
       paragraphAendern("whanganui&PalmerstonNorthTodoButton");
    }
    
    document.getElementById("whanganui&PalmerstonNorthEssenButton").onclick = function () {
        paragraphAendern("whanganui&PalmerstonNorthEssenButton");
    }
    
    
    
    document.getElementById("wellingtonInfoButton").onclick = function () {
        paragraphAendern("wellingtonInfoButton");
    }
    
    document.getElementById("wellingtonKlimaButton").onclick = function () {
        paragraphAendern("wellingtonKlimaButton");
    }
    
    document.getElementById("wellingtonTodoButton").onclick = function () {
       paragraphAendern("wellingtonTodoButton");
    }
    
    document.getElementById("wellingtonEssenButton").onclick = function () {
        paragraphAendern("wellingtonEssenButton");
    }
    
    
    
    document.getElementById("marlborough&NelsonInfoButton").onclick = function () {
        paragraphAendern("marlborough&NelsonInfoButton");
    }
    
    document.getElementById("marlborough&NelsonKlimaButton").onclick = function () {
        paragraphAendern("marlborough&NelsonKlimaButton");
    }
    
    document.getElementById("marlborough&NelsonTodoButton").onclick = function () {
       paragraphAendern("marlborough&NelsonTodoButton");
    }
    
    document.getElementById("marlborough&NelsonEssenButton").onclick = function () {
        paragraphAendern("marlborough&NelsonEssenButton");
    }
    
    
    
    document.getElementById("christchurch&CanterburyInfoButton").onclick = function () {
        paragraphAendern("christchurch&CanterburyInfoButton");
    }
    
    document.getElementById("christchurch&CanterburyKlimaButton").onclick = function () {
        paragraphAendern("christchurch&CanterburyKlimaButton");
    }
    
    document.getElementById("christchurch&CanterburyTodoButton").onclick = function () {
       paragraphAendern("christchurch&CanterburyTodoButton");
    }
    
    document.getElementById("christchurch&CanterburyEssenButton").onclick = function () {
        paragraphAendern("christchurch&CanterburyEssenButton");
    }
    
    
    
    document.getElementById("otagoInfoButton").onclick = function () {
        paragraphAendern("otagoInfoButton");
    }
    
    document.getElementById("otagoKlimaButton").onclick = function () {
        paragraphAendern("otagoKlimaButton");
    }
    
    document.getElementById("otagoTodoButton").onclick = function () {
       paragraphAendern("otagoTodoButton");
    }
    
    document.getElementById("otagoEssenButton").onclick = function () {
        paragraphAendern("otagoEssenButton");
    }
    
    
    
    document.getElementById("queenstownInfoButton").onclick = function () {
        paragraphAendern("queenstownInfoButton");
    }
    
    document.getElementById("queenstownKlimaButton").onclick = function () {
        paragraphAendern("queenstownKlimaButton");
    }
    
    document.getElementById("queenstownTodoButton").onclick = function () {
       paragraphAendern("queenstownTodoButton");
    }
    
    document.getElementById("queenstownEssenButton").onclick = function () {
        paragraphAendern("queenstownEssenButton");
    }
    
    
    
        document.getElementById("fjordland&SouthlandInfoButton").onclick = function () {
        paragraphAendern("fjordland&SouthlandInfoButton");
    }
    
    document.getElementById("fjordland&SouthlandKlimaButton").onclick = function () {
        paragraphAendern("fjordland&SouthlandKlimaButton");
    }
    
    document.getElementById("fjordland&SouthlandTodoButton").onclick = function () {
       paragraphAendern("fjordland&SouthlandTodoButton");
    }
    
    document.getElementById("fjordland&SouthlandEssenButton").onclick = function () {
        paragraphAendern("fjordland&SouthlandEssenButton");
    }
    
    
    
    document.getElementById("westCoastInfoButton").onclick = function () {
        paragraphAendern("westCoastInfoButton");
    }
    
    document.getElementById("westCoastKlimaButton").onclick = function () {
        paragraphAendern("westCoastKlimaButton");
    }
    
    document.getElementById("westCoastTodoButton").onclick = function () {
       paragraphAendern("westCoastTodoButton");
    }
    
    document.getElementById("westCoastEssenButton").onclick = function () {
        paragraphAendern("westCoastEssenButton");
    }
}

function paragraphAendern (button) {
    //Über einen switch wird der Aufrufparameter ausgewertet und entsprechend auf ihn reagiert.
    switch (button) {
        case "aucklandInfoButton":
            document.getElementById("aucklandTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("aucklandParagraph").innerHTML = "Paris ist die Stadt der Liebe aber Auckland die Stadt der liebenden. Das zumindest bedeutet ihr Maori-Name Tamaki Makaurau. Zwei Häfen umrahmen eine Landenge mit Vulkankegeln und fruchtbarem Ackerland. An jedem der vielen Aussichtspunkte wird man verblüfft feststellen, wie die Tasmansee und der Pazifik kurz davor sind sich zu berühren und eine neue Insel zu formen. So kommt es, dass immer Wasser in der Nähe ist. Die 135.000 Schiffchen, die in den Jachthäfen liegen, haben der Stadt ihren beständigsten Spitznamen verliehen: Stadt der Segel. Dichte Regenwälder Thermalquellen, menschenleere Strände, Weingüter und Naturschutzgebiete liegen nie mehr als eine Autostunde von den Hochhäusern der Innenstadt entfernt.";
        break;
            
        case "aucklandKlimaButton":
            document.getElementById("aucklandTextart").innerHTML = "Klima:";
            document.getElementById("aucklandParagraph").innerHTML = "Das Klima in Auckland ist mit gelegentlichem Frost im Winter und mit hoher Luftfeuchtigkeit im Sommer eher mild. In jedem Sommermonat regnet es durchschnittlich acht Tage aber das Wetter ist bekanntermaßen sehr unbeständig. Das ganze Jahr über ist es möglich vier Jahreszeiten an einem Tag zu erleben.";
        break;
            
        case "aucklandTodoButton":
            document.getElementById("aucklandTextart").innerHTML = "Aktivitäten:";
            document.getElementById("aucklandParagraph").innerHTML = "Volcanic Field - Auckland wurde auf 50 nur zum Teil erloschenen Vulkanen errichtet. Sie erheben sich eindrucksvoll im Stadtbild und sind eine Besteigung wert.<br>Karekare - Ein Strand wie von einem fernen Planeten, scheinbar endlos und eingerahmt von hohen Felsen. Der schwarze Sandstrand gehört zu den tödlichsten Gewässern Neuseelands.<br>Piha - The place to be für Aucklands Surfer-Szene. Der Quarzsand-Strand ist jedoch so gefährlich das er seine eigene Reality Show hat, Piha Rescue, das neuseeländische Baywatch.<br>Bungy Jumpen - Vom Sky Tower, dem höchsten Bauwerk der südlichen Hemisphäre.<br>Sky Walk - In 328 Metern Höhe den Sky Tower an der Fassade umrunden.";
        break;
        
        case "aucklandEssenButton":
            document.getElementById("aucklandTextart").innerHTML = "Essen:";
            document.getElementById("aucklandParagraph").innerHTML = "Raw-Power - Bunt, Vegan, Rock 'n' Roll und frische Zutaten haben diesen Restaurant schon viel Besuch vom internationalen Rockadel beschert.<br>Non Solo Pizza - Unter einem Peroni-Kronleuchter dürfen Gäste hier italienische Küche vom feinsten genießen.<br>SPQR - Wie der Name schon erraten lässt, entführt es einen ins alte Rom und wartet mit Efeuranken und schummriger Beleuchtung auf.<br>Murder Burger - Üpige Burger und der absolute Veganer-Alptraum, hier gibt es Fleisch und zwar viel.";
        break;
        
            
        
        case "northlandInfoButton":
            document.getElementById("northlandTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("northlandParagraph").innerHTML = "Östlich von Auckland wagt sie sich kühn in den Pazifikhinaus. Ein dramatisch in die Höhe ragender Bergrücken teilt die Halbinsel in zwei sehr ungleiche Hälften. An der Ostküste warten weißsandige Strände. Die kitschigen Goldgräberstädte im Westen bleiben vom schlimmsten Touristenandrang verschont, da die dortigen Feuchtgebiete und steinigen Buchten für die Massen eher unattraktiv sind. Lange diente dieser Küstenabschnitt Hippies als Refugium, inzwischen prägen Biobauernhöfe und Rückzugsorte für Bhuddisten das Bild. Im Zentrum der Halbinsel durchziehen Wanderpfade die Berge. Weiter im Süden, wo sich einst die sumpfigen Hauraki Plains mit einer großen Vogelvielfalt erstreckten, haben sich ökologische Nischen erhalten.Trotz der Nähe zu Auckland ist man in der Region schnell und einfach in herrlicher Abgeschiedenheit. Einige der abgelegenen  Gemeinden erreicht man immer noch nur über Schotterpisten und die Aura rauer Eigenwilligkeit verfolgt einen auf Schritt und Tritt.";
        break;
            
        case "northlandKlimaButton":
            document.getElementById("northlandTextart").innerHTML = "Klima:";
            document.getElementById("northlandParagraph").innerHTML = "Der 'winterlose Norden hat durchschnittlich sieben Regentage pro Monat im Sommer und 16 im Winter. Die Temperatur ist meist ein oder zwei Grad höher als in Auckland.";
        break;
            
        case "northlandTodoButton":
            document.getElementById("northlandTextart").innerHTML = "Aktivitäten:";
            document.getElementById("northlandParagraph").innerHTML = "Cape Reinga - Am nördlichsten Punkt Neuseelands das Ende der Welt bestaunen und beobachten wie zwei Ozeane aufeinandertreffen.<br>Ninety Miles Beach - 90 Kilometer befahrbarer Sandstrand neben schroffen Wellen<br>Waipoua Kauri Forest - Den uralten und stillen Giganten eine Aufwartung machen.<br>Abbey Caves - In einem verwunschenen Wald voller bizarrer Felsen tut sich die Erde auf und ermöglicht es den Mutigen über fünf Höhlensysteme zu erkunden.<br>Matapouri - Ein karibisch anmutender Sandstrand an einer Sichelförmigen Bucht. Durch einen kleinen Dschungel gelangt man zum Mermaids Pool.<br>Dukes Nose - Eine waghalsige Wanderung die einen breiten Fluss auf seinem Weg zum Meer begleitet und mit dem erklimmen einer steilen Steinwand endet.";
        break;
        
        case "northlandEssenButton":
            document.getElementById("northlandTextart").innerHTML = "Essen:";
            document.getElementById("northlandParagraph").innerHTML = "	Beach House - Das beste Lokal Northlands serviert herzhafte Gerichte in einem von Pongastämmen umgebenen Hof.<br>Bob - 'Hi Bob, netter Laden. Wie würdest du dich beschreiben? Als Deli? Als Cafe? Und all die ausgefallenen Zutaten für die Standardgerichte wie Kransky-Würstchen zum Frühstück! Gut gemacht, Bob.'<br>Tuk Tuk - Thailändische Küche in traditioneller Atmosphäre<br>Gannets Restaurant - Tolles kleines Restaurant mit viel gelobten Meeresfrüchten";
        break;
        
            
        
        case "coromandelPeninsulaInfoButton":
            document.getElementById("coromandelPeninsulaTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("coromandelPeninsulaParagraph").innerHTML = "Östlich von Auckland wagt sie sich kühn in den Pazifikhinaus. Ein dramatisch in die Höhe ragender Bergrücken teilt die Halbinsel in zwei sehr ungleiche Hälften. An der Ostküste warten weißsandige Strände. Die kitschigen Goldgräberstädte im Westen bleiben vom schlimmsten Touristenandrang verschont, da die dortigen Feuchtgebiete und steinigen Buchten für die Massen eher unattraktiv sind. Lange diente dieser Küstenabschnitt Hippies als Refugium, inzwischen prägen Biobauernhöfe und Rückzugsorte für Bhuddisten das Bild. Im Zentrum der Halbinsel durchziehen Wanderpfade die Berge. Weiter im Süden, wo sich einst die sumpfigen Hauraki Plains mit einer großen Vogelvielfalt erstreckten, haben sich ökologische Nischen erhalten. Trotz der Nähe zu Auckland ist man in der Region schnell und einfach in herrlicher Abgeschiedenheit. Einige der abgelegenen  Gemeinden erreicht man immer noch nur über Schotterpisten und die Aura rauer Eigenwilligkeit verfolgt einen auf Schritt und Tritt.";
        break;
            
        case "coromandelPeninsulaKlimaButton":
            document.getElementById("coromandelPeninsulaTextart").innerHTML = "Klima:";
            document.getElementById("coromandelPeninsulaParagraph").innerHTML = "Aufgrund ihrer Gebirge fällt in der Region mehr Niederschlag als an der übrigen Ostküste. Jährlich 3000 bis 4500 mm.";
        break;
            
        case "coromandelPeninsulaTodoButton":
            document.getElementById("coromandelPeninsulaTextart").innerHTML = "Aktivitäten:";
            document.getElementById("coromandelPeninsulaParagraph").innerHTML = "Far North Coromandel - Unter dem purpurroten Dach alter Pohutukawa-Bäume auf abgelegenen Schotterpisten fahren.<br>Hahei - Mit dem Kajak versteckte Inseln, Höhlen und Buchten erforschen.<br>Hot Water Beach - Am Strand seinen eigenen Thermalwasserpool graben und das warme Wasser genießen das aus dem Boden quillt.<br>Karangahake Gorge - In die geheimnisvollen Tiefen des dichten Waldes vordringen.";
        break;
        
        case "coromandelPeninsulaEssenButton":
            document.getElementById("coromandelPeninsulaTextart").innerHTML = "Essen:";
            document.getElementById("coromandelPeninsulaParagraph").innerHTML = "Matatoki Farm Cheese - Käse aus der Region<br>Rocco - Spanisches und neuseeländisches Essen in einer restaurierten Villa aus Kauriholz.<br>Food for thought - Panini, Kuchen, Kaffe oder doch Pies?";
        break;
        
            
        
        case "waikato&KingCountryInfoButton":
            document.getElementById("waikato&KingCountryTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("waikato&KingCountryParagraph").innerHTML = "";
        break;
            
        case "waikato&KingCountryKlimaButton":
            document.getElementById("waikato&KingCountryTextart").innerHTML = "Klima:";
            document.getElementById("waikato&KingCountryParagraph").innerHTML = "";
        break;
            
        case "waikato&KingCountryTodoButton":
            document.getElementById("waikato&KingCountryTextart").innerHTML = "Aktivitäten:";
            document.getElementById("waikato&KingCountryParagraph").innerHTML = "";
        break;
        
        case "waikato&KingCountryEssenButton":
            document.getElementById("waikato&KingCountryTextart").innerHTML = "Essen:";
            document.getElementById("waikato&KingCountryParagraph").innerHTML = "";
        break;
        
            
        
        case "bayOfPlentyInfoButton":
            document.getElementById("bayOfPlentyTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("bayOfPlentyParagraph").innerHTML = "";
        break;
            
        case "bayOfPlentyKlimaButton":
            document.getElementById("bayOfPlentyTextart").innerHTML = "Klima:";
            document.getElementById("bayOfPlentyParagraph").innerHTML = "";
        break;
            
        case "bayOfPlentyTodoButton":
            document.getElementById("bayOfPlentyTextart").innerHTML = "Aktivitäten:";
            document.getElementById("bayOfPlentyParagraph").innerHTML = "";
        break;
        
        case "bayOfPlentyEssenButton":
            document.getElementById("bayOfPlentyTextart").innerHTML = "Essen:";
            document.getElementById("bayOfPlentyParagraph").innerHTML = "";
        break;
        
            
        
        case "eastCoastInfoButton":
            document.getElementById("eastCoastTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("eastCoastParagraph").innerHTML = "";
        break;
            
        case "eastCoastKlimaButton":
            document.getElementById("eastCoastTextart").innerHTML = "Klima:";
            document.getElementById("eastCoastParagraph").innerHTML = "";
        break;
            
        case "eastCoastTodoButton":
            document.getElementById("eastCoastTextart").innerHTML = "Aktivitäten:";
            document.getElementById("eastCoastParagraph").innerHTML = "";
        break;
        
        case "eastCoastEssenButton":
            document.getElementById("eastCoastTextart").innerHTML = "Essen:";
            document.getElementById("eastCoastParagraph").innerHTML = "";
        break;
        
            
        
        case "zentraleHochebeneInfoButton":
            document.getElementById("zentraleHochebeneTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("zentraleHochebeneParagraph").innerHTML = "";
        break;
            
        case "zentraleHochebeneKlimaButton":
            document.getElementById("zentraleHochebeneTextart").innerHTML = "Klima:";
            document.getElementById("zentraleHochebeneParagraph").innerHTML = "";
        break;
            
        case "zentraleHochebeneTodoButton":
            document.getElementById("zentraleHochebeneTextart").innerHTML = "Aktivitäten:";
            document.getElementById("zentraleHochebeneParagraph").innerHTML = "";
        break;
        
        case "zentraleHochebeneEssenButton":
            document.getElementById("zentraleHochebeneTextart").innerHTML = "Essen:";
            document.getElementById("zentraleHochebeneParagraph").innerHTML = "";
        break;
        
            
        
        case "taranakiInfoButton":
            document.getElementById("taranakiTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("taranakiParagraph").innerHTML = "";
        break;
            
        case "taranakiKlimaButton":
            document.getElementById("taranakiTextart").innerHTML = "Klima:";
            document.getElementById("taranakiParagraph").innerHTML = "";
        break;
            
        case "taranakiTodoButton":
            document.getElementById("taranakiTextart").innerHTML = "Aktivitäten:";
            document.getElementById("taranakiParagraph").innerHTML = "";
        break;
        
        case "taranakiEssenButton":
            document.getElementById("taranakiTextart").innerHTML = "Essen:";
            document.getElementById("taranakiParagraph").innerHTML = "";
        break;
        
            
        
        case "whanganui&PalmerstonNorthInfoButton":
            document.getElementById("whanganui&PalmerstonNorthTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("whanganui&PalmerstonNorthParagraph").innerHTML = "";
        break;
            
        case "whanganui&PalmerstonNorthKlimaButton":
            document.getElementById("whanganui&PalmerstonNorthTextart").innerHTML = "Klima:";
            document.getElementById("whanganui&PalmerstonNorthParagraph").innerHTML = "";
        break;
            
        case "whanganui&PalmerstonNorthTodoButton":
            document.getElementById("whanganui&PalmerstonNorthTextart").innerHTML = "Aktivitäten:";
            document.getElementById("whanganui&PalmerstonNorthParagraph").innerHTML = "";
        break;
        
        case "whanganui&PalmerstonNorthEssenButton":
            document.getElementById("whanganui&PalmerstonNorthTextart").innerHTML = "Essen:";
            document.getElementById("whanganui&PalmerstonNorthParagraph").innerHTML = "";
        break;
        
            
        
        case "wellingtonInfoButton":
            document.getElementById("wellingtonTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("wellingtonParagraph").innerHTML = "";
        break;
            
        case "wellingtonKlimaButton":
            document.getElementById("wellingtonTextart").innerHTML = "Klima:";
            document.getElementById("wellingtonParagraph").innerHTML = "";
        break;
            
        case "wellingtonTodoButton":
            document.getElementById("wellingtonTextart").innerHTML = "Aktivitäten:";
            document.getElementById("wellingtonParagraph").innerHTML = "";
        break;
        
        case "wellingtonEssenButton":
            document.getElementById("wellingtonTextart").innerHTML = "Essen:";
            document.getElementById("wellingtonParagraph").innerHTML = "";
        break;
        
            
        
        case "marlborough&NelsonInfoButton":
            document.getElementById("marlborough&NelsonTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("marlborough&NelsonParagraph").innerHTML = "";
        break;
            
        case "marlborough&NelsonKlimaButton":
            document.getElementById("marlborough&NelsonTextart").innerHTML = "Klima:";
            document.getElementById("marlborough&NelsonParagraph").innerHTML = "";
        break;
            
        case "marlborough&NelsonTodoButton":
            document.getElementById("marlborough&NelsonTextart").innerHTML = "Aktivitäten:";
            document.getElementById("marlborough&NelsonParagraph").innerHTML = "";
        break;
        
        case "marlborough&NelsonEssenButton":
            document.getElementById("marlborough&NelsonTextart").innerHTML = "Essen:";
            document.getElementById("marlborough&NelsonParagraph").innerHTML = "";
        break;
        
            
        
        case "christchurch&CanterburyInfoButton":
            document.getElementById("christchurch&CanterburyTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("christchurch&CanterburyParagraph").innerHTML = "";
        break;
            
        case "christchurch&CanterburyKlimaButton":
            document.getElementById("christchurch&CanterburyTextart").innerHTML = "Klima:";
            document.getElementById("christchurch&CanterburyParagraph").innerHTML = "";
        break;
            
        case "christchurch&CanterburyTodoButton":
            document.getElementById("christchurch&CanterburyTextart").innerHTML = "Aktivitäten:";
            document.getElementById("christchurch&CanterburyParagraph").innerHTML = "";
        break;
        
        case "christchurch&CanterburyEssenButton":
            document.getElementById("christchurch&CanterburyTextart").innerHTML = "Essen:";
            document.getElementById("christchurch&CanterburyParagraph").innerHTML = "";
        break;
        
            
        
        case "otagoInfoButton":
            document.getElementById("otagoTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("otagoParagraph").innerHTML = "";
        break;
            
        case "otagoKlimaButton":
            document.getElementById("otagoTextart").innerHTML = "Klima:";
            document.getElementById("otagoParagraph").innerHTML = "";
        break;
            
        case "otagoTodoButton":
            document.getElementById("otagoTextart").innerHTML = "Aktivitäten:";
            document.getElementById("otagoParagraph").innerHTML = "";
        break;
        
        case "otagoEssenButton":
            document.getElementById("otagoTextart").innerHTML = "Essen:";
            document.getElementById("otagoParagraph").innerHTML = "";
        break;
        
            
        
        case "fjordland&SouthlandInfoButton":
            document.getElementById("fjordland&SouthlandTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("fjordland&SouthlandParagraph").innerHTML = "";
        break;
            
        case "fjordland&SouthlandKlimaButton":
            document.getElementById("fjordland&SouthlandTextart").innerHTML = "Klima:";
            document.getElementById("fjordland&SouthlandParagraph").innerHTML = "";
        break;
            
        case "fjordland&SouthlandTodoButton":
            document.getElementById("fjordland&SouthlandTextart").innerHTML = "Aktivitäten:";
            document.getElementById("fjordland&SouthlandParagraph").innerHTML = "";
        break;
        
        case "fjordland&SouthlandEssenButton":
            document.getElementById("fjordland&SouthlandTextart").innerHTML = "Essen:";
            document.getElementById("fjordland&SouthlandParagraph").innerHTML = "";
        break;
        
            
        
        case "queenstownInfoButton":
            document.getElementById("queenstownTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("queenstownParagraph").innerHTML = "";
        break;
            
        case "queenstownKlimaButton":
            document.getElementById("queenstownTextart").innerHTML = "Klima:";
            document.getElementById("queenstownParagraph").innerHTML = "";
        break;
            
        case "queenstownTodoButton":
            document.getElementById("queenstownTextart").innerHTML = "Aktivitäten:";
            document.getElementById("queenstownParagraph").innerHTML = "";
        break;
        
        case "queenstownEssenButton":
            document.getElementById("queenstownTextart").innerHTML = "Essen:";
            document.getElementById("queenstownParagraph").innerHTML = "";
        break;
        
            
        
        case "westCoastInfoButton":
            document.getElementById("westCoastTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("westCoastParagraph").innerHTML = "";
        break;
            
        case "westCoastKlimaButton":
            document.getElementById("westCoastTextart").innerHTML = "Klima:";
            document.getElementById("westCoastParagraph").innerHTML = "";
        break;
            
        case "westCoastTodoButton":
            document.getElementById("westCoastTextart").innerHTML = "Aktivitäten:";
            document.getElementById("westCoastParagraph").innerHTML = "";
        break;
        
        case "westCoastEssenButton":
            document.getElementById("westCoastTextart").innerHTML = "Essen:";
            document.getElementById("westCoastParagraph").innerHTML = "";
        break;
    }
}

function bildAendern(button) {
    switch (button) {
        case "aucklandInfoButton":
            document.getElementById("aucklandImg").src = "pictures/auckland/DSC_0146.JPG";
            break;
            
        case "aucklandKlimaButton":
            document.getElementById("aucklandImg").src = "pictures/auckland/P1120750.JPG";
            break;
            
        case "aucklandTodoButton":
            document.getElementById("aucklandImg").src = "pictures/auckland/DSCN0961.JPG";
            break;
        
        case "aucklandEssenButton":
            document.getElementById("aucklandImg").src = "pictures/auckland/DSC_0917.JPG";
            break;
        
            
        
        case "northlandInfoButton":
            document.getElementById("northlandImg").src = "pictures/northland/DSCN1252.JPG";
            break;
            
        case "northlandKlimaButton":
            document.getElementById("northlandImg").src = "pictures/northland/P1140021.JPG";
            break;
            
        case "northlandTodoButton":
            document.getElementById("northlandImg").src = "pictures/northland/DSCN1225.JPG";
            break;
        
        case "northlandEssenButton":
            document.getElementById("northlandImg").src = "pictures/northland/DSCN1339.JPG";
            break;
        
            
        
        case "coromandelPeninsulaInfoButton":
            document.getElementById("coromandelPeninsulaImg").src = "pictures/coromandelPeninsula/P1160313.JPG";
            break;
            
        case "coromandelPeninsulaKlimaButton":
            document.getElementById("coromandelPeninsulaImg").src = "pictures/coromandelPeninsula/P1160208.JPG";
            break;
            
        case "coromandelPeninsulaTodoButton":
            document.getElementById("coromandelPeninsulaImg").src = "pictures/coromandelPeninsula/P1160365.JPG";
            break;
        
        case "coromandelPeninsulaEssenButton":
            document.getElementById("coromandelPeninsulaImg").src = "pictures/coromandelPeninsula/P1160296.JPG";
            break;
        
            
        
        case "waikato&KingCountryInfoButton":
            document.getElementById("waikato&KingCountryImg").src = "pictures/waikato&KingCountry/X.JPG";
            break;
            
        case "waikato&KingCountryKlimaButton":
            document.getElementById("waikato&KingCountryImg").src = "pictures/waikato&KingCountry/X.JPG";
            break;
            
        case "waikato&KingCountryTodoButton":
            document.getElementById("waikato&KingCountryImg").src = "pictures/waikato&KingCountry/X.JPG";
            break;
        
        case "waikato&KingCountryEssenButton":
            document.getElementById("waikato&KingCountryImg").src = "pictures/waikato&KingCountry/X.JPG";
            break;
        
            
        
        case "bayOfPlentyInfoButton":
            document.getElementById("bayOfPlentyImg").src = "pictures/bayOfPlenty/X.JPG";
            break;
            
        case "bayOfPlentyKlimaButton":
            document.getElementById("bayOfPlentyImg").src = "pictures/bayOfPlenty/X.JPG";
            break;
            
        case "bayOfPlentyTodoButton":
            document.getElementById("bayOfPlentyImg").src = "pictures/bayOfPlenty/X.JPG";
            break;
        
        case "bayOfPlentyEssenButton":
            document.getElementById("bayOfPlentyImg").src = "pictures/bayOfPlenty/X.JPG";
            break;
        
            
        
        case "eastCoastInfoButton":
            document.getElementById("eastCoastImg").src = "pictures/eastCoast/X.JPG";
            break;
            
        case "eastCoastKlimaButton":
            document.getElementById("eastCoastImg").src = "pictures/eastCoast/X.JPG";
            break;
            
        case "eastCoastTodoButton":
            document.getElementById("eastCoastImg").src = "pictures/eastCoast/X.JPG";
            break;
        
        case "eastCoastEssenButton":
            document.getElementById("eastCoastImg").src = "pictures/eastCoast/X.JPG";
            break;
        
            
        
        case "zentraleHochebeneInfoButton":
            document.getElementById("zentraleHochebeneImg").src = "pictures/zentraleHochebene/X.JPG";
            break;
            
        case "zentraleHochebeneKlimaButton":
            document.getElementById("zentraleHochebeneImg").src = "pictures/zentraleHochebene/X.JPG";
            break;
            
        case "zentraleHochebeneTodoButton":
            document.getElementById("zentraleHochebeneImg").src = "pictures/zentraleHochebene/X.JPG";
            break;
        
        case "zentraleHochebeneEssenButton":
            document.getElementById("zentraleHochebeneImg").src = "pictures/zentraleHochebene/X.JPG";
            break;
        
            
        
        case "taranakiInfoButton":
            document.getElementById("taranakiImg").src = "pictures/taranaki/X.JPG";
            break;
            
        case "taranakiKlimaButton":
            document.getElementById("taranakiImg").src = "pictures/taranaki/X.JPG";
            break;
            
        case "taranakiTodoButton":
            document.getElementById("taranakiImg").src = "pictures/taranaki/X.JPG";
            break;
        
        case "taranakiEssenButton":
            document.getElementById("taranakiImg").src = "pictures/taranaki/X.JPG";
            break;
        
            
        
        case "whanganui&PalmerstonNorthInfoButton":
            document.getElementById("whanganui&PalmerstonNorthImg").src = "pictures/whanganui&PalmerstonNorth/X.JPG";
            break;
            
        case "whanganui&PalmerstonNorthKlimaButton":
            document.getElementById("whanganui&PalmerstonNorthImg").src = "pictures/whanganui&PalmerstonNorth/X.JPG";
            break;
            
        case "whanganui&PalmerstonNorthTodoButton":
            document.getElementById("whanganui&PalmerstonNorthImg").src = "pictures/whanganui&PalmerstonNorth/X.JPG";
            break;
        
        case "whanganui&PalmerstonNorthEssenButton":
            document.getElementById("whanganui&PalmerstonNorthImg").src = "pictures/whanganui&PalmerstonNorth/X.JPG";
            break;
        
            
        
        case "wellingtonInfoButton":
            document.getElementById("wellingtonImg").src = "pictures/wellington/X.JPG";
            break;
            
        case "wellingtonKlimaButton":
            document.getElementById("wellingtonImg").src = "pictures/wellington/X.JPG";
            break;
            
        case "wellingtonTodoButton":
            document.getElementById("wellingtonImg").src = "pictures/wellington/X.JPG";
            break;
        
        case "wellingtonEssenButton":
            document.getElementById("wellingtonImg").src = "pictures/wellington/X.JPG";
            break;
        
            
        
        case "marlborough&NelsonInfoButton":
            document.getElementById("marlborough&NelsonImg").src = "pictures/marlborough&Nelson/X.JPG";
            break;
            
        case "marlborough&NelsonKlimaButton":
            document.getElementById("marlborough&NelsonImg").src = "pictures/marlborough&Nelson/X.JPG";
            break;
            
        case "marlborough&NelsonTodoButton":
            document.getElementById("marlborough&NelsonImg").src = "pictures/marlborough&Nelson/X.JPG";
            break;
        
        case "marlborough&NelsonEssenButton":
            document.getElementById("marlborough&NelsonImg").src = "pictures/marlborough&Nelson/X.JPG";
            break;
        
            
        
        case "christchurch&CanterburyInfoButton":
            document.getElementById("christchurch&CanterburyImg").src = "pictures/christchurch&Canterbury/X.JPG";
            break;
            
        case "christchurch&CanterburyKlimaButton":
            document.getElementById("christchurch&CanterburyImg").src = "pictures/christchurch&Canterbury/X.JPG";
            break;
            
        case "christchurch&CanterburyTodoButton":
            document.getElementById("christchurch&CanterburyImg").src = "pictures/christchurch&Canterbury/X.JPG";
            break;
        
        case "christchurch&CanterburyEssenButton":
            document.getElementById("christchurch&CanterburyImg").src = "pictures/christchurch&Canterbury/X.JPG";
            break;
        
            
        
        case "otagoInfoButton":
            document.getElementById("otagImg").src = "pictures/otag/X.JPG";
            break;
            
        case "otagoKlimaButton":
            document.getElementById("otagImg").src = "pictures/otag/X.JPG";
            break;
            
        case "otagoTodoButton":
            document.getElementById("otagImg").src = "pictures/otag/X.JPG";
            break;
        
        case "otagoEssenButton":
            document.getElementById("otagImg").src = "pictures/otag/X.JPG";
            break;
        
            
        
        case "fjordland&SouthlandInfoButton":
            document.getElementById("fjordland&SouthlandImg").src = "pictures/fjordland&Southland/X.JPG";
            break;
            
        case "fjordland&SouthlandKlimaButton":
            document.getElementById("fjordland&SouthlandImg").src = "pictures/fjordland&Southland/X.JPG";
            break;
            
        case "fjordland&SouthlandTodoButton":
            document.getElementById("fjordland&SouthlandImg").src = "pictures/fjordland&Southland/X.JPG";
            break;
        
        case "fjordland&SouthlandEssenButton":
            document.getElementById("fjordland&SouthlandImg").src = "pictures/fjordland&Southland/X.JPG";
            break;
        
            
        
        case "queenstownInfoButton":
            document.getElementById("queenstownImg").src = "pictures/queenstown/X.JPG";
            break;
            
        case "queenstownKlimaButton":
            document.getElementById("queenstownImg").src = "pictures/queenstown/X.JPG";
            break;
            
        case "queenstownTodoButton":
            document.getElementById("queenstownImg").src = "pictures/queenstown/X.JPG";
            break;
        
        case "queenstownEssenButton":
            document.getElementById("queenstownImg").src = "pictures/queenstown/X.JPG";
            break;
        
            
        
        case "westCoastInfoButton":
            document.getElementById("westCoastImg").src = "pictures/westCoast/X.JPG";
            break;
            
        case "westCoastKlimaButton":
            document.getElementById("westCoastImg").src = "pictures/westCoast/X.JPG";
            break;
            
        case "westCoastTodoButton":
            document.getElementById("westCoastImg").src = "pictures/westCoast/X.JPG";
            break;
        
        case "westCoastEssenButton":
            document.getElementById("westCoastImg").src = "pictures/westCoast/X.JPG";
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
            icon = "vornameIcon";
            break;
            
        case nachname:
            inputOk = nachnameOk;
            icon = "nachnameIcon";
            break;
            
        case email:
            inputOk = emailOk;
            icon = "emailIcon";
            break;
            
        case tel:
            inputOk = telOk;
            icon = "telIcon";
            break;
            
        case strasse:
            inputOk = strasseOk;
            icon = "strasseIcon";
            break;
            
        case plz:
            inputOk = plzOk;
            icon = "plzIcon";
            break;
            
        case stadt:
            inputOk = stadtOk;
            icon = "stadtIcon";
            break;
            
        case land:
            inputOk = landOk;
            icon = "landIcon";
            break;
    }
    if(inputOk) document.getElementById(icon).src="pictures/icons/formular/yesIcon.png";
    else document.getElementById(icon).src="pictures/icons/formular/noIcon.png";
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

    var dauer = 300; /* fade dauer */
    var unsichtbar = 400; /* unsichtbar dauer */
    var anzeige = 3200; /* Anzeigedauer */

    var aktuellesBild = 0;

    var element = document.getElementById("Slideshow");

    var fArray = element.getElementsByTagName('div');
    var laenge = fArray.length;

    StartFade();
    function StartFade()
    { 
        aktuellesBild = 1;
        setTimeout("FadeOut()", anzeige);
    }

    function FadeOut()
    {
        for (i = 0; i <= 1; i += 0.01)
        {
            setTimeout("SetOpa(" + (1 - i) +")", i * dauer);
        }
          setTimeout("FadeIn()", (dauer + unsichtbar));
    }

    function FadeIn()
    {
        for (i = 0; i <= 1; i += 0.01)
        {
            setTimeout("SetOpa(" + i +")", i * dauer);
        }
        if (aktuellesBild == laenge)
        {
            aktuellesBild = 1
            document.getElementById("slice" + aktuellesBild).style.display = "flex";
            document.getElementById("slice" + laenge).style.display = "none";
        }
        else
        {
            document.getElementById("slice" + (aktuellesBild + 1)).style.display = "flex";
            document.getElementById("slice" + aktuellesBild).style.display = "none";
            aktuellesBild = aktuellesBild+1
        }
        setTimeout("FadeOut()", (dauer + anzeige));
    }
    function SetOpa(deckkraft)
    {
        element.style.opacity = deckkraft;
        element.style.MozOpacity = deckkraft;
        element.style.KhtmlOpacity = deckkraft;
        element.style.WebkitOpacity = deckkraft;
        element.style.KhtmlOpacity = deckkraft;
        element.style.MsOpacity = deckkraft;
        element.style.filter = 'alpha(opacity=' + (deckkraft * 100) + ');';
    }



//=================================================================================================
//  
//  E N D E
//  
//=================================================================================================