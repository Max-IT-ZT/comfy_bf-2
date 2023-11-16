document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");

  sidebar.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    if (!isClickInsideSidebar && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    }
  });
});
