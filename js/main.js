var map;

function initMap() {

  // Maps Personalizados
  // https://snazzymaps.com

  var gta = [{featureType:"all",elementType:"all",stylers:[{gamma:"1.00"},{weight:"1.00"}]},{featureType:"all",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"geometry",stylers:[{visibility:"on"},{color:"#38692d"}]},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{visibility:"on"},{color:"#989898"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#000000"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{visibility:"on"},{color:"#386c28"}]},{featureType:"poi.medical",elementType:"geometry",stylers:[{color:"#fcfcfc"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#788c40"}]},{featureType:"poi.place_of_worship",elementType:"geometry",stylers:[{invert_lightness:!0}]},{featureType:"poi.school",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi.sports_complex",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#ad0b0b"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#abdfec"}]}];
  var meuMarcador = 'imgs/icone.png';

  var endereco = {
    lat: -31.762102,
    lng: -52.342088
  }

  var meio = {
    lat: -31.763585,
    lng: -52.342892
  }

  var endereco2 = {
    lat: -31.764901,
    lng: -52.343998
  }

  var perto = 15;
  var longe = 3;

  map = new google.maps.Map(document.getElementById('map'), {
    center: meio,
    zoom: perto,
    styles: gta
  });

  var marker = new google.maps.Marker({
    position: endereco,
    icon: meuMarcador,
    map: map,
    title: "Ponto A"
  });

  var marker2 = new google.maps.Marker({
    position: endereco2,
    map: map,
    title: "Ponto B"
  });

    var conteudoJanela = "<div class='d-flex justify-content-between'>" +
    "<img class='maps-img' src='imgs/1.jpg' alt='foto avatar'>" +
    "<a href='https://www.globo.com' target='_blank'><h5>Olá, esta é a MooDev</h5></a>" +
  "</div>";

  var infowindow = new google.maps.InfoWindow({
    content: conteudoJanela
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}

$('#topo').on('click', function(){
  $('html, body').animate({
    scrollTop: $('body').offset().top
  }, 1500);
});

setInterval(function() {

  var zero = "";

  if(mes < 10){
    var zero = 0;
  }


  var hoje = new Date();
  var dia = hoje.getDate();
  var mes = hoje.getMonth();
  var ano = hoje.getFullYear();
  var hora = hoje.getHours();
  var minutos = hoje.getMinutes();
  var segundos = hoje.getSeconds();

  if(minutos >= 40){
    $('header').css('background-color', 'black');
  }

  $('#hoje').html(dia + "/" + zero + mes + "/" + ano + " Horas: " + hora + "h" + minutos + ":" + segundos );
}, 1000);









