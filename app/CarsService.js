function CarService(cb) {
    //This is where the data lives
    var baseUrl = "https://bcw-gregslist.herokuapp.com/api/cars"
    //PRIVATE
    var cars = []
  
  
    function Car(img, year, model, make, price, description) {
      this.imgUrl = img || "//placehold.it/200x200"
      this.year = year
      this.model = model
      this.make = make
      this.price = price
      this.description = description || "No description provided"
    }
  
  
    function loadCars() {
      $.get(baseUrl).then(res => {
        cb(res.data)
      })
    }
    loadCars()
    //PUBLIC
  
    this.addCar = function addCar(car) {
      var newCar = new Car(car.img, car.year, car.model, car.make, car.price)
      $.post(baseUrl, newCar)
        .then(res => {
          loadCars()
        })
    }
  
    this.deleteCar = function deleteCar(id) {
      $.ajax({
        method: 'DELETE',
        url: baseUrl + '/' + id
      }).then(res => {
        loadCars()
      })
    }
    this.discountCar = function discountCar(id, price) {
      $.ajax({
        method: 'PUT',
        url: baseUrl + '/' + id,
        contentType: 'application/JSON',
        data: JSON.stringify({
          price: price * .9
        })
      }).then(res => {
        loadCars()
      })
    }
  
  
  
  }