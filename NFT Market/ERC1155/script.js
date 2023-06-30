// import connect from "../script.js";
let contractAddress = "0x580bbfd2A3992b2513FbC6E09780740507D0c91e";
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
        name: "account",
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
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
      {
        internalType: "uint256",
        name: "numberOfTokens",
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
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "numberOfTokens",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "exists",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numberOfTokens",
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
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "numberOfTokens",
        type: "uint256[]",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintedIds",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];
let web3;
let accounts;
let contract;
let sepolia = 11155111;
let userAccount;

async function contractInfo(accountAddress) {
  contract = new web3.eth.Contract(abi, contractAddress);
  let owner = await contract.methods.owner().call();
  -$("#ownerAddress").html(`Owner Address: ${owner.toLowerCase()}`);
  $("#userAddress").html(`User Address: ${accountAddress}`);
}

function verifyTokenId(idToVerify) {
  if (isNaN(idToVerify) || !idToVerify || idToVerify <= 0) {
    swal("Please enter a valid input.");
    return false;
  } else {
    return true;
  }
}
function verifyInput(input) {
  if (!input) {
    swal("Please enter a valid input.");
    return false;
  }
  input = input.trim();
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i]) && input[i] != ",") {
      swal("invalid input");
      return false;
    }
  }
  return true;
}

function verifyAmount(input) {
  let inputs = input.split(",").map(Number);
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i] <= 0) {
      swal("invalid input");
      return false;
    }
  }

  if (!input) {
    swal("Please enter a valid input.");
    return false;
  }
  input = input.trim();
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i]) && input[i] != ",") {
      swal("invalid input");
      return false;
    }
  }

  return true;
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
        userAccount = accounts[0];
      } else {
        swal("Metamask is not installed, redirecting to metamask");
        window.location.href = "https://metamask.io";
      }
      await checkNetwork();
      contractInfo(userAccount);
      await swal("Connected to Metamask");
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
  web3.eth.currentProvider.on("accountsChanged", async function (accounts) {
    if (!accounts.length) {
      location.reload();
    } else {
      userAccount = accounts[0];
      contractInfo(userAccount);
    }
  });
}

function edButton() {
  if ($(".button").is(":disabled")) {
    $(".button").prop("disabled", false);
    $(".connect").prop("disabled", false);
  } else {
    $(".button").prop("disabled", true);
    $(".connect").prop("disabled", true);
  }
  console.log($(".button").is(":disabled"));
}

async function mintTokens() {
  if (!accounts) await connect();
  checkNetwork();
  edButton();
  try {
    let tokenId = $("#idforminting").val();
    let amount = $("#amountforminting").val();
    if (!verifyTokenId(tokenId)) return;

    if (!verifyAmount(amount)) return;

    let estGas;
    try {
      estGas = await contract.methods
        .mint(tokenId, amount)
        .estimateGas({ from: userAccount });
    } catch (error) {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (
        error.message.includes("ERC1155") ||
        error.message.includes("Myerc1155")
      ) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }
    await contract.methods
      .mint(tokenId, amount)
      .send({ from: userAccount, gas: estGas });
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
  contractInfo(userAccount);
}

async function batchMint() {
  checkNetwork();
  if (!accounts) await connect();
  checkNetwork();
  try {
    edButton();
    let estGas;
    let id = $("#idsforminting").val();
    console.log(id);
    if (!verifyInput(id)) return;

    let ids = id.split(",").map(Number);
    let amount = $("#amountsforminting").val();
    if (!verifyAmount(amount)) return;
    let amounts = amount.split(",").map(Number);
    try {
      estGas = await contract.methods
        .mintBatch(ids, amounts)
        .estimateGas({ from: userAccount });
    } catch (error) {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }
    await contract.methods
      .mintBatch(ids, amounts)
      .send({ from: userAccount, gas: estGas });
    swal(`${amounts} of ${ids} minted successfully`);
    console.log(`${amounts} of ${ids} minted successfully`);
    contractInfo(userAccount);
  } catch (error) {
    edButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    }
    swal(error.message);
    console.error("Error minting token", error);
  }
  edButton();
  contractInfo(userAccount);
}

async function burnTokens() {
  if (!accounts) await connect();
  checkNetwork();
  edButton();
  try {
    let estGas;
    let tokenId = $("#idforburning").val();
    let amount = $("#amountforburning").val();
    if (!verifyTokenId(tokenId)) return;

    if (!verifyAmount(amount)) return;

    try {
      estGas = await contract.methods
        .burn(tokenId, amount)
        .estimateGas({ from: userAccount });
    } catch (error) {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }
    await contract.methods
      .burn(tokenId, amount)
      .send({ from: userAccount, gas: estGas });
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
  contractInfo(userAccount);
}

async function balanceOf() {
  if (!accounts) await connect();
  checkNetwork();
  try {
    let account = $("#accountforchecking").val();
    let tokenId = $("#idforchecking").val();
    let balance = await contract.methods.balanceOf(account, tokenId).call();
    swal(`${account} has ${balance} token of id ${tokenId}`);
  } catch (error) {
    swal(error.message);
    console.error("Failed to fetch Balance.", error);
  }
}

async function balanceOfBatch() {
  if (!accounts) await connect();
  checkNetwork();
  try {
    let id = $("#idsforchecking").val();
    if (!verifyInput(id)) return;
    let ids = id.split(",").map(Number);
    let account = $("#accountsforchecking").val();
    let accounts = account.split(",");
    console.log(accounts);
    let balance = await contract.methods.balanceOfBatch(accounts, ids).call();
    swal(`${accounts} has ${balance} token of id ${ids}`);
  } catch (error) {
    swal(error.message);
    console.error("Failed to fetch Balance.", error);
  }
}

async function approve() {
  if (!accounts) await connect();
  checkNetwork();
  edButton();
  try {
    let estGas;
    let operator = $("#addressforapproval").val();
    let isApproved = $("input[name=isApprove]:checked").val();
    bisApproved = isApproved === "approve" ? true : false;
    // if (isApproved === "approve") bisApproved = true;
    // else if (isApproved === "reject") bisApproved = false;
    // else {
    //   swal(`Please select a button`);
    //   return;
    // }
    console.log(bisApproved);
    if (!web3.utils.isAddress(operator)) {
      swal("Please enter a valid address");
      return;
    }
    try {
      estGas = await contract.methods
        .setApprovalForAll(operator, bisApproved)
        .estimateGas({ from: userAccount });
    } catch {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }
    await contract.methods
      .setApprovalForAll(operator, bisApproved)
      .send({ from: userAccount, gas: estGas });
    swal(`operator ${operator} is ${bisApproved}`);
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
}

async function checkApproval() {
  if (!accounts) await connect();
  checkNetwork();
  try {
    let owner = $("#owneraddressforcheckingapproval").val();
    let operator = $("#operatoraddressforcheckingapproval").val();
    let value = await contract.methods.isApprovedForAll(owner, operator).call();
    swal(`${operator} is approved for all ${value}`);
    console.log(`${operator} is approved for all ${value}`);
  } catch (error) {
    swal(error.message);
    console.error("Failed to fetch allowance.", error);
  }
}

async function safeTransfer() {
  if (!accounts) await connect();
  checkNetwork();
  edButton();
  try {
    let owner = $("#fromAddress").val();
    let receiver = $("#toAddress").val();
    let tokenId = $("#idfortransfer").val();
    let amount = $("#amountfortransfer").val();
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
    verifyAmount(amount);
    try {
      estGas = await contract.methods
        .safeTransferFrom(owner, receiver, tokenId, amount, 0x00)
        .estimateGas({ from: userAccount });
    } catch (error) {
      edButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }
    await contract.methods
      .safeTransferFrom(owner, receiver, tokenId, amount, 0x00)
      .send({ from: userAccount, gas: estGas });
    swal(
      `${amount} tokens of id ${tokenId} transferred successfully to ${receiver} from ${owner}`
    );
    console.log(
      `${amount} tokens of id ${tokenId} transferred successfully to ${receiver} from ${owner}`
    );
  } catch (error) {
    edButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    }
    swal(error.message);
    console.error("Error burning tokens", error);
  }
  contractInfo(userAccount);
  edButton();
}

async function safeBatchTransfer() {
  if (!accounts) await connect();
  checkNetwork();
  edButton();
  try {
    let from = $("#fromAddresses").val();
    let to = $("#toAddresses").val();
    if (!web3.utils.isAddress(from)) {
      swal("Please enter a valid owner address");
      return;
    }
    if (!web3.utils.isAddress(to)) {
      swal("Please enter a valid owner address");
      return;
    }

    let id = $("#idsfortransfer").val();
    if (!verifyInput(id)) return;
    let ids = id.split(",").map(Number);
    let amount = $("#amountsfortransfer").val();
    if (!verifyAmount(id)) return;
    let amounts = amount.split(",").map(Number);
    if (ids.length !== amounts.length) {
      swal(`Length mismatch: ${ids.length} and ${amounts.length}`);
      return;
    }
    let estGas;
    try {
      estGas = await contract.methods
        .safeBatchTransferFrom(from, to, ids, amounts, 0x00)
        .estimateGas({ from: userAccount });
    } catch (error) {
      edButton();
      console.log(error);
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error.message);
        return;
      }
    }
    await contract.methods
      .safeBatchTransferFrom(from, to, ids, amounts, 0x00)
      .send({ from: userAccount, gas: estGas });
    swal(
      `${amounts} tokens of id ${ids} transferred successfully to ${to} from ${from}`
    );
    console.log(
      `${amounts} tokens of id ${ids} transferred successfully to ${to} from ${from}`
    );
  } catch (error) {
    edButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    }
    swal(error.message);
    console.error("Error burning tokens", error);
  }
  contractInfo(userAccount);
  edButton();
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
    const tokens = await contract.methods.mintedIds().call();
    console.log(tokens);
    for (let i = 0; i < tokens.length; i++) {
      let index = i + 1;
      let balance;
      try {
        balance = await contract.methods.balanceOf(userAccount, index).call();
        if (balance > 0) {
          const uri = await contract.methods.tokenURI(index).call();
          const response = await fetch(uri);
          const jsonData = await response.json();

          $("#myTokens").append(`
          <div id=${i} class="card">
            <img src="${jsonData.image}" class="card-img-top" alt="NFT IMAGE">
            <div class="card-body">
              <h5 class="card-title">Id: ${index}</h5>
              <h5 class="card-title">Number of Tokens: ${balance}</h5>
              <h5 class="card-title">Name: ${jsonData.name}</h5>
              <h5 class="card-title">Description: ${jsonData.descrption}</h5>
            </div>
          </div>
        `);
        }
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    showNFTs.textContent = "My Tokens";
    container.style.display = "initial";
    myTokens.style.display = "initial";
    info.style.display = "flex";
  }
}
