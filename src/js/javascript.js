function changeLoading() 
{
    $('body').append(
      '<div id="overlay">' + 
      '<button id="load">Carregando <span class="loading"></span></button>'+
      '</div>'
  );
  console.log('teste');
  setTimeout(function(){
    $('#overlay').remove();
  }, 1000); //2 seconds

}