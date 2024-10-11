let products = [];

function registerProduct() {
    const productName = document.getElementById('productName').value; // Captura o nome do produto
    const descriptionProduct = document.getElementById('descriptionProduct').value; // Captura a descrição do produto
    const productValue = parseFloat(document.getElementById('productValue').value); // Captura e converte o valor do produto
    const availableForSale = document.querySelector('input[name="type"]:checked').value; // Captura o valor do radio button

    
    if (productName && !isNaN(productValue)) {
        products.push({ name: productName, value: productValue });

        clearForm();
        updateProductList(); // Atualiza a listagem
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}

function updateProductList() {
    // Ordena os produtos por valor
    products.sort((a, b) => a.value - b.value);

    const productListBody = document.querySelector('#productList tbody');
    productListBody.innerHTML = ''; // Limpa a tabela atual

    // Adiciona cada produto à tabela
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${product.name}</td><td>${product.value.toFixed(2)}</td>`;
        productListBody.appendChild(row);
    });

    const addNewProductButton = document.getElementById('addNewProduct');
    if (addNewProductButton) {
        addNewProductButton.style.display = 'block'; // Mostra o botão
    }
}

function clearForm() {
    document.getElementById('productForm').reset();
}

// Evento de clique do botão cancelar
document.getElementById('cancel').addEventListener('click', clearForm);

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento ao botão de cadastrar
    document.getElementById('register').addEventListener('click', registerProduct);
});


// Só para deixar registrado, tenho noçoes em backend com node e banco de dados