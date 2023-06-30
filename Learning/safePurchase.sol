// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface SafePurchase {
    struct Items {
        string itemName;
        string itemDetails;
        uint256 itemValue;
        uint256 itemStock;
    }

    struct wholeTransactions {
        uint256 transactionId;
        address buyerAddr;
        uint256 itemKey;
        uint256 transactionAmount;
        string status;
    }

    struct myTransactions {
        uint256 myTransactionCount;
        uint256 transactionId;
        uint256 itemKey;
        uint256 transactionAmount;
        string status;
    }

    event loguint(uint256 indexed integer);
    event logstring(string);

    function addItems(
        string memory itemName,
        string memory itemDetails,
        uint256 itemValue,
        uint256 itemStock
    ) external;

    function viewItems() external view returns (Items[] memory);

    function deleteItem(uint256 itemKey) external returns (string memory);

    function buyItem(uint256, uint256) external payable;

    function viewAllTransactions()
        external
        view
        returns (wholeTransactions[] memory);

    // function viewMyTransactions() external;

    function received(uint256 transactionId, bool isReceived) external payable;
}

contract SafePurchaseFunctions is SafePurchase {
    address payable private seller;
    uint256 private itemCount;
    uint256 private wholeTransactionCount;

    mapping(uint256 => Items) private itemInfo;
    mapping(uint256 => wholeTransactions) private wholeTransactionDetails;
    mapping(address => myTransactions[]) private myTransactionDetails;

    constructor() {
        seller = payable(msg.sender);
    }

    modifier onlyseller() {
        require(
            msg.sender == seller,
            "SafePurchase: This action is restricted to the seller"
        );
        _;
    }

    function addItems(
        string memory itemName,
        string memory itemDetails,
        uint256 itemValue,
        uint256 itemStock
    ) public onlyseller {
        itemInfo[itemCount].itemName = itemName;
        itemInfo[itemCount].itemDetails = itemDetails;
        itemInfo[itemCount].itemValue = itemValue;
        itemInfo[itemCount].itemStock = itemStock;
        itemCount++;
    }

    function viewItems() public view returns (Items[] memory) {
        Items[] memory itemArray = new Items[](itemCount);

        for (uint256 index = 0; index < itemCount; index++) {
            itemArray[index] = itemInfo[index];
        }

        return (itemArray);
    }

    function deleteItem(
        uint256 itemKey
    ) public onlyseller returns (string memory) {
        require(itemKey < itemCount, "SafePurchase: Invalid item key");
        delete itemInfo[itemKey];
        for (uint256 index = itemKey; index < itemCount; index++) {
            itemInfo[index] = itemInfo[index + 1];
        }

        itemCount--;
        return "SafePurchase: Item deleted successfully.";
    }

    function buyItem(uint256 itemKey, uint256 itemQuantity) public payable {
        require(itemKey < itemCount, "SafePurchase: Invalid item key");
        require(
            itemQuantity <= itemInfo[itemKey].itemStock,
            "SafePurchase: Not Enough Stock"
        );
        require(
            msg.value == itemInfo[itemKey].itemValue * itemQuantity,
            "SafePurchase: You must send enough ether."
        );
        itemInfo[itemKey].itemStock -= itemQuantity;
        wholeTransactionDetails[wholeTransactionCount].transactionId =
            wholeTransactionCount +
            1;
        wholeTransactionDetails[wholeTransactionCount].itemKey = itemKey;
        wholeTransactionDetails[wholeTransactionCount].buyerAddr = msg.sender;
        wholeTransactionDetails[wholeTransactionCount].transactionAmount = msg
            .value;
        wholeTransactionDetails[wholeTransactionCount]
            .status = "Order Confirmed";
        wholeTransactionCount++;

        // uint length = myTransactionDetails[msg.sender].length;

        // myTransactionDetails[msg.sender][0].transactionId = wholeTransactionCount;
        // myTransactionDetails[msg.sender][0].itemKey = itemKey;
        // myTransactionDetails[msg.sender][0].transactionAmount = msg.value;
        // myTransactionDetails[msg.sender][0].status = "Order Confirmed";
        // myTransactionDetails[msg.sender].myTransactionCount++;

        // emit logstring("Purchase Successful.");
    }

    function viewAllTransactions()
        public
        view
        returns (wholeTransactions[] memory)
    {
        wholeTransactions[] memory transactionArray = new wholeTransactions[](
            wholeTransactionCount
        );
        for (uint256 index = 0; index < wholeTransactionCount; index++) {
            transactionArray[index] = wholeTransactionDetails[index];
        }

        return transactionArray;
    }

    // function viewMyTransactions() public view returns (uint, uint, uint, string memory){
    //     uint[] memory myTransactionArray;
    //     for(uint index =0; index<wholeTransactionCount; index++){
    //         if(wholeTransactionDetails[index].buyerAddr==msg.sender){
    //             myTransactionArray.push(wholeTransactionDetails[index].transactionId);
    //         }
    //     }
    // }

    // function viewMyTransactions() public view {
    //     require(
    //         myTransactionDetails[msg.sender].myTransactionCount != 0,
    //         "No Transactions Found."
    //     );

    //     for (
    //         uint index = 0;
    //         index < myTransactionDetails[msg.sender].myTransactionCount;
    //         index++
    //     ) {
    //         uint[] myTransactionArray = DisplayTransactions();
    //     }
    // }

    // function DisplayTransaction() public view returns() {

    // }

    // function mytransactiondetails(address buyer)
    //     public
    //     view
    //     returns (uint256 _transactionCount, uint256[] memory _transactionId, uint256[] memory _itemKey, uint256[] memory _transactionAmount, string[] memory status)
    // {
    //     _transactionCount = myTransactionDetails[buyer].myTransactionCount;
    //     _transactionId = myTransactionDetails[buyer].transactionId;
    //     _itemKey = myTransactionDetails[buyer].itemKey;
    //     _transactionAmount = myTransactionDetails[buyer].transactionAmount;

    // }

    function received(uint256 transactionId, bool isReceived) public payable {
        for (uint256 index = 0; index < wholeTransactionCount; index++) {
            if (wholeTransactionDetails[index].transactionId == transactionId) {
                require(
                    msg.sender == wholeTransactionDetails[index].buyerAddr,
                    "SafePurchase: No such transaction found at your addresss."
                );
                if (isReceived) {
                    wholeTransactionDetails[index].status = "Order Received.";
                    seller.transfer(
                        wholeTransactionDetails[index].transactionAmount
                    );
                    break;
                } else {
                    wholeTransactionDetails[index].status = "Order Cancelled.";
                    payable(msg.sender).transfer(
                        wholeTransactionDetails[index].transactionAmount
                    );
                    break;
                }
            }
        }
    }
}
