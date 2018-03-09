$.ajax({
   method : 'GET',
   url : 'https://opentdb.com/api.php?amount=10&type=multiple',
   success : function(data) {
    console.log(data);
    const datos = data.results;
   console.log(datos);
   console.log(datos[0]);
   const uno = datos[0];
   for (let i = 0; i < datos.length; i++) {
       const element = datos[i];
       console.log(element);
       $('#hola').append(uno);   
   }
    
   },
  
}) ;

