//================================================================================================
//    JavaScript-Datei um die Texte der einzelnen Regionen per Klick zu ändern
//
//    Datei: buttons.js
//    Datum: 15.11.2015
//    Autor: Tobias & Leon
//=================================================================================================

//Durch dieses Konstrukt wird sichergestellt das die Funktionen erst verknüpft werden,
//wenn die Seite geladen ist.
function init() {
    document.getElementById("aucklandInfoButton").onclick = function () {
        paragraphAendern("aucklandInfoButton");
    }
    
    document.getElementById("aucklandKlimaButton").onclick = function () {
        paragraphAendern("aucklandKlimaButton");
    }
    
    document.getElementById("aucklandTodoButton").onclick = function () {
       paragraphAendern("aucklandTodoButton");
    }
    
    document.getElementById("aucklandEssenButton").onclick = function () {
        paragraphAendern("aucklandEssenButton");
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

window.addEventListener("load", init, false);

function paragraphAendern (button) {
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
            document.getElementById("northlandParagraph").innerHTML = "";
        break;
            
        case "northlandKlimaButton":
            document.getElementById("northlandTextart").innerHTML = "Klima:";
            document.getElementById("northlandParagraph").innerHTML = "";
        break;
            
        case "northlandTodoButton":
            document.getElementById("northlandTextart").innerHTML = "Aktivitäten:";
            document.getElementById("northlandParagraph").innerHTML = "";
        break;
        
        case "northlandEssenButton":
            document.getElementById("northlandTextart").innerHTML = "Essen:";
            document.getElementById("northlandParagraph").innerHTML = "";
        break;
        
            
        
        case "coromandelPeninsulaInfoButton":
            document.getElementById("coromandelPeninsulaTextart").innerHTML = "Kurze Beschreibung:";
            document.getElementById("coromandelPeninsulaParagraph").innerHTML = "";
        break;
            
        case "coromandelPeninsulaKlimaButton":
            document.getElementById("coromandelPeninsulaTextart").innerHTML = "Klima:";
            document.getElementById("coromandelPeninsulaParagraph").innerHTML = "";
        break;
            
        case "coromandelPeninsulaTodoButton":
            document.getElementById("coromandelPeninsulaTextart").innerHTML = "Aktivitäten:";
            document.getElementById("coromandelPeninsulaParagraph").innerHTML = "";
        break;
        
        case "coromandelPeninsulaEssenButton":
            document.getElementById("coromandelPeninsulaTextart").innerHTML = "Essen:";
            document.getElementById("coromandelPeninsulaParagraph").innerHTML = "";
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

//=================================================================================================
//  
//  E N D E
//  
//=================================================================================================