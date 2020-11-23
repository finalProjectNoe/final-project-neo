// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

// pragma experimental ABIencoderV2;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Noe is ERC721 {
<<<<<<< HEAD
    // Adresse de la personne qui déploie

    address payable private _superAdmin;

    // Constucteur

    constructor(address payable superAdmin) public ERC721("Noe", "NOE") {
        _superAdmin = superAdmin;
    }

    // Structs
=======
    
    enum Animals {dog, cat, ferret}
    // Structs
>>>>>>> 745b7444e3ad8332199f7a9c9bbde0850ce884d6

    // Structure membres

    struct Member {
        string firtName;
        string lastName;
        address userAddress;
        string postalAddress;
        uint256 postalCode;
        string city;
    }

    // Structure animales

    struct Animal {
        uint256 animalId;
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

    mapping(address => Member) public member;

    mapping(uint256 => Animal) public animal;

    mapping(uint256 => Veterinary) public veterinary;

    mapping(address => bool) public registerdMembers;

    mapping(address => bool) public registerdVeterinary;

    // Fonction Modifier

    modifier isSuperAdmin() {
        require(
            msg.sender == _superAdmin,
            "Vous n'avez pas le droit d'utiliser cette fonction"
        );
        _;
    }

    // Check si le member n'est enregisté

    modifier isRegistered() {
        require(registerdMembers[msg.sender], "Vous n'étes pas enregisté");
        _;
    }

    // Check si le member est enregisté

    modifier notAlreadyRegistered() {
        require(!registerdMembers[msg.sender], "Vous étes deja enregisté");
        _;
    }

    // Check si l'animal est enregisté

    modifier animalIdCheck(uint256 animalId) {
        require(animalId < animalsCount, "L'animal n'éxiste pas");
        _;
    }

    // Events

    event memberCreated(address _address);

    event veterinaryCreated(address _address);

    // Function

    function createMember(
        string memory _firtName,
        string memory _lastName,
        address _userAddress,
        string memory _postalAddress,
        uint256 _postalCode,
        string memory _city
    ) public notAlreadyRegistered() returns (bool) {
        member[msg.sender] = Member({
            firtName: _firtName,
            lastName: _lastName,
            userAddress: _userAddress,
            postalAddress: _postalAddress,
            postalCode: _postalCode,
            city: _city
        });

        registerdMembers[msg.sender] = true;

        emit memberCreated(msg.sender);

        return registerdMembers[msg.sender];
    }

    function createVeterinary(
        string memory _firtName,
        string memory _lastName,
        address _veterinaryAddress,
        string memory _postalAddress,
        uint256 _postalCode,
        string memory _city,
        bool _diploma
    ) public isSuperAdmin() returns (bool) {
        veterinary[msg.sender] = Veterinary({
            firtName: _firtName,
            lastName: _lastName,
            veterinaryAddress: _veterinaryAddress,
            postalAddress: _postalAddress,
            postalCode: _postalCode,
            city: _city,
            diploma: _diploma
        });

        registerdVeterinary[msg.sender] = true;

        emit veterinaryCreated(msg.sender);

        return registerdVeterinary[msg.sender];
    }
}
