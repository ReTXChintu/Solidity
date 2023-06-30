let contractAddress = "0x7b9CE8afA34b7876821c208c21Dd9D8f5523b65d";
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ownedTokens",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
    name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
  let nBalance = await contract.methods.balanceOf(accountAddress).call();
  let nTokenNumber = await contract.methods.tokenId().call();

  $("#tokenName").html(`Name: ${sTokenName}`);
  $("#symbol").html(`Symbol: ${sSymbol}`);
  $("#balance").html(`My Balance: ${nBalance}`);
  $("#userAddress").html(`User Address: ${accountAddress}`);
  $("#tokennumber").html(`Token Number: ${nTokenNumber}`);
}

function verifyTokenId(tokenId) {
  if (isNaN(tokenId) || tokenId <= 0 || !tokenId) {
    swal("Please enter a valid tokenId");
    return;
  }
}

function edButton() {
  if ($(".button").is(":disabled")) {
    $(".button").prop("disabled", false);
    $(".connect").prop("disabled", false);
  } else {
    $(".button").prop("disabled", true);
    $(".connect").prop("disabled", true);
  }
}

async function checkNetwork() {
  let network = await web3.eth.getChainId();
  if (network !== sepolia) {
    swal("Switching to Sepolia network");
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
  let elem = document.getElementById("connectButton");
  if (elem.style.display != "none") {
    try {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      } else {
        swal("Metamask is not installed, redirecting to metamask");
        window.location.href = "https://metamask.io";
      }
      await checkNetwork();
      contractInfo(accounts[0]);
      swal("Connected to Metamask");
      elem.style.display = "none";
      let showNFTs = document.getElementById("showNFTs");
      showNFTs.style.display = "flex";
      let disconnectButton = document.getElementById("disconnectButton");
      disconnectButton.style.display = "flex";
    } catch (error) {
      console.log(error);
    }
  } else {
    location.reload();
  }
}

async function mintTokens() {
  checkNetwork();
  if (!accounts) await connect();
  edButton();
  try {
    let estGas;
    try {
      estGas = await contract.methods
        .safeMint()
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }
    await contract.methods.safeMint().send({ from: accounts[0], gas: estGas });
    swal(`Token minted`);
    console.log(`Token Minted`);
  } catch (error) {
    edButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    }
    swal(error.message);
  }
  edButton();
  contractInfo(accounts[0]);
}

async function burnTokens() {
  if (!accounts) await connect();
  edButton();
  try {
    let estGas;
    let tokenId = $("#tokenId").val();
    verifyTokenId(tokenId);

    try {
      estGas = await contract.methods
        .burn(tokenId)
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }
    await contract.methods
      .burn(tokenId)
      .send({ from: accounts[0], gas: estGas });
    swal(`Token with id ${tokenId} burned.`);
    console.log(`Token with id ${tokenId} burnt.`);
  } catch (error) {
    edButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    }
    swal(error.message);
    console.error("Error burning tokens", error);
  }
  edButton();
  contractInfo(accounts[0]);
}

async function approves() {
  if (!accounts) await connect();
  edButton();
  try {
    let estGas;
    let approvedAddress = $("#approvedAddress").val();
    if (!web3.utils.isAddress(approvedAddress)) {
      swal("Please enter a valid address.");
      return;
    }

    let tokenId = $("#approvedId").val();
    verifyTokenId(tokenId);
    try {
      estGas = await contract.methods
        .approve(approvedAddress, tokenId)
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }

    await contract.methods
      .approve(approvedAddress, tokenId)
      .send({ from: accounts[0], gas: estGas });
    swal(`Token id ${tokenId} approved to: ${approvedAddress}`);
    console.log(`Token id ${tokenId} approved to: ${approvedAddress}`);
  } catch (error) {
    edButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    } else {
      swal(error.message);
      console.error("Failed to Approve", error);
    }
  }
  edButton();
}

async function approveAll() {
  if (!accounts) await connect();
  let estGas;
  let operator = $("#operator").val();
  let isApproved = $("input[name=isApprove]:checked").val();
  let bisApproved = isApproved === "true" ? true : false;
  if (!web3.utils.isAddress(operator)) {
    swal("Please enter a valid address");
    return;
  }
  edButton();
  try {
    try {
      estGas = await contract.methods
        .setApprovalForAll(operator, bisApproved)
        .estimateGas({ from: accounts[0] });
    } catch {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }
    await contract.methods
      .setApprovalForAll(operator, bisApproved)
      .send({ from: accounts[0], gas: estGas });
    swal(`operator ${operator} is ${bisApproved}`);
  } catch (error) {
    edButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    } else {
      swal(error.message);
      console.error("Failed to Approve", error);
    }
  }
}

async function getApproved() {
  if (!accounts) await connect();
  try {
    let tokenId = $("#tokenIdForChecking").val();
    console.log(tokenId);
    verifyTokenId(tokenId);
    let spender = await contract.methods.getApproved(tokenId).call();
    swal(`Spender of token Id ${tokenId} is ${spender}`);
    console.log(`Spender of token Id ${tokenId} is ${spender}`);
  } catch (error) {
    swal(error.message);
    console.error("Failed to fetch allowance.", error);
  }
}

async function isApprovedForAll() {
  if (!accounts) await connect();
  try {
    let owner = $("#owner").val();
    let operator = $("#operator1").val();
    let value = await contract.methods.isApprovedForAll(owner, operator).call();
    swal(`${operator} is approved for all ${value}`);
    console.log(`${operator} is approved for all ${value}`);
  } catch (error) {
    swal(error.message);
    console.error("Failed to fetch allowance.", error);
  }
}

async function balanceOf() {
  if (!accounts) await connect();
  try {
    let user = $("#user").val();
    let balance = await contract.methods.balanceOf(user).call();
    swal(`Balance of ${user} is ${balance}`);
    console.log(`Balance of ${user} is ${balance}`);
  } catch (error) {
    swal(error.message);
    console.error("Failed to fetch allowance.", error);
  }
}

async function ownerOf() {
  if (!accounts) await connect();
  try {
    let tokenId = $("#idforchecking").val();
    let owner = await contract.methods.ownerOf(tokenId).call();
    swal(`Owner of ${tokenId} is ${owner}`);
    console.log(`Owner of ${tokenId} is ${owner}`);
  } catch (error) {
    let oErrorJSON = JSON.parse(
      error.message.substr(
        error.message.indexOf("{"),
        error.message.lastIndexOf("}")
      )
    );
    let oError = oErrorJSON.originalError.message;
    if (error.message.includes("ERC721")) {
      swal(oError.slice(20));
      return;
    } else swal(error.message);
  }
}

async function transferFrom() {
  if (!accounts) await connect();
  let owner = $("#sender").val();
  let receiver = $("#receiver").val();
  let tokenId = $("#tokenToTransfer").val();
  let estGas;
  if (!web3.utils.isAddress(owner)) {
    swal("Please enter a valid owner address");
    return;
  }
  if (!web3.utils.isAddress(receiver)) {
    swal("Please enter a valid receiver address");
    return;
  }
  verifyTokenId(tokenId);
  edButton();
  if (error.message.includes("User denied")) {
    swal("you have denied the transaction");
    return;
  } else {
    swal(error.message);
    console.error("Failed to Approve", error);
  }
  edButton();
  try {
    try {
      estGas = await contract.methods
        .transferFrom(owner, receiver, tokenId)
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }

    await contract.methods
      .transferFrom(owner, receiver, tokenId)
      .send({ from: accounts[0], gas: estGas });
    swal(
      `Token ${tokenId} transferred successfully to ${receiver} from ${owner}`
    );
    console.log(
      `Token ${tokenId} transferred successfully to ${receiver} from ${owner}`
    );
  } catch (error) {
    edButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    } else {
      swal(error.message);
      console.error("Failed to Transfer", error);
    }
  }
  contractInfo(accounts[0]);
}

async function safeTransferFrom() {
  if (!accounts) await connect();
  let owner = $("#sender1").val();
  let receiver = $("#receiver1").val();
  let tokenId = $("#tokenToSafeTransfer").val();
  let estGas;
  if (!web3.utils.isAddress(owner)) {
    swal("Please enter a valid owner address");
    return;
  }
  if (!web3.utils.isAddress(receiver)) {
    swal("Please enter a valid receiver address");
    return;
  }
  verifyTokenId(tokenId);
  edButton();
  try {
    try {
      estGas = await contract.methods
        .safeTransferFrom(owner, receiver, tokenId)
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }

    await contract.methods
      .safeTransferFrom(owner, receiver, tokenId)
      .send({ from: accounts[0], gas: estGas });
    swal(
      `Token ${tokenId} transferred successfully to ${receiver} from ${owner}`
    );
    console.log(
      `Token ${tokenId} transferred successfully to ${receiver} from ${owner}`
    );
  } catch (error) {
    edButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    } else {
      swal(error.message);
      console.error("Failed to Approve", error);
    }
  }
  edButton();
  contractInfo(accounts[0]);
}

async function showNFTs() {
  $("#myTokens").empty();
  let showNFTs = document.getElementById("showNFTs");
  let myTokens = document.getElementById("myTokens");
  let info = document.getElementById("info");
  let container = document.getElementById("wholecontainer");
  if (showNFTs.textContent.trim() === "My Tokens") {
    showNFTs.textContent = "Home";
    container.style.display = "none";
    myTokens.style.display = "initial";
    info.style.display = "none";
    const tokens = [];
    const totalTokens = await contract.methods.tokenId().call();
    let indexed = 0;
    for (let i = 0; i < totalTokens; i++) {
      let index = i + 1;
      let owner;
      try {
        owner = await contract.methods.ownerOf(index).call();
        owner = owner.toLowerCase();
        if (owner === accounts[0]) {
          tokens[indexed] = index;
          indexed++;
          console.log(indexed);
        }
      } catch (error) {}
    }
    if (tokens.length === 0) {
      return;
    } else {
      // $("#myTokens").append(`My Tokens`);
      for (let id = 0; id < tokens.length; id++) {
        const tokenId = tokens[id];
        console.log("Hello");
        const uri = await contract.methods.tokenURI(tokenId).call();
        const response = await fetch(uri);
        const jsonData = await response.json();

        $("#myTokens").append(`
          <div id=${id} class="card">
            <img src="${jsonData.image}" class="card-img-top" alt="NFT IMAGE">
            <div class="card-body">
              <h5 class="card-title">Id: ${tokenId}</h5>
              <h5 class="card-title">Name: ${jsonData.name}</h5>
              <h5 class="card-title">Description: ${jsonData.descrption}</h5>
            </div>
          </div>
        `);
      }
    }
  } else {
    showNFTs.textContent = "My Tokens";
    container.style.display = "initial";
    myTokens.style.display = "initial";
    info.style.display = "flex";
  }
}
