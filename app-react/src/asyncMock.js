export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsData = [
                { id: '1', name: 'Manteca Sancor', image: 'manteca.jpg', description: 'Manteca', precio: 50, stock: 10, category: 'Lácteos' },
                { id: '2', name: 'Crema Sancor', image: 'cremaleche.jpg', description: 'Crema Grande', precio: 80, stock: 13, category: 'Lácteos' },
                { id: '3', name: 'Leche La Serenisima', image: 'lecheserenisima.jpg', description: 'Sachet La Serenisima', precio: 30, stock: 15, category: 'Lácteos' },
                { id: '4', name: 'Flan Sancor', image: 'flansancor.jpg', description: 'Flanes chicos', precio: 60, stock: 5, category: 'Postres' },
                { id: '5', name: 'Yogurt LS', image: 'yogurtchiquito.jpg', description: 'Yogurt Chico', precio: 40, stock: 15, category: 'Lácteos' },
                { id: '6', name: 'Leche Bebe Sancor', image: 'lechebebe.jpg', description: 'Leche Bebe', precio: 25, stock: 15, category: 'Lácteos' },
                { id: '7', name: 'Queso Cremoso LS', image: 'quesocremoso.jpg', description: 'Queso Cremoso La Serenisima', precio: 90, stock: 12, category: 'Lácteos' },
                { id: '8', name: 'Yogurt Griego LS', image: 'yogurtgriego.jpg', description: 'Yogurt Griego La Serenisima', precio: 70, stock: 8, category: 'Lácteos' },
                { id: '9', name: 'Dulce De Leche LS', image: 'ddl.jpg', description: 'Dulce De Leche La Serenisima', precio: 55, stock: 15, category: 'Postres' },
            ];
            resolve(productsData);
        }, 2000); // Resuelve la promesa después de 2 segundos
    });
};

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};
