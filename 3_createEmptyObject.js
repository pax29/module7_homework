const createEmptyObject =()=> {
    obj = Object.create(null)
};

createEmptyObject();

console.log (obj.__proto__); //проверка что создан объект с отсутствующим прототипом