const checkObjProperties = (obj, String) => {
    for (let key in obj) {
        if (key==String) {
            return true
        }
    }
};

let cat = {
    walks: true
};

let propertyToCheck = "walks";

console.log(checkObjProperties (cat, propertyToCheck))