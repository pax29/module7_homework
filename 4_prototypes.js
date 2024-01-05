
let Socket = {
    totalConsumption: 0
}

function Device(name, Id, make, type) {
    this.name = name
    this.Id = Id,
    this.make = make,
    this.type = type
}

Device.prototype.connect = function() {
    this.connected = true,
    Socket.totalConsumption = Socket.totalConsumption + this.consumption,
    console.log (`${this.name} was connected. Total consumption is ${Socket.totalConsumption} Watts.`)
}

Device.prototype.disconnect = function() {
    this.connected = false,
    Socket.totalConsumption = Socket.totalConsumption - this.consumption,
    console.log (`${this.name} was disconnected. Total consumption is ${Socket.totalConsumption} Watts.`)
}

function kettle (name, outerMaterial, volume, consumption, colour) {
    this.name = name,
    this.outerMaterial = outerMaterial,
    this.volume = volume,
    this.consumption = consumption,
    this.colour = colour
}

kettle.prototype = new Device()

const glassKettle = new kettle ('Cordless kettle', 'glass', 2, 2000, 'transparent');
const thermopot = new kettle ('Thermopot', 'plastic', 4, 700, 'white');

function drill (name, consumption, batteryVoltage, batteryCapacity, gearboxMaterial) {
    this.name = name,
    this.consumption = consumption,
    this.batteryVoltage = batteryVoltage,
    this.batteryCapacity = batteryCapacity,
    this.gearboxMaterial = gearboxMaterial
}

drill.prototype = new Device()

const portableDrill = new drill ('Impact drill', 500, 18, 4, 'plastic/metal');
const cordedDrill = new drill ('Corded drill', 1500, 0, 0, 'metal');

cordedDrill.connect();

thermopot.connect();

glassKettle.connect();

cordedDrill.disconnect();