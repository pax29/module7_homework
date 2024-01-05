function getObjOwnProperties (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(key)
        };
    };
};

let animal = {
    hairy: true
}

let mule = {
    __proto__: animal,
    strong: true,
    stubborn: true
}

getObjOwnProperties (mule);