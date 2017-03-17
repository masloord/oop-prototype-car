
function Car (make, model, year, color, seats, passengers = []) {
  this.make = make
  this.model = model
  this.year = year
  this.color = color
  this.seats = seats
  // TODO: add color, seats here

  this.running = false
  this.owner = 'Lenny'
  this.previousOwners = ['manufacturer']
  this.passengers = passengers
}

Car.prototype.sell = function (newOwner) {
  return newOwner
}

Car.prototype.paint = function (newColor) {
  this.color = 'Blue'
  return newColor
}

Car.prototype.start = function () {
  this.running = true
}
Car.prototype.off = function () {
  this.running = false
}
Car.prototype.driveTo = function (destination) {
  if (this.running === true) {
    console.log('driving to' + destination)
    return true
  } else {
    return false
  }
}
Car.prototype.park = function () {
  if (!this.running) {
    console.log('parked!!')
    return true
  } else {
    return false
  }
}

Car.prototype.pickUp = function (name) {
  if (this.running === true && this.passengers.length < this.seats - 1) {
    console.log('driving to pick up' + name)
    console.log(this.passengers.length)
    this.passengers.push(name)
    return true
  } else {
    return false
  }
}

Car.prototype.dropOff = function (name) {
  var passenger = this.passengers.indexOf(name)
  if (passenger > -1 && this.running) {
    this.passengers.splice(passenger, 1)
    return true
  }
  return false
}

Car.prototype.passengerCount = function () {
  return this.passengers.length
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car
