const btn = document.getElementById("btn-nav-menu");
const dialog = document.getElementById("dialog");

btn.addEventListener("click", () => {
    dialog.showModal();
});
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});