# homework17
## 1. Чем отличается класс от объекта? Приведите примеры и того, и другого, отличные от указанных в уроке.

Объект - тип данных, который используется для хранения значений и (иногда) более сложных сущностей. Он состоит из свойств в виде пары: ключ и его значение. Это экземпляр класса
Пример:
let mуArt = {
    name : 'Chimera',
    artist : 'Olga Gotovtseva', 
    year : '2020', 
    type : 'painting', 
    style : 'fluid art', 
    price : 35, 
    width : 20, 
    length : 20, 
    materials : , 
    catalogID : 23082636;
}


Класс - это "чертеж", т.е. описание, по которому создается объект.
Пример:
class PiceOfArt {
    constructor(name, artist, year, type, style, price, width, length, materials, catalogID) {
        this.name = name;
        this.artist = artist;
        this.year =  year;
        this.type =  type;
        this.style =  style;
        this.price =  price;
        this.width =  width;
        this.length = length;
        this.materials = this.materials;
        this.catalogID =  this.catalogID;
    }

    calcSquare = () => {
        return this.width * this.length;
    }
}

## 2. Приведите примеры объектно-ориентированного подхода в реальной жизни. 
    
    Человек - как объект. У него есть свойства (рост, вес, возраст, цвет кожи, группа крови и т.д.) и методы (ходить, говорить, спать, дышать и т.д.).
    Автомобиль как объект со свойствами (марка, модель, год выпуска, цвет, наличие систем безопасности (сигнализации и т.д.) и систем помощи (антипробуксовочная и т.д.)) + у авто есть методы (ехать задним ходом, ехать передним ходом, автопарковка и т.д.).

    Класс Кошачьи (с атрибутами: конечности, когти, количество зубов, язык с сосочками, органы чувств, образ жизни, вес). От этого класса могут наследовать представители семейства кошачьих, с дополнительными атрибутами. Например, класс Гепард отличается невтяжными когтями, или класс Больших кошек отличается методом (умеет рычать и урчать на выдохе), а малые от больших тем, что умеют урчать и на вдохе и на выдохе.
    
## Приведите примеры объектно-ориентированного подхода в программировании. 
    
   - аватар в видео-игре (никнейм, количество жизней, баланс, рейтинг)
   - пост в инстаграм (фото, дата создания, подпись, автор)
   - электронное письмо (адресат, отправитель, текст, тема, вложения)
    
## 3. Что такое конструктор? Самостоятельно изучите и напишите, какие бывают виды конструкторов.

Конструктор - это спецфункция, которая заполняет пустой объект свойствами и методами и позволяет создать множество однотипных объектов. Функция-конструктор выполняется с помощью оператора new.
 Основные конструкторы: Object(), Array(), Function(), Date(), String()

## 4. Что выведет код? Почему именно так? 
    
ninja
pomodir
site

При первом вызове bike() this указывает на глобальный объект window. А name, которая вызвана с помощью var является свойством window. При вызове функции bike, фактически получаем window.name, что и есть "ninja"

Дальше все иначе. this уже указывает на каждый конкретный объект (obj1 или obj2), и потому возвращаются значения этих объектов по ключу name.
 
    
## 5. Чем статические свойства и методы отличаются от нестатических? В каких ситуациях они применяются?

Статические свойства и методы, так называемые "статики", принадлежат в целом классу, а не относятся к конкретному его экземпляру. 
Статические свойства используются, когда данные надо сохранить на уровне класса, а не какого-то одного его элемента.
Статические методы используют, чтобы определить поведение для всего класса, а нестатические - поведение объекта.
Для определения обоих перед началом ставится слово static. Есть особенности и в их вызове. Чтобы это сделать, надо обратиться к классу, а не к объекту.

## 6. Самостоятельно изучите, что такое геттеры и сеттеры, приведите пример класса с их использованием.

Геттеры и сеттеры это специальные свойства объекта, которые в отличие от свойств-данных по сути являются функциями, используемыми для присвоения (сеттер) и получения (геттер) значения. При этом в обычном коде мы считаем их за обычные свойства и обращаемся к ним также (как к обычным свойствам). 

Пример

class Student {
    constructor(name, surname, subjectGrade1, subjectGrade2) {
        this.name = name;
        this.surname = surname;
        this.subjectGrade1 = subjectGrade1;
        this.subjectGrade2 = subjectGrade2;
    }

    set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }

  get averageGrade() {
    return (this.subjectGrade1 + this.subjectGrade2) / 2;
  }
}

## 7. Что выведет код? Почему именно так?

object
Т.к. member - это объект, создаваемый с помощью класса (по шаблону)


## 8.  Что выведет код? Почему именно так?

выведет все тоже "содержимое" объекта person : {name: 'Valera', age: 23}
В коде нарушен порядок обращения к свойству объекта. Чтобы создать новое свойство с определенным ключем, надо обратиться к объекту и через точку указать ключ (ну или так ['ключ']), а потом присвоить значение (напрямую или через переменную)

Чтобы задать свойство город, можно использовать следующий код
let city = "Amsterdam";  
person.city = city;

или 

person.city = "Amsterdam";