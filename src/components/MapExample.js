import Card from "../components/Card";
import "../App.css";
import { useState } from "react";

function MapExample() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");

  function createProduct() {
    console.log(productName, productDesc);
    let newObject = {
      id: data.length + 1,
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
      productName: productName,
      description: productDesc,
    };
    setData(data.concat(newObject));
  }

  const [data, setData] = useState([
    {
      id: 1,
      img: "https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg",
      productName: "Laptops",
      description: "Best laptops Deal",
      price: 1000,
    },
    {
      id: 2,
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg",
      productName: "Watch",
      description: "Best watch Deal",
      price: 4000,
    },
    {
      id: 3,
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF_4-372-232._SY232_CB636110853_.jpg",
      productName: "Bags & Luggage",
      description: "Best bags Deal",
      price: 2000,
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/31pnHwpqNhL._AC_SY400_.jpg",
      productName: "Mobile",
      description: "Best mobile Deal",
      price: 3000,
    },
  ]);
  console.log(data);

  function editProduct(id) {
    console.log(id);
    let copyArray = [...data];
    let index = copyArray.findIndex((ele) => ele.id === id);
    copyArray[index].price = copyArray[index].price + 1;
    setData(copyArray);
  }

  function deleteProduct(id) {
    setData(data.filter((ele) => ele.id !== id));
  }

  return (
    <>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Description"
        value={productDesc}
        onChange={(e) => setProductDesc(e.target.value)}
      />
      <button onClick={createProduct}>Create</button>
      <div className="grid-parent">
        {data.map((ele) => {
          return (
            <div>
              <Card
                Image={ele.img}
                ProductName={ele.productName}
                Description={ele.description}
                Price={ele.price}
              />
              <button onClick={() => editProduct(ele.id)}>Edit</button>
              <button onClick={() => deleteProduct(ele.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MapExample;
