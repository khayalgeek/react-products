import { Component } from "react";
import Post from './Post'
import Oclock from "./Oclock";

export class Posts extends Component {

    state = {
        showLoading: false,
        products: [{
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "count": 1
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "count": 1
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "count": 1
        },]
    }

    postClickHandler = (e, id) => {
        const productsCopy = [...this.state.products];
        const productIndex = productsCopy.findIndex(pro => pro.id === id);
        const productDeepCopy = { ...productsCopy[productIndex] };
        productDeepCopy.count++;
        productsCopy[productIndex] = productDeepCopy;
        this.setState({
            products
                : productsCopy
        })
    };

    render() {
        return (
            <section>
                <div style={{ width: '100%' }}>
                    <Oclock/>
                    <h1 style={{ margin: '2rem 0', textAlign: "center" }}>All Posts</h1>
                    <ul style={{ display: "flex", justifyContent: "space-around" }}>
                        {this.state.products.map((item) => {
                            return <Post
                                clickHandler={(e) => this.postClickHandler(e, item.id)}
                                key={item.id}
                                data={item} />
                        })};
                    </ul>
                </div>
            </section>
           
        );
    };
};