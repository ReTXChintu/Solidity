let contractAddress = "0x45F50fb69694D3b2e584Cf0bbaf530A57bBC97da";
let abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
let web3;
let accounts;
let contract;
let sepolia = 11155111;

async function contractInfo(accountAddress) {
  contract = new web3.eth.Contract(abi, contractAddress);
  let sTokenName = await contract.methods.name().call();
  let sSymbol = await contract.methods.symbol().call();
  let nTotalSupply = await contract.methods.totalSupply().call();
  nTotalSupply = web3.utils.fromWei(nTotalSupply, "ether");
  let nDecimal = await contract.methods.decimals().call();
  let nBalance = await contract.methods.balanceOf(accountAddress).call();
  nBalance = web3.utils.fromWei(nBalance, "ether");

  $("#tokenName").html(`Token Name: ${sTokenName}`);
  $("#symbol").html(`Token Symbol: ${sSymbol}`);
  $("#decimals").html(`Token Decimals: ${nDecimal}`);
  $("#totalSupply").html(`Total Supply: ${nTotalSupply}`);
  $("#balance").html(`My Balance: ${nBalance}`);
  $("#userAddress").html(`User Address: ${accountAddress}`);
}

function verifyAmount(amount) {
  if (isNaN(amount) || amount <= 0 || !amount) {
    alert("Please enter a valid amount");
    return;
  }
}

async function checkNetwork() {
  let network = await web3.eth.getChainId();
  if (network !== sepolia) {
    alert("Switching to Sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(sepolia) }],
      });
    } catch (error) {
      console.error(error.message);
    }
  }
}

async function connect() {
  let elem = document.getElementById("connect");
  if (elem.textContent == "Connect to Metamask") {
    try {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      } else {
        alert("Metamask is not installed, redirecting to metamask");
        window.location.href = "https://metamask.io";
      }
      await checkNetwork();
      contractInfo(accounts[0]);
      alert("Connected to Metamask");
      elem.textContent = "Disconnect";
    } catch (error) {
      console.log(error);
    }
  } else {
    location.reload();
  }
}

async function mintTokens() {
  checkNetwork();
  if (!accounts) connect();

  try { 
    let estGas;
    let amounts = $("#mintingAmount").val();
    verifyAmount(amounts);

    let amount = web3.utils.toWei(amounts, "ether");
    console.log(amount);
    try {
      estGas = await contract.methods
        .mint(amount)
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC20")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }
    await contract.methods
      .mint(amount)
      .send({ from: accounts[0], gas: estGas });
    alert(`Tokens minted: ${amounts}`);
    console.log(`Tokens Minted: ${amounts}`);
  } catch (error) {
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Error minting tokens", error);
  }
}

async function burnTokens() {
  if (!accounts) connect();
  try {
    let estGas;
    let amounts = $("#burnAmount").val();
    verifyAmount(amounts);

    let amount = web3.utils.toWei(amounts, "ether");

    try {
      estGas = await contract.methods
        .burn(amount)
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC20")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }
    await contract.methods
      .burn(amount)
      .send({ from: accounts[0], gas: estGas });
    alert(`Tokens burned: ${amounts}`);
    console.log("Tokens burned:", amounts);
  } catch (error) {
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Error burning tokens", error);
  }
}

async function transferTokens() {
  if (!accounts) connect();
  try {
    let estGas;
    let toAddress = $("#toAddress").val();
    if (!web3.utils.isAddress(toAddress)) {
      alert("Please enter a valid address.");
      return;
    }
    let amounts = $("#transferAmount").val();
    verifyAmount(amounts);

    let amount = web3.utils.toWei(amounts, "ether");

    if (accounts[0] === toAddress) {
      alert("Self transfer is not allowed.");
      return;
    }
    try {
      estGas = await contract.methods
        .transfer(toAddress, amount)
        .estimateGas({ from: accounts[0], to: toAddress });
    } catch (error) {
      if (error.message.includes("Erc20")) {
        alert(error.message.slice(20, 34));
        return;
      }
      alert(error.message);
    }
    await contract.methods
      .transfer(toAddress, amount)
      .send({ from: accounts[0], to: toAddress, gas: estGas });
    alert(`Tokens transferred: ${amounts} to: ${toAddress}`);
    console.log("Tokens transferred:", amounts, "to:", toAddress);
  } catch (error) {
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to transfer", error);
  }
}

async function approves() {
  if (!accounts) connect();
  try {
    let estGas;
    let approvedAddress = $("#approvedAddress").val();
    if (!web3.utils.isAddress(approvedAddress)) {
      alert("Please enter a valid address.");
      return;
    }

    let amounts = $("#approvedAmount").val();
    verifyAmount(amounts);
    let amount = web3.utils.toWei(amounts, "ether");
    try {
      estGas = await contract.methods
        .approve(approvedAddress, amount)
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      if (error.message.includes("Erc20")) {
        alert(error.message.slice(20, 59));
        return;
      }
      alert(error.message);
    }

    await contract.methods
      .approve(approvedAddress, amount)
      .send({ from: accounts[0], gas: estGas });
    alert(`Tokens approved: ${amounts} to: ${approvedAddress}`);
    console.log("Tokens approved:", amounts, "to:", approvedAddress);
  } catch (error) {
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to Approve", error);
  }
}

async function tokenTransferFrom() {
  if (!accounts) connect();
  try {
    let estGas;
    let spenderAddress = $("#spenderAddress").val();
    let recipientAddress = $("#recipientAddress").val();
    if (!web3.utils.isAddress(spenderAddress)) {
      alert("Please enter a valid spender address.");
      return;
    }
    if (!web3.utils.isAddress(recipientAddress)) {
      alert("Please enter a valid recipient address.");
      return;
    }

    let amounts = $("#amountTransfer").val();
    verifyAmount(amounts);
    let amount = web3.utils.toWei(amounts, "ether");
    if (spenderAddress === recipientAddress) {
      alert("Self transfer is not allowed.");
      return;
    }
    if (spenderAddress === accounts[0]) {
      try {
        estGas = await contract.methods
          .transfer(recipientAddress, amount)
          .estimateGas({ from: accounts[0], to: recipientAddress });
      } catch (error) {
        if (error.message.includes("Erc20")) {
          alert(error.message.slice(20, 34));
          return;
        }
        alert(error.message);
      }

      await contract.methods
        .transfer(recipientAddress, amount)
        .send({ from: accounts[0], to: recipientAddress, gas: estGas });
      alert(`Tokens transferred: ${amounts} to: ${recipientAddress}`);
      console.log("Tokens transferred:", amounts, "to:", recipientAddress);
    } else {
      try {
        estGas = await contract.methods
          .transferFrom(spenderAddress, recipientAddress, amount)
          .estimateGas({ from: accounts[0], to: recipientAddress });
      } catch (error) {
        if (error.message.includes("Erc20: Failed")) {
          alert(error.message.slice(20, 34));
          return;
        } else if (error.message.includes("Erc20: Not")) {
          alert(error.message.slice(20, 38));
          return;
        } else alert(error.message);
      }

      await contract.methods
        .transferFrom(spenderAddress, recipientAddress, amount)
        .send({ from: accounts[0], to: recipientAddress, gas: estGas });
      alert(
        `transfer successful: ${amounts} from: ${spenderAddress} to: ${recipientAddress}`
      );
      console.log(
        "transfer successful:",
        amounts,
        "from:",
        spenderAddress,
        "to:",
        recipientAddress
      );
    }
  } catch (error) {
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to transfer", error);
  }
}

async function allowanceCheck() {
  if (!accounts) connect();
  try {
    let tokenOwnerAddress = $("#tokenOwnerAddress").val();
    let approvalAddress = $("#approvalAddress").val();
    if (!web3.utils.isAddress(tokenOwnerAddress)) {
      alert("Please enter a valid spender address.");
      return;
    }
    if (!web3.utils.isAddress(approvalAddress)) {
      alert("Please enter a valid benificiary address.");
      return;
    }

    let amount = await contract.methods
      .allowance(tokenOwnerAddress, approvalAddress)
      .call();
    alert(
      `allowance: ${web3.utils.fromWei(
        amount
      )} from: ${tokenOwnerAddress} to: ${approvalAddress}`
    );
    console.log(
      "allowance:",
      web3.utils.fromWei(amount),
      "from:",
      tokenOwnerAddress,
      "to:",
      approvalAddress
    );
  } catch (error) {
    alert(error.message);
    console.error("Failed to fetch allowance.", error);
  }
}
