function mostrar() {
    document.getElementById('caja').style.display = 'block';
    document.getElementById('respuesta').style.display = 'block';
    document.getElementById('formu').style.display = 'none';
    document.getElementById('vuelta').style.display = 'block';
}


function escribe() {
    escribir = document.getElementById("respuesta")
    miNombre = "<h3>¡Hola " + document.rellenar.nombre.value + "!</h3>"
    miEdad = "<h3> De acuerdo a tu edad de " + document.rellenar.edad.value + " a&ntilde;os"
    miSexo = " y para tu sexo " + document.rellenar.sexo.value + ", tu posici�n en la pir&aacute;mide es la siguiente:</h3>"
    escribir.innerHTML = miNombre + miEdad + miSexo

}

function fondo() {
    var Edad = parseInt(document.getElementById('edad').value);


    if (Edad >= 0 && Edad <= 9) {
        document.getElementById('caja').style.backgroundImage = "url('./imagenes/FONDOPOBLA1C.jpg')";
    }
    if (Edad >= 10 && Edad <= 19) {
        document.getElementById('caja').style.backgroundImage = "url('./imagenes/FONDOPOBLA2C.jpg')";
    }
    if (Edad >= 20 && Edad <= 29) {
        document.getElementById('caja').style.backgroundImage = "url('./imagenes/FONDOPOBLA3C.jpg')";
    }
    if (Edad >= 30 && Edad <= 39) {
        document.getElementById('caja').style.backgroundImage = "url('./imagenes/FONDOPOBLA4C.jpg')";
    }
    if (Edad >= 40 && Edad <= 49) {
        document.getElementById('caja').style.backgroundImage = "url('./imagenes/FONDOPOBLA5C.jpg')";
    }
    if (Edad >= 50 && Edad <= 59) {
        document.getElementById('caja').style.backgroundImage = "url('./imagenes/FONDOPOBLA6C.jpg')";
    }
    if (Edad >= 60 && Edad <= 69) {
        document.getElementById('caja').style.backgroundImage = "url('./imagenes/FONDOPOBLA7C.jpg')";
    }
    if (Edad >= 70 && Edad <= 79) {
        document.getElementById('caja').style.backgroundImage = "url('./imagenes/FONDOPOBLA8C.jpg')";
    }
    if (Edad >= 80 && Edad <= 89) {
        document.getElementById('caja').style.backgroundImage = "url('./imagenes/FONDOPOBLA9C.jpg')";
    }
    if (Edad >= 90 && Edad <= 99) {
        document.getElementById('caja').style.backgroundImage = "url('./imagenes/FONDOPOBLA10C.jpg')";
    }
}

function showStepOne() {
    document.getElementById('stepOne').style.display = 'block';
    document.getElementById('stepTwo').style.display = 'none';
}

function showStepTwo() {
    document.getElementById('stepTwo').style.display = 'block';
    document.getElementById('stepOne').style.display = 'none';
}

module.exports = {
    __html: `<div>
    <div id="stepOne">
        <div>
            <a href="ipc.html">
                <img src="../images/ipc/jugar-ipc.png" border="0"/>
            </a>
        </div>
        <div class="jugar-poblacion">
            <a onclick="showStepTwo()">
                <img src="../../images/ipc/jugar-poblacion.png" border="0" align="bottom"/>
            </a>
        </div>
    </div>
    <div id="stepTwo">
        <div id="caja">
            <div id="respuesta">
            </div>
        </div>
        <div id="vuelta">
            <a href="index.html"><img src="imagenes/finalizar.png" border="0"></a>
        </div>
        <div id="formu">
            <p>La pir&aacute;mide de poblaci&oacute;n muestra la cantidad de personas que pertenece a cada rango de edad
                seg&uacute;n
                sexo en la Argentina. </p>

            <p>Ingres&aacute tus datos, mir&aacute; en qu&eacute; posici&oacute;n de la pir&aacute;mide est&aacute;s y
                conoc&eacute;
                cu&aacute;ntas personas de tu edad y sexo hay en la poblaci&oacute;n total.</p>
            <br>
            <form name="rellenar" action="#">
                <h2>Escribe tus datos:</h2>
                <table>
                    <tr>
                        <td><p> tu nombre : </p></td>
                        <td><input name="nombre" type="text"/></td>
                    </tr>
                    <tr>
                        <td><p> tu edad : </p></td>
                        <td><input name="edad" id="edad" type="text"/></td>
                    </tr>
                    <tr>
                        <td><p> tu sexo : </p></td>
                        <td><input name="sexo" id="sexo" type="text" onblur="fondo();"/></td>
                    </tr>
                </table>

                <br>
                <a><button class="jugar" OnClick="escribe();mostrar();"/></a>
            </form>
        </div>
    </div>
    <script type="text/javascript">
       
        
        showStepOne();
    </script>
</div>`
};
