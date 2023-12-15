document.addEventListener("DOMContentLoaded", function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', function() {
      dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function() {
      dropdownContent.style.display = 'none';
    });
  });
});