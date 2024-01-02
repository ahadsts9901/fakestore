import React, { useEffect, useState } from 'react'
import "./ProductPage.css"
import { useParams } from "react-router-dom";
import { Clipboard } from "react-bootstrap-icons";
import OGTag from '../../components/OG/OG';

const ProductPage = () => {

  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [IsCopy, setIsCopy] = useState("Copy url")

  useEffect(() => {

    getProduct(productId)

  }, [productId])

  const getProduct = async (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }

  const copy = () => {
    let url = window.location.origin + "/" + productId;
    navigator.clipboard.writeText(url)
    setIsCopy("Copied")
    setTimeout(() => {
      setIsCopy("Copy url")
    }, 1000)
  }

  return (
    <>
      {
        product ? <>
          <OGTag title={product?.title} description={product?.description} imageUrl={product?.image} url={window.location.origin + "/" + productId} />
          <div className="padding"></div>
          <div className='card-horizontal'>
            <img src={product?.image} alt="product image" />
            <div className="card-horizontal-right">
              <h1>{product?.category}</h1>
              <p>{product?.description}</p>
              <div className='buttonContainer'>
                <h2>{product?.price} $</h2>
                <a onClick={() => copy()} className="horizontal-card-button btn btn-primary">
                  <Clipboard /> {IsCopy}
                </a>
              </div>
            </div>
          </div>
        </> : <span id="loader"></span>
      }
    </>
  )
}

export default ProductPage