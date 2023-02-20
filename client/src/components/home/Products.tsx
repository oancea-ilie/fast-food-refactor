import { useState } from 'react';

const Products = () => {
  // const [products, setProducts] = useState([]);

  // const [local, setLocal] = useState([]);

  // const populateProducts = async () => {
  //   const rez = await api.getAllProducts();

  //   if (typeof rez != 'string') {
  //     setProducts(rez);
  //   } else {
  //     console.log(rez);
  //   }
  // };

  // const populateLocalStorage = () => {
  //   let arrLocal = localStorage.getItem('Products');

  //   if (arrLocal) {
  //     arrLocal = JSON.parse(arrLocal);
  //     setLocal(arrLocal);
  //   }
  // };

  // const handleFilter = async (e) => {
  //   e.preventDefault();
  //   const obj = e.target;

  //   if (products) {
  //     if (obj.id) {
  //       // setare active pe element
  //       const parent = obj.parentNode;
  //       const links = parent.childNodes;
  //       links.forEach((e) => {
  //         if (e.classList.contains('active')) {
  //           e.classList.remove('active');
  //         }
  //       });
  //       obj.classList.add('active');

  //       if (obj.id != 'All') {
  //         const rez = await api.getAllOrderDetailsFiltred(obj.id);
  //         setProducts(rez);
  //       }
  //       if (obj.id == 'All') {
  //         populateProducts();
  //       }
  //     }
  //   }
  // };

  // const handleOrderBtn = (product, event) => {
  //   event.preventDefault();

  //   if (user == null || user == undefined) {
  //     history.push('/login');
  //   } else {
  //     const obj = event.target;
  //     obj.disabled = true;
  //     obj.style.backgroundColor = '#eec300';
  //     obj.style.cursor = 'unset';
  //     obj.textContent = 'ORDERED';

  //     let ok = 0;
  //     let arrLocal = localStorage.getItem('Products');

  //     if (arrLocal) {
  //       arrLocal = JSON.parse(arrLocal);

  //       arrLocal.forEach((e) => {
  //         if (e.id == product.id) {
  //           ok = 1;
  //         }
  //       });
  //     }

  //     if (ok == 0) {
  //       arrLocal.push(product);
  //       arrLocal = JSON.stringify(arrLocal);
  //       localStorage.setItem('Products', arrLocal);
  //       populateLocal();
  //     }
  //   }
  // };

  // const verifyCart = (product) => {
  //   if (local) {
  //     for (const p of local) {
  //       if (p.id == product.id) {
  //         return true;
  //       }
  //     }
  //   }
  // };

  // const handleFavoriteBtn = (product, event) => {
  //   event.preventDefault();

  //   if (user == null || user == undefined) {
  //     history.push('/login');
  //   } else {
  //     let ok = 0;

  //     let favLocal = localStorage.getItem('Favorite');
  //     favLocal = JSON.parse(favLocal);

  //     if (favLocal) {
  //       favLocal.forEach((e) => {
  //         if (e.id == product.id) {
  //           ok = 1;
  //           const newArr = favLocal.filter((e) => e.id != product.id);

  //           localStorage.setItem('Favorite', JSON.stringify(newArr));
  //           setFavLocal(newArr);
  //         }
  //       });
  //     }

  //     if (ok == 0) {
  //       favLocal.push(product);
  //       const favJSON = JSON.stringify(favLocal);
  //       localStorage.setItem('Favorite', favJSON);
  //       setFavLocal(favLocal);
  //     }
  //   }
  // };

  // const verifyFavorite = (product) => {
  //   if (favLocal) {
  //     for (const p of favLocal) {
  //       if (p.id == product.id) {
  //         return true;
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   populateProducts();
  //   populateLocalStorage();
  // }, []);

  return (
    <section className="products">
      <div className="header">
        <div className="title">
          <h1>Our Products</h1>
          <div className="line" />
        </div>

        {/* <div className="lists" onClick={handleFilter}> */}
        <div className="lists">
          <a href="#" id="All" className="active">
            All
          </a>
          <a href="#" id="Pizza">
            Pizza
          </a>
          <a href="#" id="Burgers">
            Burgers
          </a>
          <a href="#" id="Fries">
            Fries
          </a>
          <a href="#" id="Combo">
            Combo
          </a>
          <a href="#" id="Drinks">
            Drinks
          </a>
        </div>
      </div>
      {/* <div className="body">
        {products &&
          products.map((e) => {
            const v = verifyCart(e);
            const f = verifyFavorite(e);

            if (e.fk_category_id) {
              return (
                <div key={e.id} className="card">
                  <div className="product-card-img">
                    <img
                      loading="lazy"
                      src={
                        'data:image/png;base64,' +
                        arrayBufferToBase64(
                          e.fk_product_id_product_category.image.data
                        )
                      }
                      alt=""
                    />
                  </div>
                  <h1>{e.fk_product_id_product_category.name}</h1>
                  <p>{e.fk_product_id_product_category.description}</p>
                  <h2>${e.fk_product_id_product_category.price}</h2>
                  {v && user ? (
                    <button href="#" className="product-btn2" disabled>
                      ORDERED
                    </button>
                  ) : (
                    <button
                      href="#"
                      className="product-btn"
                      onClick={(event) => {
                        handleOrderBtn(e, event);
                      }}
                    >
                      ORDER NOW
                    </button>
                  )}
                  {f && user ? (
                    <MdFavorite
                      className="productFavIcon"
                      onClick={(event) => {
                        handleFavoriteBtn(e, event);
                      }}
                    />
                  ) : (
                    <MdOutlineFavoriteBorder
                      className="productFavIcon"
                      onClick={(event) => {
                        handleFavoriteBtn(e, event);
                      }}
                    />
                  )}
                </div>
              );
            } else {
              return (
                <div key={e.id} className="card">
                  <div className="product-card-img">
                    <img
                      loading="lazy"
                      src={
                        'data:image/png;base64,' +
                        arrayBufferToBase64(e.image.data)
                      }
                      alt=""
                    />
                  </div>
                  <h1>{e.name}</h1>
                  <p>{e.description}</p>
                  <h2>${e.price}</h2>
                  {v && user ? (
                    <button href="#" className="product-btn2" disabled>
                      ORDERED
                    </button>
                  ) : (
                    <button
                      href="#"
                      className="product-btn"
                      onClick={(event) => {
                        handleOrderBtn(e, event);
                      }}
                    >
                      ORDER NOW
                    </button>
                  )}
                  {f && user ? (
                    <MdFavorite
                      className="productFavIcon"
                      onClick={(event) => {
                        handleFavoriteBtn(e, event);
                      }}
                    />
                  ) : (
                    <MdOutlineFavoriteBorder
                      className="productFavIcon"
                      onClick={(event) => {
                        handleFavoriteBtn(e, event);
                      }}
                    />
                  )}
                </div>
              );
            }
          })}
      </div>   */}
    </section>
  );
};

export default Products;
