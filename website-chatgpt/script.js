function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "180px") {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    var menu = document.getElementById("side-menu");
    menu.style.width = "180px";
    document.addEventListener("click", closeMenuOnClickOutside);
}

function closeMenu() {
    var menu = document.getElementById("side-menu");
    menu.style.width = "0";
    document.removeEventListener("click", closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
    var menu = document.getElementById("side-menu");
    var menuIcon = document.querySelector(".menu-icon");

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        closeMenu();
    }
}

// Close menu when navigation link is clicked
document.querySelectorAll('.side-menu a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        closeMenu();
    });
});
