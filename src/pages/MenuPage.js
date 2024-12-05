import React from "react";
import MenuCard from "../components/MenuCard";
import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

const MenuPage = () => {
    const { addToCart } = useCart();

    return (
            <div>
                <section id="menu" className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Menu</h2>
                        <div className="row">
                            <MenuCard
                                title="Steak & Pap"
                                price="59.99"
                                image={require("../assets/img/steak.jfif")}
                                addToCart={()=> addToCart({
                                    name:"Steak & Pap",
                                    price: 59.99
                                })}
                            />
                            <MenuCard
                                title="Chicken & Chips"
                                price="49.99"
                                image={require("../assets/img/chips.jfif")}
                                addToCart={()=> addToCart({
                                    name:"Chicken & Chips",
                                    price: 59.99
                                })}
                            />
                            <MenuCard
                                title="Pap & Chicken"
                                price="49.99"
                                image={require("../assets/img/PapANdChicken.jpg")}
                                addToCart={()=> addToCart({
                                    name:"Pap & Chicken",
                                    price: 49.99
                                })}
                            />
                            <MenuCard
                                title="Beef Stew"
                                price="49.99"
                                image={require("../assets/img/Beef-Stew-.jpg")}
                                addToCart={()=> addToCart({
                                    name:"Beef Stew",
                                    price: 49.99
                                })}
                            />
                            <MenuCard
                                title="Wors"
                                price="49.99"
                                image={require("../assets/img/wors.jfif")}
                                addToCart={()=> addToCart({
                                    name:"Wors",
                                    price: 49.99
                                })}
                            />
                        </div>
                    </div>
                </section>
                <Cart />
            </div>
    );
};

export default MenuPage;

