// Function to handle adding a new customer
function addCustomer(event) {
    event.preventDefault();
    const customerId = document.getElementById("customerId").value;
    const customerName = document.getElementById("customerName").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const customerAddress = document.getElementById("customerAddress").value;

    // Validation
    if (!customerId || !customerName || !customerEmail || !customerAddress) {
        alert("Please fill in all fields.");
        return;
    }

    // Create new row in customer list table
    const customerListTable = document.getElementById("customerList").getElementsByTagName("tbody")[0];
    const newRow = customerListTable.insertRow();
    newRow.innerHTML = `<td>${customerId}</td><td>${customerName}</td><td>${customerEmail}</td><td>${customerAddress}</td>`;
    alert("customer added");
}

// Function to handle deleting a customer
function deleteCustomer(event) {
    event.preventDefault();
    const customerId = document.getElementById("deleteCustomerId").value;

    // Find and remove the row with the specified customer ID
    const customerListTable = document.getElementById("customerList").getElementsByTagName("tbody")[0];
    for (let i = 0; i < customerListTable.rows.length; i++) {
        if (customerListTable.rows[i].cells[0].innerText === customerId) {
            customerListTable.deleteRow(i);
            alert("customer deleted!");
            return;
        }
    }
    alert("Customer not found.");
}

// Event listeners for form submissions
document.getElementById("addCustomerForm").addEventListener("submit", addCustomer);
document.getElementById("deleteCustomerForm").addEventListener("submit", deleteCustomer);
