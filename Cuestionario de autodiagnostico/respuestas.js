function resultado() {
    var r="";

    // 1a pregunta
    if (document.getElementById('p12').checked==true) {r+=" y con una que tengan mal, saldría una respuesta que indica: Aún no estás preparado, lo invitamos a implementar la norma ISO/IEC 17020 en su totalidad y podrá afrontar la evaluación"}
    // 2a pregunta
    if (document.getElementById('p22').checked==true) {r+=" ● Asegúrate que para cada ámbito de inspección para el cual solicitas acreditación se hayan definido los métodos y procedimientos de inspección.  Consulta las regulaciones que aplica para tu actividad de inspección donde se definen los requisitos y normas de referencia.  Si tu actividad es voluntaria consulta la normatividad internacional y/o recuerda que  la norma ISO/IEC 17020:2012 considera que cuando el organismo de inspección tiene que utilizar métodos o procedimientos de inspección que no están normalizados, dichos métodos y procedimientos deben ser apropiados y estar completamente documentados <br><br>"}
    // 3a pregunta
    if (document.getElementById('p32').checked==true) {r+=" ● Recuerda si la actividad de inspección se desarrolla en tus instalaciones esta debe ser adecuada para desarrollar las actividades de inspección.  Los equipos que utilices deben permitir que la actividad de inspección se realice correctamente y deben ser suficiente para que puedas desarrollar las actividades inclusive por ejemplo en los casos en los que tengas que enviar un equipo a calibrar <br><br>"}
    // 4a pregunta
    if (document.getElementById('p42').checked==true) {r+=" ● Recuerda que si la actividad de inspección requiere de equipos de medición, estos deben permitir que la actividad de inspección se realice correctamente y deben ser trazables a patrones trazables a patrones nacionales o internacionales de medición <br><br>"}
    //todo correcto
    if (r==""){r+="Felicitacion, tu autodiagnostico indica que puedes proceder con el proceso de acreditacion."}

    document.getElementById("mensajeModal").innerHTML = r;


    if(r=="Felicitacion, tu autodiagnostico indica que puedes proceder con el proceso de acreditacion.") {
        document.getElementById("img").src = "imagenes/aprovado.png";

    } else {
        document.getElementById("img").src = "imagenes/noAprovado.png";}
}

function validacion(){
    let warning=[]
    var bandera=false

    if(document.getElementById('p11').checked==false && document.getElementById('p12').checked==false) {
        warning.push("1")
        bandera=true
    }
    if(document.getElementById('p21').checked==false && document.getElementById('p22').checked==false) {
        warning.push("2")
        bandera=true
    }
    if(document.getElementById('p31').checked==false && document.getElementById('p32').checked==false) {
        warning.push("3")
        bandera=true
    }
    if(document.getElementById('p41').checked==false && document.getElementById('p42').checked==false) {
        warning.push("4")
        bandera=true
    }
    if(document.getElementById('p51').checked==false && document.getElementById('p52').checked==false) {
        warning.push("5")
        bandera=true
    }
    if(document.getElementById('p61').checked==false && document.getElementById('p62').checked==false) {
        warning.push("6")
        bandera=true
    }
    if(document.getElementById('p71').checked==false && document.getElementById('p72').checked==false) {
        warning.push("7")
        bandera=true
    }
    if(document.getElementById('p81').checked==false && document.getElementById('p82').checked==false) {
        warning.push("8")
        bandera=true
    }
    if(document.getElementById('p91').checked==false && document.getElementById('p92').checked==false) {
        warning.push("9")
        bandera=true
    }
    if(document.getElementById('p101').checked==false && document.getElementById('p102').checked==false) {
        warning.push("10")
        bandera=true
    }

    if(bandera){
        document.getElementById("advertenciaModal").innerHTML = "no has respondido la pregunta numero " + warning
        document.getElementById("mensajeModal").innerHTML = "Hay preguntas sin responder"
        document.getElementById("img").src = "imagenes/advertencia.png";
    }else{
        p=""
        if(document.getElementById('p12').checked==true||document.getElementById('p22').checked==true||document.getElementById('p32').checked==true||document.getElementById('p42').checked==true||document.getElementById('p52').checked==true||document.getElementById('p62').checked==true||document.getElementById('p72').checked==true||document.getElementById('p82').checked==true||document.getElementById('p92').checked==true||document.getElementById('p102').checked==true){
            p="Aún no estás preparado, lo invitamos a implementar la norma ISO/IEC 17020 en su totalidad y podrá afrontar la evaluación"
        }else{
            p="Felicitacion, tu autodiagnostico indica que puedes proceder con el proceso de acreditacion."
        }

        if(p=="Felicitacion, tu autodiagnostico indica que puedes proceder con el proceso de acreditacion.") {
            document.getElementById("img").src = "imagenes/aprovado.png";

        } else {
            document.getElementById("img").src = "imagenes/noAprovado.png";}

            document.getElementById("mensajeModal").innerHTML = p;
    }

    

}

function resultado2(){
    p=""
    if(document.getElementById('p12').checked==true||document.getElementById('p22').checked==true||document.getElementById('p32').checked==true||document.getElementById('p42').checked==true||document.getElementById('p52').checked==true||document.getElementById('p62').checked==true||document.getElementById('p72').checked==true||document.getElementById('p82').checked==true||document.getElementById('p92').checked==true||document.getElementById('p102').checked==true){
        p="Aún no estás preparado, lo invitamos a implementar la norma ISO/IEC 17020 en su totalidad y podrá afrontar la evaluación"
    }else{
        p="Felicitacion, tu autodiagnostico indica que puedes proceder con el proceso de acreditacion."
    }

    if(p=="Felicitacion, tu autodiagnostico indica que puedes proceder con el proceso de acreditacion.") {
        document.getElementById("img").src = "imagenes/aprovado.png";

    } else {
        document.getElementById("img").src = "imagenes/noAprovado.png";}

        document.getElementById("mensajeModal").innerHTML = p;
}
