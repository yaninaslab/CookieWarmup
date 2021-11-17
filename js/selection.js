function add_menu_item(item) {
    // Selecting a parent container for the article
        var parent_containter = document.getElementById("menu_container");
    // Setting up a variable and assigning a tag to it
        var menu_card = document.createElement("article");
    // Assgning a class to new element
        menu_card.classList.add("card_container");
       //var item_json = JSON.stringify(item);
        //menu_card.setAttribute('onclick', `handle_click('${item_json}')`);
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


var selected_food_json = Cookies.get('selected_item');
var selected_food = JSON.parse(selected_food_json);
add_menu_item(selected_food);

