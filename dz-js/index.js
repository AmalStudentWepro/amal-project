
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "черный",
    start: function() {
        console.log("Двигатель запущен!");
    },
    stop: function() {
        console.log("Двигатель остановлен.");
    }
};


console.log(`Марка: ${car.brand}, Модель: ${car.model}, Год: ${car.year}, Цвет: ${car.color}`);

// Запуск и остановка
car.start();
car.stop();


let person = {
    name: "Алексей",
    age: 30,
    license: true,
    drive: function(car) {
        if (this.license) {
            console.log(`${this.name} начал поездку на ${car.brand} ${car.model}.`);
        } else {
            console.log(`${this.name} не имеет прав на вождение.`);
        }
    },
    park: function() {
        console.log("Автомобиль припаркован.");
    }
};


console.log(`Имя: ${person.name}, Возраст: ${person.age}, Права: ${person.license ? "Есть" : "Нет"}`);

// Поездка
person.drive(car);
person.park();


let car2 = {
    brand: "Ford",
    model: "Focus",
    year: 2018,
    color: "синий",
    start: function() {
        console.log("Двигатель запущен!");
    },
    stop: function() {
        console.log("Двигатель остановлен.");
    }
};

let person2 = {
    name: "Марина",
    age: 25,
    license: false,
    drive: function(car) {
        if (this.license) {
            console.log(`${this.name} начал поездку на ${car.brand} ${car.model}.`);
        } else {
            console.log(`${this.name} не имеет прав на вождение.`);
        }
    },
    park: function() {
        console.log("Автомобиль припаркован");
    }
};

person2.drive(car2); // Марина не имеет прав 
