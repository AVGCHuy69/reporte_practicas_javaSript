import { saludo } from "./saludo.js";
import {despedida} from "./despedida.js";
import mensaje from "./mensaje.js";
import {suma} from "./math.js";
import { resta } from "./math.js";
import { multi } from "./math.js";
import { division } from "./math.js";
import { frutas } from "./texto.js";
import { Area } from "./area.js";

saludo();
despedida();
console.log(mensaje);
console.log(suma(2,3));
console.log(resta(5,3));
console.log(division(10,2));
console.log(multi(4*5));
console.log(texto());
console.log(Area(5,4));