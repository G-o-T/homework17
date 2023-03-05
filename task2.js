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
      this.price = price;
      this.brand = brand;
    }

    getInfo() {
    }

    getPrice() {
      return `Стоимость составляет ${this.price} RUB`
    }
  }

class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }

  getDoorsCount(){
    return `Количество дверей: ${this.doors}`;
  }
}

class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed(){
    return `Максимальная скорость - ${this.maxSpeed} км/ч`;
  }
}

let cars = data.filter(item => item.type === 'car');
let carObjs = [];
cars.forEach(item => {
  carObjs.push(new Car(item.type, item.price, item.brand, item.doors));
});

let bikeObjs = [];
data.filter(item => item.type === 'bike').forEach(item => {
  bikeObjs.push(new Bike(item.type, item.price, item.brand, item.maxSpeed));
});

let transport = [...carObjs, ...bikeObjs];
console.log(transport);

  let form = document.forms.form;
  let btnPrice = document.querySelector('.btn-price');
  let btnDoors = document.querySelector('.btn-doors');
  let btnSpeed = document.querySelector('.btn-speed');
  let btnRemover = document.querySelector('.btn-remover');
  let typeList = form.elements.tm;
  let resultField = document.querySelector('.result-field');
  let brandList = form.elements.brand;
  let cards = document.querySelector('.cards');


function createCards() {
  data.forEach(item => {
    let card = document.createElement('div');
    card.classList.add('card');
    let img = document.createElement('img');
    img.classList.add('card__img');
    img.src = item.image;
    let row = document.createElement('div');
    row.classList.add('card__row');
    let title = document.createElement('p');
    title.classList.add('card__title');
    title.innerText = item.brand;
    chbx = document.createElement('input');
    chbx.type = 'radio';
    chbx.name = 'radio';
    chbx.value = item.id;
    cards.appendChild(card);
    card.appendChild(img);
    card.appendChild(row);
    row.appendChild(title);
    row.appendChild(chbx);
  })
}

window.addEventListener('load', createCards);

let cardsArr = document.getElementsByClassName('card');
console.log(cardsArr);
// cardsRightArr.forEach(el => el.addEventListener('click', () => {
//   console.log('что-то нажала');
// }));



let cardsRightArr = Array.prototype.filter.call(cardsArr, () => {
  return cardsArr.nodeName === 'DIV';
});
console.log(cardsRightArr);



// function showInfo(event) {

//   if (event.target.type === 'radio') {
//       if (event.target.selected) {
//         console.log('отжа радио-бтн');
//           // addStyle(event.currentTarget, addClassName);
//           // event.target.selected = true;
//       } else {
//         console.log('отжал радио-бтн')
//           // removeStyle(event.currentTarget, addClassName);
//           // event.target.selected = false;
//       }
//   }
// }











// function createText(tag, inner) {
//   let text = document.createElement('div');
//   text.classList.add(tag);
//   text.innerHTML = inner;
//   resultField.append(text);
// }

// function showError() {
//   cards.classList.add('error-style');
//   createText('error', 'Выберите транспортное средство, о котором хотите получить информацию');
// }

// function hideError() {
//   cards.classList.remove('error-style');
//   resultField.replaceChildren();
// }







// cards.addEventListener('click', () => {
//   if(document.querySelector('input[name="radio"]:checked')) {
//     hideError();
//     if (document.querySelector('input[name="radio"]:checked').value <= 2) {
//       btnDoors.classList.remove('inert');
//       btnSpeed.classList.add('inert');
//   } else {
//       btnDoors.classList.add('inert');
//       btnSpeed.classList.remove('inert');
//   }
// }
// })

// btnPrice.addEventListener('click', (event) => {
//   event.preventDefault();
//   if (!document.querySelector('input[name="radio"]:checked')) {
//       showError();
//   } else {
//     createText('result', transport[document.querySelector('input[name="radio"]:checked').value-1].getPrice());
//   }
// });

// btnDoors.addEventListener('click', (event) => {
//   event.preventDefault();
//     createText('result', transport[document.querySelector('input[name="radio"]:checked').value-1].getDoorsCount()); 
// });

// btnSpeed.addEventListener('click', (event) => {
//   event.preventDefault();
//     createText('result', transport[document.querySelector('input[name="radio"]:checked').value-1].getMaxSpeed()); 
// });

// function cleanStyles() {
//     btnDoors.classList.add('inert');
//     btnSpeed.classList.add('inert');
// }

// btnRemover.addEventListener('click', (event) => {
//   event.preventDefault();
//   form.reset();
//   resultField.replaceChildren();
//   cleanStyles();
// });




