const a = {};
console.log(a);

a.prop1 = "myProp";
console.log(a);

a.method1 = function() {
    const name = prompt ('введите имя для нового свойства');
    a[name] = 'значение'
}

delete a.prop1
console.log(a);

a.pop = "iggyPop";
console.log(a);

a.method1()
console.log(a);
