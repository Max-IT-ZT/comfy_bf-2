document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".js-open-modal");
  const modal = document.getElementById("modal");
  const overlay = document.querySelector(".overlay");
  const closeBtns = document.querySelectorAll(".js-modal-close");

  openBtn.addEventListener("click", function () {
    modal.style.display = "block";
    overlay.style.display = "block";
  });

  closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      overlay.style.display = "none";
    });
  });

  overlay.addEventListener("click", function () {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  document.body.addEventListener("keyup", function (e) {
    const key = e.keyCode;
    if (key === 27) {
      modal.style.display = "none";
      overlay.style.display = "none";
    }
  });
});
