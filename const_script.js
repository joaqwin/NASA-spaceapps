let info_satelites= [];
const decadas_url = "https://joaqwin.github.io/json/decadas.json";
const satelite_url = "https://joaqwin.github.io/json/sat/satelite/";
const sat_url = "https://joaqwin.github.io/json/sat/";

function showSatelites(array){
      let htmlContentToAppend="";
      for (i=0; i<array.length; i++){
          htmlContentToAppend+= `
          <li><div class ="estrella" onclick="localStorage.setItem('idConstelacion', '${array[i].id}'); localStorage.setItem('name', '${array[i].name}'); window.location.href='product-info.html'">${array[i].name}</div></li>
          `
        }
    document.getElementById('lista').innerHTML= htmlContentToAppend;
}
let decadaID = localStorage.getItem('decadaID');

let getJSONData = function(url){
  let result = {};

  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }else{
      throw Error(response.statusText);
    }
  })
  .then(function(response) {
        result.status = 'ok';
        result.data = response;
        return result;
  })
  .catch(function(error) {
      result.status = 'error';
      result.data = error;
      return result;
  });
}
    let anio = localStorage.getItem('anio');
document.addEventListener('DOMContentLoaded', function(e){
    console.log('se cargó el dom');
    getJSONData(sat_url + decadaID + '.json').then(function (resultObj) {
        if (resultObj.status === "ok") {
            decada_array = resultObj.data
            console.log(decada_array.satelites);
            showSatelites(decada_array.satelites);
        }
    });
  })