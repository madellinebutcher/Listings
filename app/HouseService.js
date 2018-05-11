function HouseService(cb){
    var baseUrl = "https://bcw-gregslist.herokuapp.com/api/houses"
    var houses = []


function House(img, year, price, levels, bedrooms, bathrooms, description){
    this.imgUrl = img
    this.year = year
    this.price = price
    this.levels = levels
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.description = description || "No description provided"

}

    // var poolside = new House("http://alyssachia.info/wp-content/uploads/2017/11/big-houses-with-swimming-pools-15-heavenly-beautiful-luxury-mansions-with-swimming-pools-the.jpg", 2016, "Mermaids Sea", 300000000)

    // var castle = new House("https://ward8online.com/wp-content/uploads/castle-style-homes-inspired-home_1105882.jpg", 2000, "Knights Land", 500000000)

    // var woods = new House("https://s-media-cache-ak0.pinimg.com/originals/3b/d2/73/3bd273644dcc8bfc0a8e3d41c622f79d.jpg",2018, "Fairy Isle", 495000)


    // houses.push(poolside, castle, woods)

   function getHouses(){
        $.get(baseUrl)
        .then (res => {
            cb(res.data)
        })
        
    }
    getHouses()
    //public
    this.addHouse = function addHouse(house){
        var newHouse = new House(house.img, house.year, house.price, house.levels, house.bedrooms, house.bathrooms, house.description)
        $.post(baseUrl, newHouse)
            .then(res => {
                getHouses()
            })
    }
    this.deleteHouse = function deleteHouse(id){
        $.ajax({
            method: 'DELETE',
            url: baseUrl + '/' + id
        })
            .then(res => {
                getHouses()
            })
    }
    this.haggleHouse = function haggleHouse(id, price){
        $.ajax({
            method:'PUT',
            url: baseUrl + '/' + id,
            contentType: 'application/JSON',
            data: JSON.stringify({
                price: price * .9
            })
        })
            .then(res => {
                getHouses()
            })
    }

}