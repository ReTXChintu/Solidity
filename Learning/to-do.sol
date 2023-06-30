// SPDX-License-Identifier: MIT

pragma solidity ^0.8.5;

contract ToDo {
    uint256 public count;
    uint8 public completed;
    struct Task {
        string tName;
        string tDescription;
    }

    mapping(uint256 => Task) private tasks;

    function addTask(string memory tName, string memory tDescription) public {
        tasks[count].tName = tName;
        tasks[count].tDescription = tDescription;
        count++;
    }

    function updateTask(
        string memory oldTaskName,
        string memory newTaskName,
        string memory newDescription
    ) public returns (string memory) {
        for (uint256 index = 0; index < count; index++) {
            bool isMatched = keccak256(abi.encodePacked(oldTaskName)) ==
                keccak256(abi.encodePacked(tasks[index].tName));
            if (isMatched) {
                tasks[index].tName = newTaskName;
                tasks[index].tDescription = newDescription;
                return "ToDo: Updated Successfully.";
            }
        }
        return "ToDo: Task not Found.";
    }

    function viewTasks() public view returns (Task[] memory) {
        Task[] memory arr = new Task[](count);

        for (uint256 index = 0; index < count; index++) {
            arr[index] = tasks[index];
        }

        return (arr);
    }

    function deleteTask(string memory taskName) public returns (string memory) {
        uint256 index;
        for (index = 0; index < count; index++) {
            bool isMatched = keccak256(abi.encodePacked(taskName)) ==
                keccak256(abi.encodePacked(tasks[index].tName));

            if (isMatched == true) {
                delete tasks[index];
                for (uint jIndex = index; jIndex < count; jIndex++) {
                    tasks[jIndex] = tasks[jIndex + 1];
                }
                count--;
                return "ToDo: Deleted Successfully.";
            }
        }
        return "ToDo: Task not Found.";
    }

    function markComplete(
        string memory taskName
    ) public returns (string memory) {
        uint256 index;
        for (index = 0; index < count; index++) {
            bool isMatched = keccak256(abi.encodePacked(taskName)) ==
                keccak256(abi.encodePacked(tasks[index].tName));
            if (isMatched == true) {
                completed++;
                return "ToDo: Marked Completed.";
            }
        }
        return "ToDo: Task not Found.";
    }
}

// 0xa969bbded10868beb2bf918796cec52791672cecec5ddd953f6a5d5940017982
// 0xa969bbded10868beb2bf918796cec52791672cecec5ddd953f6a5d5940017982
