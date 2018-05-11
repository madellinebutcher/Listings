function CarController(){
    //CONTROLLERS ARE RESPONSIBLE FOR 
      //INTERACTING WITH THE DOM/USER
      //COMMUNICATION WITH THE SERVICE
    
      //PRIVATE
      var carService = new CarService(drawCars)
    
      function drawCars(cars){
        var template = ''
        for (let i = 0; i < cars.length; i++) {
          const car = cars[i];
          template += `
          <div>
            <img src="${car.imgUrl}" alt="">
            <h3>Make: ${car.make}</h3>
            <h3>Model: ${car.model}</h3>
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price}</h3>
            <button onclick="app.controllers.carController.discountCar('${car._id}',${car.price})">Discount</button>
            <p>Description: ${car.description}</p>
            <button onclick="app.controllers.carController.deleteCar('${car._id}')">Delete</button>
          </div>
        ` 
        }
        document.getElementById('cars').innerHTML = template
      }
    
    
      //PUBLIC
      this.addCar = function addCar(e){
        e.preventDefault();
        var data = e.target
        var newCar = {
          img: data.img.value,
          make: data.make.value,
          model: data.model.value,
          year: data.year.value,
          price: data.price.value
        }
        carService.addCar(newCar)
        data.reset()
      }
      this.deleteCar = function deleteCar(id) {
        carService.deleteCar(id)
      }
      this.discountCar = function discountCar(id, price){
        carService.discountCar(id, price)
      }
    
    
    
    }