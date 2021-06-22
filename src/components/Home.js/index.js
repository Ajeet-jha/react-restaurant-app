import React from "react";
import Layout from "../Layout";

import { get, map, size } from "lodash";
const CATEGORY_URL = "https://cdn.app2food.com/olo/category/";
const PRODUCT_URL = "https://cdn.app2food.com/olo/product/";

function index({ initialData }) {
  console.log(initialData);
  if (size(initialData) < 1) {
    return null;
  }

  return (
    <main>
      <Layout>
        {map(get(initialData, "0"), (data) => (
          <div
            key={data.cat_id}
            style={{
              margin: "10px",
              border: "2px solid black",
              padding: "20px",
              display: "flex",
              maxWith:"80%",
              flexWrap: "wrap"
            }}
          >
            <div style={{
              width:"100%",
              margin:"auto",
              textAlign:"center"
            }}>
              <img
                src={`${CATEGORY_URL}${data.category_image}`}
                alt="category image"
                width="100px"
              />
              <p>{data.category_name}</p>
            </div>
            <div style={{
              padding: "20px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
            {map(get(data, "product"), (product) => (
              <div
                key={product.store_product_id}
                style={{
                  margin: "10px",
                  border: "2px solid black",
                  padding: "20px",
                  width: "400px"

                }}
              >
                <img
                  src={product.product_image ? `${PRODUCT_URL}${product.product_image}` : 'https://picsum.photos/200/300'}
                  alt="product image"
                  width="100px"
                />
                <p>{product.store_product_name}</p>
                <p>{product.product_desc}</p>
                <p>{product.product_price}</p>
              </div>
            ))}
</div>
          </div>
        ))}
      </Layout>
    </main>
  );
}

export default index;
