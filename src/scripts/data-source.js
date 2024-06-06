import data from '../DATA.json';

const listRestaurant = data => {
    const restaurantItem = document.querySelector('#listRestaurant');
    restaurantItem.innerHTML = ''
    data.forEach(restaurant => {
        const {name, description, pictureId, city, rating} = restaurant;
        const restaurantElement = document.createElement('div')

        restaurantElement.innerHTML = `
            <article class="restaurant-item">
                <div class="thumbnail">
                    <img class="item-thumbnail" src="${pictureId}" alt="${name}">
                    <p class="item-city">Kota ${city}</p>
                </div>
                <div class="item-content">
                    <p class="content-rating">Rating: ${rating}</p>
                    <h3 class="content-title"><a href="#">${name}</a></h3>
                    <p class="content-description">${description}</p>
                </div>
            </article>
        
        `
        restaurantItem.appendChild(restaurantElement);
    });
}

listRestaurant(data.restaurants);