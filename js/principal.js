/* Para un espectáculo de circo se tienen 3 tipos de entrada: niños (hasta 12 años), adolescentes
*(hasta 18) y adultos (mayores de 18, respectivamente), el precio de la entrada general es de
*15$. Por cada espectador se tiene: nombre, edad y sexo. Además, se sabe que si el
*espectador es niño o adolescente obtiene un descuento del 10%. Se requiere mostrar: a)
*Precio Cancelado por cada espectador, b) Promedio de las Ventas hechas a espectadores
*adolescentes, c) Entre niños y adolescentes cuál asistió más al circo, b) Porcentaje que
*representa la cantidad de niños que asistieron al circo con respecto al total de espectadores
*procesados.
*El circo suministra la siguiente información demostrativa, para 4 espectadores: (nombre,
*edad, sexo) (Ana, 8, F) (Luis, 15, M) (Valeria, 12, F) (Fabian, 21, M), según lo cual la salida
*requerida presenta el siguiente formato:
*El espectador Ana debe cancelar 13.5$
*El espectador Luis debe cancelar 13.5$
*El espectador Valeria debe cancelar 13.5$
*El espectador Fabián debe cancelar 15.0$
*Promedio de las Ventas hechas a espectadores adolescentes 13.5
*Entre niños y adolescentes el espectador que asistió más al circo fue Niños
*Porcentaje que representa la cantidad de niños que asistieron al circo 50% */

import Cl_suscriptor from "./espectador.js";
import Cl_circo from "./circo.js";

let circo = new Cl_circo(),
suscriptor1 = new Cl_suscriptor("Luis", 15,"M"),
suscriptor2 = new Cl_suscriptor("Ana", 8,"F"),
suscriptor3 = new Cl_suscriptor("Valeria",12,"F"),
suscriptor4 = new Cl_suscriptor("Fabian", 21,"M");

circo.procesarEspectador(suscriptor1);
circo.procesarEspectador(suscriptor2);
circo.procesarEspectador(suscriptor3);
circo.procesarEspectador(suscriptor4);

let salida = document.getElementById("salida");
salida.innerHTML = "RESULTADOS",
salida.innerHTML += `<br> El espectador ${suscriptor1.nombre} debe cancelar ${suscriptor1.pagoEspectador()}$`;
salida.innerHTML += `<br> El espectador ${suscriptor2.nombre} debe cancelar ${suscriptor2.pagoEspectador()}$`;
salida.innerHTML += `<br> El espectador ${suscriptor3.nombre} debe cancelar ${suscriptor3.pagoEspectador()}$`;
salida.innerHTML += `<br> El espectador ${suscriptor4.nombre} debe cancelar ${suscriptor4.pagoEspectador()}$`;
salida.innerHTML += `<br> Promedio de las Ventas hechas a espectadores adolescentes ${circo.promedioVentas()}`;
salida.innerHTML += `<br> Entre NIños y adolescentes el espectador que asistió más al circo fue ${circo.maximoAsistidor()}`;
salida.innerHTML += `<br> Porcentaje que representa la cantidad de espectadores que asistieron al circo ${circo.porcentajeAsistentesNinos()}%`;

