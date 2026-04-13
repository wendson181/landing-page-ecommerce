function enviar() {
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem");

  if (email.trim() === "" || !email.includes("@")) {
    mensagem.innerText = "Digite um e-mail válido!";
    mensagem.style.color = "red";
    return;
  }

  mensagem.innerText = "Enviado com sucesso 🚀";
  mensagem.style.color = "green";
}
