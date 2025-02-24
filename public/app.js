const websocket = new WebSocket("/");

websocket.onopen = (event) => {
  websocket.send("Hello");
};

websocket.addEventListener("message", (event) => {
  const para = document.createElement("p");
  para.textContent = event.data;
  text.appendChild(para);
});

const sendButton = document.getElementById("send");
const text = document.getElementById("text");
const message = document.getElementById("message");

sendButton.addEventListener("click", function () {
  const messageToSend = message.value;
  websocket.send(messageToSend);
});
