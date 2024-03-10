// Function to handle placing a new order
function placeOrder(event) {
    event.preventDefault();
    const orderId = document.getElementById("orderId").value;
    const orderDate = document.getElementById("orderDate").value;
    const orderQuantity = document.getElementById("orderQuantity").value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const selectedBank = document.getElementById("bankSelect").value;

    // Validation
    if (!orderId || !orderDate || !orderQuantity || !paymentMethod || !selectedBank) {
        alert("Please fill in all fields.");
        return;
    }

    // Create new row in order list table
    const orderListTable = document.getElementById("orderList").getElementsByTagName("tbody")[0];
    const newRow = orderListTable.insertRow();
    newRow.innerHTML = `<td>${orderId}</td><td>${orderDate}</td><td>${orderQuantity}</td><td>${paymentMethod.value}</td><td>${selectedBank}</td>`;
    alert("order placed successfuly");
}

// Function to handle deleting an order
function deleteOrder(event) {
    event.preventDefault();
    const orderId = document.getElementById("deleteOrderId").value;

    // Find and remove the row with the specified order ID
    const orderListTable = document.getElementById("orderList").getElementsByTagName("tbody")[0];
    for (let i = 0; i < orderListTable.rows.length; i++) {
        if (orderListTable.rows[i].cells[0].innerText === orderId) {
            orderListTable.deleteRow(i);
            alert("order deleted");
            return;
        }
    }
    alert("Order not found.");
}

// Event listeners for form submissions
document.getElementById("placeOrderForm").addEventListener("submit", placeOrder);
document.getElementById("deleteOrderForm").addEventListener("submit", deleteOrder);
