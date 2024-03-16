function changeLoading() 
{
    $('body').append(
      '<div id="overlay">' + 
      '<button id="load">Carregando <span class="loading"></span></button>'+
      '</div>'
  );
  setTimeout(function(){
    $('#overlay').remove();
  }, 1000); //2 seconds

}

//Somente números
function NumbersOnly(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
      ((evt.which) ? evt.which : 0));
  if (charCode > 31 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)) {
      return true;
  }
  $('#validationIcon').empty().append('Somente números!');
  $('#validationIcon').css('color','OrangeRed');
  $('#validationText').empty().append('Somente número!');
  $('#validationText').css('color','OrangeRed');
  return false;
}


//Somente letras
function LettersOnly(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
      ((evt.which) ? evt.which : 0));
  if (charCode > 31 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)) {
      $('#validationIcon').empty().append('cancel');
      $('#validationIcon').css('color','OrangeRed');
      $('#validationText').empty().append('Somente letras!');
      $('#validationText').css('color','OrangeRed');
      return false;
  }
  return true;
}

//Somente a primeira letra maiuscula
function OnlyFirstCapitalLetter(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
  if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
  }
    let value = document.getElementById("categoryName").value;
    let valueArray = value.split();
    if(valueArray.length > 0){
      for (let i = 0; i < valueArray.length; i++) {
        valueArray[i] = valueArray[i][0].toUpperCase() + valueArray[i].substr(1);
      }
    }
    document.getElementById("categoryName").value = valueArray[0];
  return true;
}

// Categoria
function ValidarNomeCategoria(){
  let value = document.getElementById("categoryName").value;
  let valueClean = value.trim();
  let valueLength = valueClean.length;
  if(valueLength > 0){
    $('#validationIcon').empty().append('done');
    $('#validationIcon').css('color','GreenYellow');
    $('#validationText').empty().append('Ok!');
    $('#validationText').css('color','GreenYellow');
  }
  else{
    $('#validationIcon').empty().append('cancel');
    $('#validationIcon').css('color','OrangeRed');
    $('#validationText').empty().append('Nome da categoria está vazio!');
    $('#validationText').css('color','OrangeRed');
  }
}