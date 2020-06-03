pragma solidity  ^0.6.4;
pragma experimental ABIEncoderV2;


contract COVID19_Patient_DB {
    mapping(uint256 => patientStates) private healthRecords;
    mapping(uint256 => patient) private patients;
    uint256 private patientsCounter = 0;
    
    event newRecord (uint day, bool covid_status, string condition);
    
    
    struct patientState {
        uint day;
        bool covid_status;
        string condition;
    }
    
    struct patientStates {
        uint record_number;
        patientState[] records;
    }
    
    struct patient {
        string firstName;
        string lastName;
    }

    function addPatient(string memory firstName, string memory lastName) public {
        incrementCounter();
        initHelthRecords(patientsCounter);
        patients[patientsCounter] = patient(firstName, lastName);        
    }
   

    function initHelthRecords(uint256 patientId) private {
        uint rn = healthRecords[patientId].record_number = 0;
        patientState memory ps = patientState(rn, false, string("lol"));
        healthRecords[patientId].records.push(ps);
        emit newRecord (ps.day, ps.covid_status, ps.condition);
    }
    
    function addRecordState(uint256 patientId, bool covid_status, string memory state) public{
        uint rn = healthRecords[patientId].record_number += 1;
        patientState memory ps = patientState(rn, covid_status, state);
        healthRecords[patientId].records.push(ps);
        emit newRecord (ps.day, ps.covid_status, ps.condition);
    }
    
     
    function getPatient(uint256 patientId) public view returns(string memory, string memory){
       patient storage p = patients[patientId];
        return (p.firstName, p.lastName);
    }
    
     function getLastRecord(uint256 patientId) public view returns(uint, bool, string memory){
        uint rn = healthRecords[patientId].record_number;
        patientState memory ps = healthRecords[patientId].records[rn];
        return (ps.day, ps.covid_status, ps.condition);
    }
    
    function getPatientRecords(uint256 patientId) public view returns(patientStates memory) {
        return healthRecords[patientId];
    }

    function incrementCounter() private {
        patientsCounter += 1;
    }

}