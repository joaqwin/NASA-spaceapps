const decadas_url = "https://joaqwin.github.io/json/decadas.json";
const satelite_url = "https://joaqwin.github.io/json/sat/satelite/";
const sat_url = "https://joaqwin.github.io/json/sat/";

let roberto = "";
let mission_url = 'https://images-api.nasa.gov/search?q=' + localStorage.getItem('name')
let sat_id = localStorage.getItem('idConstelacion');
let sat_info = [];
let imagenes = [];
let imagenes_fetch = [];
let imagenesverdad = [];
let img = [];
let si = ['titulo', 'hola']

let getJSONData = function (url) {
  let result = {};

  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      return result;
    });
}

function showTitulo(obj) {

  let htmlContentToAppend = `
        <h1> ${obj.name} </h1>
        <div class="info">
            <p> ${obj.info}</p>
        </div>
        `
  document.getElementById(`titulo`).innerHTML = htmlContentToAppend;
}

let agrega = "";

function showNoticias (obj) {
  let htmlcontentToAppend1 = "";
  let iter;
  for (i=0; i<=3; i++){
    iter = i;
    getJSONData(obj[iter].href).then(function (resultObj) {
      if (resultObj.status === "ok") {
        img = resultObj;
        htmlcontentToAppend1 = `
          <img src="${img.data[0]}"></img>`
      }
      agrega = htmlcontentToAppend1;
      document.getElementById("hola").innerHTML += htmlcontentToAppend1;
    });
    

  }

}

document.addEventListener('DOMContentLoaded', function (e) {

  console.log('se cargó el dom');

  getJSONData(satelite_url + sat_id + '.json').then(function (resultObj) {
      if (resultObj.status === "ok") {
        sat_info = resultObj.data;
        showTitulo(sat_info);
    }
  });

  getJSONData(mission_url).then(function (resultObj) {
      if (resultObj.status === "ok") {
        imagenes = resultObj.data; 
        showNoticias(imagenes.collection.items);
      }
  });

});




