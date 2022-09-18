//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTmint is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _tokenuri,
        address _account
    ) public ERC721(_name, _symbol) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(_account, newItemId);
        _setTokenURI(newItemId, _tokenuri);
    }
}
