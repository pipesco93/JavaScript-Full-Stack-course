Proceso NodeJS
	Escribir "Abrir VS Code"
	Escribir "Abrir carpeta"
	Escribir "Existe la carpeta?"
	Leer existeCarpeta
	Si existeCarpe = "S�" Entonces
		Escribir "Navegar a la carpeta"
	SiNo
		Escribir "Clic derecho, crear carpeta"
	FinSi
	Escribir "Seleccionar directorio"
	Escribir "Existe el archivo?"
	Leer existeArchivo
	Si existeArchivo = "S�" Entonces
		Escribir "Seleccionar archivo"
	SiNo
		Escribir "Crear archivo, .js al final del nombre y seleccionar"
	FinSi
	Escribir "Ingresar c�digo"
	Escribir "Guardar el archivo"
	Escribir "Abrir la terminal (terminal + nueva terminal)"
	Escribir "C�mo se llama el archivo?"
	Leer nombreArchivo
	Escribir "Ejecute el comando: node " + nombreArchivo
	Escribir "Enter"
	Escribir "Fin del programa"
FinProceso
