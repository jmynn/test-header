const OBJECTS = { 
    MENU: '#burger-btn',
    MENU_BODY: '.body-header__menu',
    COLUMN_HEADER: '.column-header__body'
}
document.querySelector(OBJECTS.MENU).addEventListener("click", () => {
    document.body.classList.toggle("active")
    document.querySelector(OBJECTS.MENU).classList.toggle('active')
    document.querySelector(OBJECTS.MENU_BODY).classList.toggle('active')
})
