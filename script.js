function init() {
    renderMenu();
}



function renderMenu() {
    let contentRef = document.getElementById('dishes-list-content');
    let myDishesMenu = myDishes;
    

    contentRef.innerHTML += getMenu(myDishesMenu);
}