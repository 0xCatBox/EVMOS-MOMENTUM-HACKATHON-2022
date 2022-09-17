//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CatToken is ERC20 {
    constructor() public ERC20("CatToken", "CAT") {
        _mint(msg.sender, 10**18);
    }

    function mintFT(address to) public payable {
        _mint(to, 10**16);
    }

    function burnFT(address to) public {
        _burn(to, 10**16);
    }

    function transferFT(
        address from,
        address to,
        uint256 amount
    ) public payable {
        _transfer(from, to, amount);
    }
}
