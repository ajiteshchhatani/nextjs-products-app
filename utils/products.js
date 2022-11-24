export const fetchProductData = async (limit = 10, skip = 0) => {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    return data;
}

export const fetchProductBrands = async() => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    const { products } = data;
    const brands = products.map((p) => p.brand);
    return brands;
}