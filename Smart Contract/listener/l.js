const Web3 = require("Web3")

const web3 = new Web3("http://localhost:8545");

const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"day","type":"uint256"},{"indexed":false,"internalType":"bool","name":"covid_status","type":"bool"},{"indexed":false,"internalType":"string","name":"condition","type":"string"}],"name":"newRecord","type":"event"},{"inputs":[{"internalType":"string","name":"firstName","type":"string"},{"internalType":"string","name":"lastName","type":"string"}],"name":"addPatient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientId","type":"uint256"},{"internalType":"bool","name":"covid_status","type":"bool"},{"internalType":"string","name":"state","type":"string"}],"name":"addRecordState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientId","type":"uint256"}],"name":"getLastRecord","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientId","type":"uint256"}],"name":"getPatient","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"patientId","type":"uint256"}],"name":"getPatientRecords","outputs":[{"components":[{"internalType":"uint256","name":"record_number","type":"uint256"},{"components":[{"internalType":"uint256","name":"day","type":"uint256"},{"internalType":"bool","name":"covid_status","type":"bool"},{"internalType":"string","name":"condition","type":"string"}],"internalType":"struct SimpleStorage.patientState[]","name":"records","type":"tuple[]"}],"internalType":"struct SimpleStorage.patientStates","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}]
const address = "0x3ff2b628ed72f20ac15dcb5062a015b7dc041acf";

const contract = new web3.eth.Contract(abi, address)

// contract.getPastEvents(
//     'AllEvents',
//     {
//         fromBlock: 0,
//         toBlock: 'latest'
//     },
//     (err, events) => {
//         var event;
//         for (var i = 0; i < events.length; i++) {
//             event = events[i]
//             console.log('day: ' + event.returnValues.day + ', covid status: ' + event.returnValues.covid_status + ', condition: ' + event.returnValues.condition)
//         };
//     }
// )

contract.methods.getPatientRecords(1).call().then(function(res) {
    console.log(res[1])
});

// const r = async () => {
//     var res = await contract.methods.getLastRecord(1).call();
//     console.log(res)
// }

// r()
// web3.eth.getAccounts(console.log)

