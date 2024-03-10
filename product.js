// Function to handle adding a new product
function addProduct(event) {
    event.preventDefault();
    const productId = document.getElementById("productId").value;
    const productLabel = document.getElementById("productLabel").value;
    const unitPrice = document.getElementById("unitPrice").value;
    const quantityInStock = document.getElementById("quantityInStock").value;

    // Validation
    if (!productId || !productLabel || !unitPrice || !quantityInStock) {
        alert("Please fill in all fields.");
        return;
    }

    // Create new row in product list table
    const productListTable = document.getElementById("productList").getElementsByTagName("tbody")[0];
    const newRow = productListTable.insertRow();
    newRow.innerHTML = `<td>${productId}</td><td>${productLabel}</td><td>${unitPrice}</td><td>${quantityInStock}</td>`;
    alert("Item added successfully!");
}

// Function to handle deleting a product
function deleteProduct(event) {
    event.preventDefault();
    const productId = document.getElementById("deleteProductId").value;

    // Find and remove the row with the specified product ID
    const productListTable = document.getElementById("productList").getElementsByTagName("tbody")[0];
    for (let i = 0; i < productListTable.rows.length; i++) {
        if (productListTable.rows[i].cells[0].innerText === productId) {
            productListTable.deleteRow(i);
            alert("Item deleted successfully!");
            return;
        }
    }
    alert("Product not found.");
}

// Event listeners for form submissions
document.getElementById("addProductForm").addEventListener("submit", addProduct);
document.getElementById("deleteProductForm").addEventListener("submit", deleteProduct);
