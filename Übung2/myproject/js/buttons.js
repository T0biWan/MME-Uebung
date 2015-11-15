//================================================================================================
//    JavaScript-Datei um die Texte der einzelnen Regionen per Klick zu ändern
//
//    Datei: buttons.js
//    Datum: 15.11.2015
//    Autor: Tobias & Leon
//=================================================================================================

function init() {
    //Durch dieses Konstrukt wird sichergestellt das die Funktionen erst verknüpft werden,
    //wenn die Seite geladen ist.
    /*
    */
    document.getElementById("aucklandInfoButton").onclick = function () {
        document.getElementById("aucklandParagraph").innerHTML = "Paris ist die Stadt der Liebe aber Auckland die Stadt der liebenden. Das zumindest bedeutet ihr Maori-Name Tamaki Makaurau. Zwei Häfen umrahmen eine Landenge mit Vulkankegeln und fruchtbarem Ackerland. An jedem der vielen Aussichtspunkte wird man verblüfft feststellen, wie die Tasmansee und der Pazifik kurz davor sind sich zu berühren und eine neue Insel zu formen. So kommt es, dass immer Wasser in der Nähe ist. Die 135.000 Schiffchen, die in den Jachthäfen liegen, haben der Stadt ihren beständigsten Spitznamen verliehen: Stadt der Segel. Dichte Regenwälder Thermalquellen, menschenleere Strände, Weingüter und Naturschutzgebiete liegen nie mehr als eine Autostunde von den Hochhäusern der Innenstadt entfernt.";
    }
    
    document.getElementById("aucklandKlimaButton").onclick = function () {
        document.getElementById("aucklandParagraph").innerHTML = "Das Klima in Auckland ist mit gelegentlichem Frost im Winter und mit hoher Luftfeuchtigkeit im Sommer eher mild. In jedem Sommermonat regnet es durchschnittlich acht Tage aber das Wetter ist bekanntermaßen sehr unbeständig. Das ganze Jahr über ist es möglich vier Jahreszeiten an einem Tag zu erleben.";
    }
    
    document.getElementById("aucklandTodoButton").onclick = function () {
        document.getElementById("aucklandParagraph").innerHTML = "Volcanic Field - Auckland wurde auf 50 nur zum Teil erloschenen Vulkanen errichtet. Sie erheben sich eindrucksvoll im Stadtbild und sind eine Besteigung wert.<br>Karekare - Ein Strand wie von einem fernen Planeten, scheinbar endlos und eingerahmt von hohen Felsen. Der schwarze Sandstrand gehört zu den tödlichsten Gewässern Neuseelands.<br>Piha - The place to be für Aucklands Surfer-Szene. Der Quarzsand-Strand ist jedoch so gefährlich das er seine eigene Reality Show hat, Piha Rescue, das neuseeländische Baywatch.<br>Bungy Jumpen - Vom Sky Tower, dem höchsten Bauwerk der südlichen Hemisphäre.<br>Sky Walk - In 328 Metern Höhe den Sky Tower an der Fassade umrunden.";
    }
    
    document.getElementById("aucklandEssenButton").onclick = function () {
        document.getElementById("aucklandParagraph").innerHTML = "Raw-Power - Bunt, Vegan, Rock 'n' Roll und frische Zutaten haben diesen Restaurant schon viel Besuch vom internationalen Rockadel beschert.<br>Non Solo Pizza - Unter einem Peroni-Kronleuchter dürfen Gäste hier italienische Küche vom feinsten genießen.<br>SPQR - Wie der Name schon erraten lässt, entführt es einen ins alte Rom und wartet mit Efeuranken und schummriger Beleuchtung auf.<br>Murder Burger - Üpige Burger und der absolute Veganer-Alptraum, hier gibt es Fleisch und zwar viel.";
    }
}
window.onload = init;

//=================================================================================================
//  
//  E N D E
//  
//=================================================================================================