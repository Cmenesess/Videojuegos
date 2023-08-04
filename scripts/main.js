let listElements = document.querySelectorAll('.list_click');
listElements.forEach(listElement => {
    listElement.addEventListener('click',()=>{

        let height = 0;
        let menu = listElement.nextElementSibling;
        let computedStyle = window.getComputedStyle(menu);

        if (computedStyle.display === "none") {
            menu.style.display = "block";
            menu.style.height = `${menu.scrollHeight}px`; // Ajustar la altura después de mostrar
        } else {
            menu.style.display = "none";
            menu.style.height = "0"; // Establecer altura a 0 cuando está oculto
        }
    })
});