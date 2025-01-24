function conf(){
  event.preventDefault();
  
  var nome = document.getElementById("nome").value
  var recebe = document.getElementById("recebe")
  
  recebe.value = ("Seu texto tem " + nome.replace(/\s+/g, '').length + " letras") 
  
  var recebei = document.getElementById("recebei")
  
  recebei.value = ("Seu texto tem " + nome.length + " letras") 
