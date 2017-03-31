var contador = 0;

function crearTarea(event){
  event.preventDefault();
  var cajaDeTexto = document.getElementById("tarea");
  var texto = cajaDeTexto.value;


  var articulo = document.createElement("article");
  var entrada = document.createElement("input");
  var etiqueta = document.createElement("label");
  var boton = document.createElement("button");

  var id = "check" + contador;

  entrada.type = "checkbox";
  entrada.id = id;
  entrada.onclick = tachar;

  etiqueta.setAttribute("for", id);
  etiqueta.innerText = texto;

  boton.type = "button";
  boton.innerText = "Eliminar";
  boton.onclick = eliminar;


  articulo.appendChild(entrada);
  articulo.appendChild(etiqueta);
  articulo.appendChild(boton);

  document.getElementById("tareas").appendChild(articulo);
  contador++;

}
function tachar(evevt){
  var checked = this.checked;
  var texto = this.nextSibling;
  if(checked){
    texto.style.textDecoration = "line-trhough"
  } else {
    texto.style.textDecoration = null
  }
};














s
