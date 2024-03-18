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
  $('#validationText').css('font-size','11px');
  $('#validationText').empty().append('Somente número!');
  $('#validationText').css('color','OrangeRed');
  return false;
}


//Somente letras
function LettersOnly(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
      ((evt.which) ? evt.which : 0));
  if (charCode > 32 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122) && charCode > 252 ) {
      $('#validationIcon').empty().append('cancel');
      $('#validationIcon').css('color','OrangeRed');
      $('#validationText').css('font-size','11px');
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
  if (charCode > 32 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122) && charCode > 252 ) {
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
function ValidateCategoryName(){
  let value = document.getElementById("categoryName").value;
  let valueClean = value.trim();
  let valueLength = valueClean.length;
  if(valueLength > 0){
    $('#validationIcon').empty().append('done');
    $('#validationIcon').css('color','GreenYellow');
  }
  else{
    $('#validationIcon').empty().append('cancel');
    $('#validationIcon').css('color','OrangeRed');
    $('#validationText').css('font-size','11px');
    $('#validationText').empty().append('Nome da categoria está vazio!');
    $('#validationText').css('color','OrangeRed');
  }
}

// Cliente
function ValidateBuyerName(){
  let value = document.getElementById("buyerName").value;
  let valueClean = value.trim();
  let valueLength = valueClean.length;
  if(valueLength > 0){
    $('#validationIconBuyerName').empty().append('done');
    $('#validationIconBuyerName').css('color','GreenYellow');
  }
  else{
    $('#validationIconBuyerName').empty().append('cancel');
    $('#validationIconBuyerName').css('color','OrangeRed');
    $('#validationTextBuyerName').css('font-size','11px');
    $('#validationTextBuyerName').empty().append('Nome do cliente está vazio!');
    $('#validationTextBuyerName').css('color','OrangeRed');
  }
}

function LettersOnlyBuyerName(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
      ((evt.which) ? evt.which : 0));
  if (charCode > 32 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122) && charCode > 252 ) {
      $('#validationIconBuyerName').empty().append('cancel');
      $('#validationIconBuyerName').css('color','OrangeRed');
      $('#validationTextBuyerName').css('font-size','11px');
      $('#validationTextBuyerName').empty().append('Somente letras!');
      $('#validationTextBuyerName').css('color','OrangeRed');
      return false;
  }
  return true;
}

function OnlyFirstCapitalLetterBuyerName(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
  if (charCode > 32 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122) && charCode > 252 ) {
      return false;
  }
    let value = document.getElementById("buyerName").value;
    let valueArray = value.split();
    if(valueArray.length > 0){
      for (let i = 0; i < valueArray.length; i++) {
        valueArray[i] = valueArray[i][0].toUpperCase() + valueArray[i].substr(1);
      }
    }
    document.getElementById("buyerName").value = valueArray[0];
  return true;
}

function ValidateBuyerPhone(){
  let value = document.getElementById("buyerPhone").value;
  let valueClean = value.trim();
  let valueLength = valueClean.length;
  if(valueLength > 0){
    $('#validationIconBuyerPhone').empty().append('done');
    $('#validationIconBuyerPhone').css('color','GreenYellow');
  }
  else{
    $('#validationIconBuyerPhone').empty().append('cancel');
    $('#validationIconBuyerPhone').css('color','OrangeRed');
    $('#validationTextBuyerPhone').css('font-size','11px');
    $('#validationTextBuyerPhone').empty().append('Telefone do cliente está vazio!');
    $('#validationTextBuyerPhone').css('color','OrangeRed');
  }
}

function NumbersOnlyBuyerPhone(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
      ((evt.which) ? evt.which : 0));
  if (charCode > 31 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)) {
      return true;
  }
  $('#validationIconBuyerPhone').empty().append('Somente números!');
  $('#validationIconBuyerPhone').css('color','OrangeRed');
  $('#validationTextBuyerPhone').css('font-size','11px');
  $('#validationTextBuyerPhone').empty().append('Somente número!');
  $('#validationTextBuyerPhone').css('color','OrangeRed');
  return false;
}

function ValidateBuyerAddress(){
  let value = document.getElementById("buyerAddress").value;
  let valueClean = value.trim();
  let valueLength = valueClean.length;
  if(valueLength > 0){
    $('#validationIconBuyerAddress').empty().append('done');
    $('#validationIconBuyerAddress').css('color','GreenYellow');
  }
  else{
    $('#validationIconBuyerAddress').empty().append('cancel');
    $('#validationIconBuyerAddress').css('color','OrangeRed');
    $('#validationTextBuyerAddress').css('font-size','11px');
    $('#validationTextBuyerAddress').empty().append('Endereço do cliente está vazio!');
    $('#validationTextBuyerAddress').css('color','OrangeRed');
  }
}

function LettersOnlyBuyerAddress(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
      ((evt.which) ? evt.which : 0));
  if (charCode > 32 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122) && charCode > 252 ) {
      $('#validationIconBuyerAddress').empty().append('cancel');
      $('#validationIconBuyerAddress').css('color','OrangeRed');
      $('#validationTextBuyerAddress').css('margin-top','-2vh');
      $('#validationTextBuyerAddress').css('font-size','11px');
      $('#validationTextBuyerAddress').empty().append('Somente letras!');
      $('#validationTextBuyerAddress').css('color','OrangeRed');
      return false;
  }
  return true;
}

function OnlyFirstCapitalLetterBuyerAddress(evt) {
  evt = (evt) ? evt : event;
  var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
  if (charCode > 32 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122) && charCode > 252 ) {
      return false;
  }
    let value = document.getElementById("buyerAddress").value;
    let valueArray = value.split();
    if(valueArray.length > 0){
      for (let i = 0; i < valueArray.length; i++) {
        valueArray[i] = valueArray[i][0].toUpperCase() + valueArray[i].substr(1);
      }
    }
    document.getElementById("buyerAddress").value = valueArray[0];
  return true;
}
