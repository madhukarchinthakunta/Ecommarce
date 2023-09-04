import { useState, useEffect } from "react"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch,useSelector } from "react-redux";
import { add, } from "../redux/cartSlice";
import { getProducts } from "../redux/productSlice";
function Product() {
    // const [products, getProducts] = useState([]);
    const dispatch=useDispatch();
    const {data:products}= useSelector (state=>state.Products)
    
    useEffect(() => {
        // axios.get('https://fakestoreapi.com/products').then(
        //     response => (getProducts(response.data), console.log(response))
        // )
        dispatch(getProducts())
    }, [])
const addTocart=(product)=>{
dispatch(add(product))
}

    const cards = products.map(product => (
        <div className="col-md-3" style={{marginBottom:'10px'}}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
                <Card.Img variant="top" src={product.image} style={{width:'100px',height:"130px"}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR:{product.price}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer style={{backgroundColor:'white'}}>
                <Button variant="primary" onClick={()=>addTocart(product)}>Add TO Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))


    return (
        <div>
            <h1>Product Dashboard</h1>
           <div className="row">
            {cards}
           </div>
        </div>
    )
}

export default Product
