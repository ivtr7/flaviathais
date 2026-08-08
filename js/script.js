/* ==============================
   FAQ - ACCORDION
================================ */
document.addEventListener("DOMContentLoaded", function () {
  var itens = document.querySelectorAll(".faq-item");

  itens.forEach(function (item) {
    var botao = item.querySelector(".faq-pergunta");
    if (!botao) return;

    botao.addEventListener("click", function () {
      var jaAberto = item.classList.contains("aberto");

      /* Somente uma pergunta aberta por vez */
      itens.forEach(function (outro) {
        outro.classList.remove("aberto");
        var b = outro.querySelector(".faq-pergunta");
        if (b) b.setAttribute("aria-expanded", "false");
      });

      if (!jaAberto) {
        item.classList.add("aberto");
        botao.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ==============================
     SCROLL SUAVE NOS CTAs
  ================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var alvo = document.querySelector(link.getAttribute("href"));
      if (!alvo) return;
      e.preventDefault();
      alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ==============================
     FADE LEVE AO ROLAR
  ================================ */
  var alvos = document.querySelectorAll(".fade");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            obs.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    alvos.forEach(function (a) {
      obs.observe(a);
    });
  } else {
    alvos.forEach(function (a) {
      a.classList.add("visivel");
    });
  }
});