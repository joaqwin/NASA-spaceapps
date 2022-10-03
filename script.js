info_satelites=[];
info_nasa=[];
fetch('https://images-api.nasa.gov/search?q=' + localStorage.getItem('idConstelacion'))
  .then(response => response.json())
  .then(data => 
    info_nasa =data
  );

let url='https://images-api.nasa.gov/search?q=' + localStorage.getItem('idConstelacion')



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


