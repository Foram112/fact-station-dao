// SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;
contract FSToken {
    string  public name = "FactStation Token";
    string  public symbol = "FST";
    uint256 public totalSupply;
    address public admin;
    uint tokenPrice;
    uint256 public tokensSold;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );
    // event Approval(
    //     address indexed _owner,
    //     address indexed _spender,
    //     uint256 _value
    // );
    mapping(address => uint256) public balanceOf;
    // mapping(address => mapping(address => uint256)) public allowance;
    constructor(uint256 _initialSupply, uint _price) {
        admin = msg.sender;
        balanceOf[admin] = _initialSupply;
        totalSupply = _initialSupply;
        tokenPrice = _price;
    }

    function checkBalance() external view returns(uint){
        return balanceOf[admin];
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[admin] >= _value, "xyz");
        balanceOf[admin] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(admin, _to, _value);
        return true;
    }

    function getTokenPrice() external view returns(uint) {
        return tokenPrice;
    }

    // function approve(address _spender, uint256 _value) public returns (bool success) {
    //     allowance[msg.sender][_spender] = _value;
    //     Approval(msg.sender, _spender, _value);
    //     return true;
    // }
    // function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
    //     require(_value <= balanceOf[_from]);
    //     require(_value <= allowance[_from][admin]);
    //     balanceOf[_from] -= _value;
    //     balanceOf[_to] += _value;
    //     allowance[_from][admin] -= _value;
    //     emit Transfer(_from, _to, _value);
    //     return true;
    // }
}