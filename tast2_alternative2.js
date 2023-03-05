
const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://klike.net/uploads/posts/2020-03/1584958496_1.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];
  
  class Transport {
    constructor(type, price, brand) {
      this.type = type;
      this.brand = brand;
      this.price = price;
    }
  
    getInfo = () => {
        return this.brand;
    }
  
    getPrice = () => {
      return this.price;
    }
  }
  
  class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }
  
  getDoorsCount(){
    return this.doors;
  }
  }
  
  class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }
  
  getMaxSpeed = () => {
    return this.maxSpeed;
  }
  }
  
  let objs = [];
  function createObjs() {
    data.forEach(item => {
        objs.push(item.type === 'car' ? new Car(item.type, item.price, item.brand, item.doors) : new Bike(item.type, item.price, item.brand, item.maxSpeed));
    });    
  }
  
  createObjs();

  let car1Price = objs[0].getPrice();
  let bike1Speed = objs[2].getMaxSpeed();
  let car2DoorsBind = objs[1].getDoorsCount.bind(objs[1])();
  let car2Doors = objs[1].getDoorsCount();
  console.log(car1Price);
  console.log(bike1Speed);
  console.log(car2DoorsBind);
  console.log(car2Doors);
