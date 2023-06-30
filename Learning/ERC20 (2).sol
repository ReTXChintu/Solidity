// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface IERC20 {
    function totalSupply() external view returns (uint256);

    function maxSupply() external view returns (uint256);

    function balanceOf(address tokenOwner) external view returns (uint256);

    function getBalance() external view returns (uint);

    function transfer(address to, uint256 tokens) external returns (bool);

    function approve(address delegate, uint256 tokens) external returns (bool);

    function allowance(
        address owner,
        address delegate
    ) external view returns (uint256);

    function transferFrom(
        address from,
        address to,
        uint256 tokens
    ) external returns (bool);

    function mint(uint256 tokens) external returns (uint256);

    function burn(uint256 tokens) external returns (uint256);

    function purchase(uint tokens) external payable;
}

contract ERC20 is IERC20 {
    string public _name;
    string public _symbol;
    uint8 public _decimals;
    uint public _price;

    event Approval(address tokenOwner, address spender, uint256 tokens);
    event Transfer(address from, address to, uint256 tokens);

    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowed;
    uint256 private _totalSupply;
    address payable private _owner;
    uint256 private _maxSupply;
    uint private _circulate;

    // uint256 public _circulate;

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimal_,
        uint256 tokens,
        uint maxSupply_,
        uint price_
    ) {
        _owner = payable(msg.sender);
        _name = name_;
        _symbol = symbol_;
        _decimals = decimal_;
        _totalSupply = mint(tokens);
        _maxSupply = maxSupply_;
        _price = price_;
    }

    modifier onlyOwner() {
        require(
            msg.sender == _owner,
            "Erc20: only owner can perform this operation"
        );
        _;
    }

    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }

    function maxSupply() external view returns (uint256) {
        return _maxSupply;
    }

    function balanceOf(
        address tokenOwner
    ) external view onlyOwner returns (uint256) {
        return balances[tokenOwner];
    }

    function getBalance() external view returns (uint) {
        return balances[msg.sender];
    }

    function circulate() external view onlyOwner returns (uint) {
        return _totalSupply - balances[address(this)] - balances[_owner];
    }

    function transfer(address to, uint256 tokens) external returns (bool) {
        require(tokens != 0, "Erc20: number of tokens should be more than 1");
        require(tokens <= balances[msg.sender], "Erc20: not enough tokens");
        balances[msg.sender] = balances[msg.sender] - tokens;
        balances[to] = balances[to] + tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    function approve(address delegate, uint256 tokens) external returns (bool) {
        require(
            tokens <= balances[msg.sender],
            "Erc20: not enough balance for allowance"
        );
        allowed[msg.sender][delegate] += tokens;
        emit Approval(msg.sender, delegate, tokens);
        return true;
    }

    function allowance(
        address owner,
        address delegate
    ) public view returns (uint256) {
        return allowed[owner][delegate];
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokens
    ) public returns (bool) {
        require(to != address(0), "Erc20: please enter valid address");
        require(tokens != 0, "Erc20: number of tokens should be more than 1");
        require(tokens <= balances[from], "Erc20: not enough tokens");
        require(
            tokens <= allowed[from][msg.sender],
            "Erc20: not allowed to send this much tokens"
        );
        balances[from] -= tokens;
        allowed[from][msg.sender] -= tokens;
        balances[to] += tokens;
        emit Transfer(from, to, tokens);
        return true;
    }

    function mint(uint256 tokens) public onlyOwner returns (uint256) {
        require(_totalSupply <= _maxSupply, "Erc20: exceeding max tokens");
        balances[_owner] += tokens;
        _totalSupply += tokens;
        emit Transfer(address(0), _owner, tokens);
        return _totalSupply;
    }

    function burn(uint256 tokens) external onlyOwner returns (uint256) {
        require(tokens <= balances[_owner], "Erc20: not enough tokens to burn");
        balances[_owner] -= tokens;
        emit Transfer(_owner, address(0), tokens);
        return _totalSupply;
    }

    function purchase(uint tokens) public payable {
        require(tokens != 0, "Erc20: minimum 1 token is needed");
        require(
            tokens <= balances[address(this)],
            "Erc20: not enough tokens to purchase"
        );
        require(
            msg.value == tokens * _price,
            "Erc20: not the correct amount to purchase"
        );

        balances[address(this)] -= tokens;
        balances[msg.sender] += tokens;
        emit Transfer(address(this), msg.sender, tokens);
    }

    function transferTokenToContract(uint tokens) external onlyOwner {
        require(tokens != 0, "Erc20: please send atleast 1 token");
        require(tokens <= balances[_owner], "Erc20: don't have enough tokens");
        balances[_owner] -= tokens;
        balances[address(this)] += tokens;
        emit Transfer(_owner, address(this), tokens);
    }

    function transferETHfromContract(uint ethers) external payable onlyOwner {
        require(ethers != 0, "Erc20: minimum 1 ether is needed");
        require(
            ethers <= address(this).balance,
            "Erc20: don't have enough ether"
        );
        _owner.transfer(ethers);
    }
}
