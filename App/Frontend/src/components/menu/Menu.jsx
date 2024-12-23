import "../../styles/carta/carta.css";
import { getCategories } from "../../services/categorias.services.js";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productos.services.js";
import { generateUniqueKey } from "../../utils/functions";
import Path from "../Path";
import Tag from "./Tag";
import InitialMenu from "./InitialMenu";
import carritoImg from "../../assets/images/carrito.webp";
import ItemMenu from "./ItemMenu";
import Modal from "../Modal";
import { useRef } from "react";
import LoaderComponent from "../LoaderComponent";

function Menu() {
  //States
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeTag, setActiveTag] = useState(null);
  const [isCartClick, setCartClick] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);
  //Hooks
  const { addToCart, checkProductInCart, removeProductFromCart } = useCart();
  const { auth } = useAuth();
  const footerRef = useRef(null);

  //Use Effects
  useEffect(() => {
    document.title = "Alares | Carta ";
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.25) {
            setShowButton(false); // Desactivar el botón cuando se pasa el 25% del footer
          } else {
            setShowButton(true);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    document.body.style.overflow = "auto";
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    async function searchCategories() {
      getCategories()
        .then((data) => setCategories(data))
        .catch((error) => console.log(error));
    }
    async function searchProducts() {
      getProducts()
        .then((data) => {
          setLoading(false);
          setProducts(data);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
    searchProducts();
    searchCategories();
  }, []);

  function handleTagClick(tagId) {
    if (activeTag === tagId) {
      setActiveTag(null);
    } else {
      setActiveTag(tagId);
    }
  }

  function filterProducts() {
    return products.filter((product) => product.id_categoria == activeTag);
  }

  return (
    <>
      <div className="menu__container">
        {loading ? (
          <LoaderComponent color={"orange"} />
        ) : (
          <>
            {/* Resto de tu contenido cuando los productos están cargados */}
            <Path pathPrev={"Home"} pathActual={"Carta"} goTo={"Home"} />
            <div className="menu__tags-container">
              <div className="menu__tags">
                {categories &&
                  categories.map((categ) => (
                    <Tag
                      key={generateUniqueKey()}
                      name={categ.nombre}
                      isActive={activeTag === categ.id}
                      onClick={() => handleTagClick(categ.id)}
                    />
                  ))}
              </div>
            </div>
            <div className="menu__title-sizes">
              <p>Chicas / Grandes</p>
            </div>
            <div
              className={`menu__menu ${
                activeTag == null ? "menu__menu--initial" : ""
              }`}
            >
              {activeTag == null ? (
                <InitialMenu
                  products={products}
                  checkProductInCart={checkProductInCart}
                  removeProductFromCart={removeProductFromCart}
                  addToCart={addToCart}
                  categories={categories}
                  setCartClick={setCartClick}
                />
              ) : (
                filterProducts(products).map((product) => {
                  const isProductInCart = checkProductInCart(product);
                  return (
                    <ItemMenu
                      key={generateUniqueKey()}
                      isProductInCart={isProductInCart}
                      removeProductFromCart={removeProductFromCart}
                      addToCart={addToCart}
                      product={product}
                      setCartClick={setCartClick}
                    />
                  );
                })
              )}
            </div>
            {showButton && (
              <NavLink to={"/delivery"}>
                <div className="flotant-cart">
                  <p>Carrito</p>
                  <img src={carritoImg} alt="Carrito" />
                </div>
              </NavLink>
            )}
          </>
        )}
      </div>
      <div ref={footerRef}></div>
      {isCartClick && !auth.isLogin && (
        <Modal
          isSubmitted={isCartClick && !auth.isLogin}
          position={"top"}
          handleSubmit={() => setCartClick(false)}
          msg={!auth.isLogin ? "Debes estar logueado para usar el carrito" : ""}
        ></Modal>
      )}
    </>
  );
}

export default Menu;
