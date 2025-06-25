document.getElementById('whatsappBtn').addEventListener('click', function() {

  const phone = '527321143987'; // Número en formato internacional sin +

  const message = 'Hola, estoy interesad@ en hacer un pedido';

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');

});