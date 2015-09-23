var socket = null;

$(document).ready(function() {
  socket = io();

  var form = $('#simple-chat').find('#form');
  var input = form.find('#message');
  form.submit({ input: input }, sendMessage);

  socket.on('message', receiveMessage);

  input.focus();
});

function sendMessage(event) {
  var input = event.data.input;

  if (input.val() !== '') {
    socket.emit('message', input.val());
    input.val('');
    input.focus();
  }

  return false;
}

function receiveMessage(data) {
  // In the future, the received data will be an object
  var message = $('<div>', { class: 'message', text: data });
  var container = $('<div>', { class: 'container' });

  container.append(message);
  $('#messages').append(container);

  console.log(message);
}
