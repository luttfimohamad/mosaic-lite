import React, { useState } from "react";
import { products } from "../data/ProductData";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [hideExpired, setHideExpired] = useState(false);
  const navigate = useNavigate();
  const [selectedProductName, setSelectedProductName] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleRowClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleDeleteClick = (productName) => {
    setSelectedProductName(productName);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Delete item ${selectedProductName}`);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setSelectedProductName("");
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-bold my-8">Product</strong>
        <div className="flex items-center space-x-20">
          <label className="text-lg items-center mr-3">
            <input
              type="checkbox"
              className="w-4 h-4 rounded mr-2"
              checked={hideExpired}
              onChange={(e) => setHideExpired(e.target.checked)}
            />
            Hide Expired Product
          </label>
          <select className="border border-gray-300 rounded px-3 py-2">
            <option value="all">All Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
          <button className="bg-[#6366F1] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Add Product
          </button>
        </div>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Product Price</th>
              <th>Category</th>
              <th>Expiry Date</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td onClick={() => handleRowClick(product.id)}>
                  <img
                    src={product.image}
                    alt="img"
                    className="h-20 w-20 rounded-full"
                  />
                  {product.name}
                </td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.expiryDate}</td>
                <td>
                  <button
                    onClick={() => handleDeleteClick(product.name)}
                    className="flex items-center"
                  >
                    <BsFillTrashFill className="text-3xl ml-2 text-gray-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <p>
              Are you sure you want to delete item "{selectedProductName}"?
            </p>
            <div className="flex justify-end mt-4">
              <button className="mr-2" onClick={handleCancelDelete}>
                Cancel
              </button>
              <button className="text-red-600" onClick={handleConfirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}