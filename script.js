function init() {
    renderMenu();
}



function renderMenu() {
    let contentRef = document.getElementById('menu-list-content');
    let myDishesMenu = myDishes;
    

    contentRef.innerHTML += getMenu(myDishesMenu);
}