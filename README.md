# Memo-game
my first memo game

# Instrucciones

EN CASO DE TENER 3 IMAGENES:\
1.Cambiar el nombre de tus imagenes a elephant.jpg, jirafa.jpg y leon.jpg\
\
2.Reemplazar las imagenes en la carpeta img\

ENCASO DE TENER MAS DE 3 IMAGENES:\
1.Insertar tus imagenes en la carpeta img (dejar solamente la imgen descarga.png)\
\
2.Agregar en el index.html "<img src:"img/descargar.png" alt="" data-name="NOMBRE DE TU IMAGEN" name="NOMBRE DE TU IMAGEN" class="img"> (arreglar el img)" por cada imagen que tengas\
\
3.Agregar en el main.js en la funcion verificarIMG: \
if (event.target.name === "NOMBRE DE TU IMAGEN") {\
		event.target.setAttribute("src", "img/NOMBRE DE TU IMAGEN.jpg")\
	}\
  por cada imagen que tengas\
\
4.Modificar el contador de victoria:\  
setTimeout(()=>{\
		if (sCounter >= CANTIDAD DE IMAGENES QUE TENGAS) {\
		alert("You win")\
		location.reload();\
    \
5.Modificar el contador de fallos (Depende de la dificultad de tu ova):\
else if (fCounter >= NUMEROS DE FALLOS QUE QUIERAS PONERLE) {\
		alert("you loose")\
		location.reload();\
	}.\
  
  POR ULTIMO LINKEARLO EN TU OVA COMO SI FUERA UN HTML.
