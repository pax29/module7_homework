
let Socket = {
    totalConsumption: 0
}

class Device {
    constructor (name, make, type, consumption) {
        this.name = name
        this.make = make,
        this.type = type,
        this.consumption = consumption
    }

    connect() {
        this.connected = true,
        Socket.totalConsumption = Socket.totalConsumption + this.consumption,
        Socket.connectedDevices = Socket.connectedDevices + this.name,
        console.log (`${this.name} was connected. Total consumption is ${Socket.totalConsumption} Watts.`)
    }

    disconnect() {
        this.connected = false,
        Socket.totalConsumption = Socket.totalConsumption - this.consumption,
        console.log (`${this.name} was disconnected. Total consumption is ${Socket.totalConsumption} Watts.`)
    }
}


class Kettle extends Device {
    constructor (name, make, type, consumption, volume, waterTemperature, colour) {
        super (name, make, type, consumption),
        this.volume = volume,
        this.waterTemperature = waterTemperature,
        this.colour = colour
    }
}

let glassKettle = new Kettle ('Glass Kettle', 'Bork', 'model720', 1500, 1.7, 25, 'transparent');
let thermopot = new Kettle ('Thermopot', 'Panasonic', 'model3000', 700, 3, 85, 'white');

class Computer extends Device {
    constructor (name, make, type, consumption, screenSize, cpuThreads, batteryCapacity) {
        super (name, make, type, consumption),
        this.screenSize = screenSize,
        this.cpuThreads = cpuThreads,
        this.batteryCapacity = batteryCapacity
    }
}

let laptop = new Computer ('Laptop', 'Lenovo', 'IdeaPad', 100, 16, 24, 10000);
let phone = new Computer ('Phone', 'Purism', 'Librem', 20, 5, 4, 4000);

console.log(laptop)
laptop.connect()
console.log(laptop)
phone.connect()
laptop.disconnect()

