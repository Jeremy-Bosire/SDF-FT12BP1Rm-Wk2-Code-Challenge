document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("shoppingForm");
    const itemInput = document.getElementById("itemInput");
    const shoppingList = document.getElementById("shoppingList");
  
    // Array to store shopping items
    const items = [];
  
    // Function to update the displayed list
    function updateList() {
      shoppingList.innerHTML = ""; // Clear the current list
      items.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
  
        const itemText = document.createElement("span");
        itemText.textContent = item;
  
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
          items.splice(index, 1); // Remove item from array
          updateList(); // Re-render the list
        });
  
        itemDiv.appendChild(itemText);
        itemDiv.appendChild(removeButton);
        shoppingList.appendChild(itemDiv);
      });
    }
  
    // Function to add an item
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const itemName = itemInput.value.trim();
      if (itemName === "") {
        alert("Please enter an item!");
        return;
      }
  
      items.push(itemName); // Add item to the array
      updateList(); // Re-render the list
  
      itemInput.value = ""; // Clear input field
    });
  });
  