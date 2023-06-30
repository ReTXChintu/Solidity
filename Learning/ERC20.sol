// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface IERC20 {
    function totalSupply() external view returns (uint256);

    function balanceOf(address tokenOwner) external view returns (uint256);

    function transfer(address to, uint256 tokens) external returns (bool);

    function approve(address delegate, uint256 tokens) external returns (bool);

    function allowance(address owner, address delegate)
        external
        view
        returns (uint256);

    function transferFrom(
        address from,
        address to,
        uint256 tokens
    ) external returns (bool);

    function mint(uint256 tokens) external returns (uint256);

    function burn(uint256 tokens) external returns (uint256);
}

contract ERC20 is IERC20 {
    string public _name;
    string public _symbol;
    uint8 public _decimals;

    event Approval(address tokenOwner, address spender, uint256 tokens);
    event Transfer(address from, address to, uint256 tokens);

    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowed;
    uint256 private _totalSupply;
    address private _owner;
    uint256 public _maxSupply = 1000000;

    // uint256 public _circulate;

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimal_,
        uint256 tokens
    ) {
        _owner = msg.sender;
        _name = name_;
        _symbol = symbol_;
        _decimals = decimal_;
        _totalSupply = mint(tokens);
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

    function balanceOf(address tokenOwner) external view returns (uint256) {
        return balances[tokenOwner];
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

    function allowance(address owner, address delegate)
        public
        view
        returns (uint256)
    {
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
        require(
            _totalSupply + tokens <= _maxSupply,
            "Erc20: exceeding max tokens"
        );
        _totalSupply += tokens;
        balances[_owner] = _totalSupply;
        emit Transfer(address(0), _owner, tokens);
        return _totalSupply;
    }

    function burn(uint256 tokens) external onlyOwner returns (uint256) {
        require(tokens <= _totalSupply, "Erc20: not enough tokens to burn");
        _totalSupply -= tokens;
        balances[_owner] = _totalSupply;
        emit Transfer(_owner, address(0), tokens);
        return _totalSupply;
    }
}
