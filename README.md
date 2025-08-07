***PUNTO 5***

**Análisis final (teórico)**

*¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?*
Una de las diferencias más claras que se puede observar es la forma de escribir el codigo, cuando lo hacemos con la 
forma del Class, podemos escribir todo junto dentro  de la clase y esto nos permite que sea más claro para leerlo
y mantenrlo organizado. En cuanto al prototype utilizamos una funcion y luego agregamos los metodos. 

*¿Cuáles son las ventajas de usar getters y setters?*
Nos sirven para poder controlar los accesos a las propiedades de los objetos. Como por ejemplo: 
Validar o modificar lso datos para guardarlos posteriormente o devolverlos.

*¿Qué problemas pueden surgir al modificar prototipos nativos como String?*
Estos casos son solo recomendables utilizarlo en ejercicios o en casos que estén muy controlados, de otra
forma esto puede recaer en errores de dificil detección o que otras personas no entiendan el código si
no están familiarizados. Es decir que en proyecto reales no deberiamos utilizarlo.

**Teniendo en cuenta un objeto personPrototype que contiene un método greet,** 
*¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?*
Ambas nos sirven para agregar métodos a los objetos, pero tienen formas distintas de hacerlo. 
Con el primero la asignacion es más controlada pero puede ser repetitivo si hay varios métodos, en cuanto
al object.assing, podríamos copiar muchos metodos de una sola vez, esto es mucho más practico. 
