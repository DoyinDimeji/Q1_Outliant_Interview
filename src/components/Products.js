import { useContext, useEffect, useRef, useState } from "react";
import { ACTION_TYPES } from "../constants/strings";
import { AppDispatchContext } from "../contexts/AppContexts";

const Products = () => {
    const dispatch = useContext(AppDispatchContext);
    const defaultProducts = [{
        id: 1,
        Name: "Rice",
        Price: 500
    },
    {
        id: 2,
        Name: "Beans",
        Price: 439
    },
    {
        id: 3,
        Name: "Egg",
        Price: 34
    },
    {
        id: 4,
        Name: "Car",
        Price: 10306
    },
    {
        id: 5,
        Name: "Plutonium",
        Price: 854983490
    }];
    const [products, setProducts] = useState([...defaultProducts]);
    const [filtProducts, setFiltProducts] = useState([]);
    const nameInputRef = useRef(null);
    const priceInputRef = useRef(null);

    useEffect (() => {
        dispatch({
            type: ACTION_TYPES.CHANGE_PAGE_TITLE,
            value: "Products"
        });
    }, []);

    const searchForProducts = (e) => {
        const filteredProducts = products.filter(p => p.Name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFiltProducts([...filteredProducts]); 
    }

    const resetProducts = () => {
        setFiltProducts([]);
    }

    const addProduct = () => {
        if(nameInputRef.current.value.length > 0 && priceInputRef.current.value > 0){
            setProducts([...products, {
                id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
                Name: nameInputRef.current.value,
                Price: parseInt(priceInputRef.current.value)
            }])
        }
    }

    const editProduct = (productId) => {
        
    }

    const deleteProduct = (productId) => {
        const filteredProducts = products.filter(p => p.id !== productId);
        setProducts([...filteredProducts]);
    }

    return(
        <div className="products">
            <div className="header">
                <h1>Products</h1>
                <input type="text" placeholder="Search for keywords..." onChange={e => searchForProducts(e)} onBlur={() => resetProducts()}/>
            </div>
            <div className="table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    {
                        filtProducts.length > 0
                        ?
                        filtProducts.map((product) => 
                            <tr key={product.id}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>
                                    <a className="button" onClick={() => editProduct(product.id)}>Edit</a>
                                    <a className="button-white" onClick={() => deleteProduct(product.id)}>Delete</a>   
                                </td>
                            </tr>
                        )
                        :
                        products.map((product) => 
                            <tr key={product.id}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>
                                    <a className="button" onClick={() => editProduct(product.id)}>Edit</a>
                                    <a className="button-white" onClick={() => deleteProduct(product.id)}>Delete</a>   
                                </td>
                            </tr>
                        )
                    }
                </table>
                <div className="add-new">
                    <h3>Add New Product</h3>
                    <p>Fill in the required information to add new products</p>
                    <input type="text" placeholder="Name" ref={nameInputRef}/>
                    <input type="number" placeholder="Price" ref={priceInputRef}/>
                    <button className="button" onClick={() => addProduct()}>Create</button>
                </div>
            </div>
        </div>
    );
}

export default Products;