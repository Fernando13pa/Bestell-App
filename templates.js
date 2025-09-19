function getMenu(myDishesMenu) {
 return   `     <div class="food">
                    <ul>
                        <li class="food-title">${myDishesMenu[0].name}</li>
                        <li class="food-text">${myDishesMenu[0].description}</li>
                        <li class="food-price">${myDishesMenu[0].price}€</li>
                    </ul>
                     <img src="imgs/plus (1).png" alt="" class="btn-add" onclick="add-food()">
                </div>
                <div class="food">
                    <ul>
                        <li class="food-title">${myDishesMenu[1].name}</li>
                        <li class="food-text">${myDishesMenu[1].description}</li>
                        <li class="food-price">${myDishesMenu[1].price}€</li>
                    </ul>
                     <img src="imgs/plus (1).png" alt="" class="btn-add" onclick="add-food()">
                </div>
                <div class="food">
                    <ul>
                        <li class="food-title">${myDishesMenu[2].name}</li>
                        <li class="food-text">${myDishesMenu[2].description}</li>
                        <li class="food-price">${myDishesMenu[2].price}€</li>
                    </ul>
                     <img src="imgs/plus (1).png" alt="" class="btn-add" onclick="add-food()">
                </div>
                <div class="food">
                    <ul>
                        <li class="food-title">${myDishesMenu[3].name}</li>
                        <li class="food-text">${myDishesMenu[3].description}</li>
                        <li class="food-price">${myDishesMenu[3].price}€</li>
                    </ul>
                     <img src="imgs/plus (1).png" alt="" class="btn-add" onclick="add-food()">
                </div>
    `;

}