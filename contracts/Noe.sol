// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIencoderV2; 

contract Noe {
    
    // Structs
    
    // Structure membres
    
    struct Member {
        string firtName;
        string lastName;
        address userAddress;
        string postalAddress;
        uint8 postalCode;
        string city;
        
    }
    
    // Structure animales
    
    struct Animal {
        uint animalId;
        string name;
        uint8 dateBirth;
        string sexe;
        string vaccin;
    }
    
    // Structure vétérinaire
    
    struct Veterinary {
        string firtName;
        string lastName;
        address veterinaryAddress;
        string postalAddress;
        uint8 postalCode;
        string city;
        bool diploma;
    }
    
    
    // Variables de statues
    
    uint256 public animalsCount;
    
    mapping(uint256 => Member) public member;
    
    mapping(uint256 => Animal) public animal;
    
    mapping(uint256 => Veterinary) public veterinary;
    
    mapping(address => bool) public registerdMembers;
    
    // Fonction Modifier
    
    // Check si le member n'est enregisté
    
    modifier isRegistered() {
        require(registerdMembers[msg.sender], "Vous n'étes pas enregisté");
        _;}
        
    // Check si le member est enregisté
    
    modifier notAlreadyRegistered() {
        require(!registerdMembers[msg.sender], "Vous étes deja enregisté");
        _;}
        
    // Check si l'animal est enregister
    
    modifier animalIdCheck(uint256 animalId) {
        require(animalId < animalsCount, "L'animal n'éxiste pas");
        _;}
    }
        
}