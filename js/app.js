{/*<article class="card_container" onclick="handle_click()">
            <img src="" alt="">
            <h3></h3>
            <p></p>
            <h5></h5>
        </article>
*/}
function handle_click(item_json) {

    Cookies.set("selected_item", item_json);

}

function add_menu_item(item) {
// Selecting a parent container for the article
    var parent_containter = document.getElementById("menu_container");
// Setting up a variable and assigning a tag to it
    var menu_card = document.createElement("article");
// Assgning a class to new element
    menu_card.classList.add("card_container");
    var item_json = JSON.stringify(item);
    menu_card.setAttribute('onclick', `handle_click('${item_json}')`);
    //menu_card['onclick'] = handle_click;
 
    var card_image = document.createElement("img");
    card_image.src = item.image_src;

    var card_title = document.createElement("h3");
    card_title.innerText = item.name;

    var card_description = document.createElement('p');
    card_description.innerText = item.description;

    var card_price = document.createElement('h5');
    card_price.innerText = item.price;

    menu_card.appendChild(card_image);
    menu_card.appendChild(card_title);
    menu_card.appendChild(card_description);
    menu_card.appendChild(card_price);
    parent_containter.appendChild(menu_card);

}
var menu_item = {
    name: "Delicious Food",
    description: "Our signature meal",
    image_src: "http://lorempixel.com/output/food-h-c-364-479-1.jpg",
    price: 10
};

add_menu_item(menu_item);

var menu_items = [
    {
        name: "Delicious Salad",
        description: "Our signature meal",
        image_src: "http://lorempixel.com/output/food-h-c-364-479-1.jpg",
        price: 10
    },
    {
        name: "Delicious Pasta",
        description: "Our signature meal",
        image_src: "http://lorempixel.com/output/food-h-c-364-479-1.jpg",
        price: 12
    },
    {
        name: "Delicious Pizza",
        description: "Our signature meal",
        image_src: "http://lorempixel.com/output/food-h-c-364-479-1.jpg",
        price: 14
    },
    {
        name: "Delicious Dessert",
        description: "Our signature meal",
        image_src: "http://lorempixel.com/output/food-h-c-364-479-1.jpg",
        price: 16
    },
]

for(var i=0; i < menu_items.length; i++) {
    add_menu_item(menu_items[i]);

}

var new_menu_item = {
    name: "Hawaiian",
    description: "A very Hawaiian pizza",
    image_src: "http://lorempixel.com/output/food-h-c-364-479-1.jpg",
    price: 15
}

var new_menu_item_json = JSON.stringify(new_menu_item);

var new_menu_item_parsed = JSON.parse(new_menu_item_json);