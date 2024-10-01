/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type item ={
  id:string;
  imgSrc:string;
  name:string;
  brand:{
    nameEn:string
  };
  originalPrice:number;
  price:number;
}


function HomePage() {
  const [products, setProducts] = useState<item[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://api.ballang.yoojinyoung.com/products"
        );
        const result = response.data.result;
        setProducts(result);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className="w-[100vw] mt-10">
      <ul className="grid grid-cols-6 gap-3 w-full h-full">
        {products.length > 0 ? (
          products.map((item) => (
            <li className="p-2" key={item.id}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <img
                    className="object-contain"
                    src={item.imgSrc}
                    alt={item.name}
                  />
                  <h4 className="font-bold text-sm">{item.brand.nameEn}</h4>
                  <h6 className="text-sm">{item.name}</h6>
                </div>
                <div className="mt-auto text-sm">
                  {" "}
                  <span className="font-bold text-red-500 line-through">
                    ￦{item.originalPrice.toLocaleString()}
                  </span>
                  <span className="ml-2 font-bold">
                    ￦{item.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
}

export default HomePage;
