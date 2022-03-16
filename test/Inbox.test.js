// contract test code will go here
const ganache = require('ganache-cli');
const assert = require('assert');
const Web3 = require("web3");
const { beforeEach } = require('mocha');
const web3 = new Web3(ganache.provider());

// class Car {
//     park() { return "stopped" }
//     drive() { return "vroom" }
// }

// let car;
// beforeEach(() => {
//     car = new Car();
// })

// describe('Car', () => {
//     it('should drive', () => {
//         assert.equal(car.drive(), "vroom");
//     })
//     it('should park', () => {
//         assert.equal(car.park(), "stopped");
//     })
// })