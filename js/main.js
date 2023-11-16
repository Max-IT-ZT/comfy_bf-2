document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");

  sidebar.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
});
