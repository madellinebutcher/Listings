function HouseController(){
    var houseService = new HouseService(drawHouses)

    function drawHouses(houses){
        var template = ''
        for (let i = 0; i < houses.length; i++) {
            var house = houses[i];
            template += `
            <div>
            <img class="imgpic" src="${house.imgUrl}">
            <h3>Year:${house.year}</h3>
            <h3>Price:${house.price}</h3><button onclick="app.controllers.houseController.haggleHouse('${house._id}',${house.price})">Haggle</button>
            <h3>Levels:${house.levels}</h3>
            <h3>Bedrooms:${house.bedrooms} </h3>
            <h3>Bathrooms:${house.bathrooms} </h3>
            <p>${house.description}</p>
            <button onclick="app.controllers.houseController.deleteHouse('${house._id}')">Delete</button>
            
            </div>
            
            `
        }
        document.getElementById('houses').innerHTML = template
    }



    //public
    this.addHouse = function addHouse(e){
        e.preventDefault();
        var data = e.target
        var newHouse ={
            img: data.img.value,
            year: data.year.value,
            price: data.price.value,
            levels: data.levels.value,
            bedrooms: data.bedrooms.value,
            bathrooms: data.bathrooms.value,
            description: data.description.value,


        }
        houseService.addHouse(newHouse)
        data.reset()
    }
    this.deleteHouse = function deleteHouse(id){
        houseService.deleteHouse(id)
    }

    this.haggleHouse = function haggleHouse(id, price){
        houseService.haggleHouse(id, price)
      }







}