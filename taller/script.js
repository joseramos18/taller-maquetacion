/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("d-none");
    $btnMenu.lastElementChild.classList.toggle("d-none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu a")) {
      $btnMenu.firstElementChild.classList.toggle("d-none");
      $btnMenu.lastElementChild.classList.toggle("d-none");
      $menu.classList.toggle("is-active");
    }
  });
})(document);

/* ********** ContactForm ********** */

((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.toggle("d-none");
    fetch("https://formsubmit.co/ajax/joseantonyr18@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.toggle("d-none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
