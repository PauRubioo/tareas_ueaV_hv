//BUSCAR LA RESPUESTA

fetch('json.json')
.then(Response=> Response.json())
.then(json=>{
     document.getElementById('ADN').innerHTML=json.frase1;
     document.getElementById('id').innerHTML=json.frase2;
     document.getElementById('cantidad1').innerHTML=json.cantidad1;
    console.log(json)
})
