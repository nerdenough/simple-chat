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

  socket.emit('message', input.val());
  input.val('');
  input.focus();

  return false;
}

function receiveMessage(message) {
  console.log(message);
}
