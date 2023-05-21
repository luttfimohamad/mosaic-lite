import React from "react";
import { products } from "../data/ProductData";

export default function Products() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-bold my-40">Product</strong>
            <div className="flex justify-end items-center">
                <label className="text-lg items-center mr-3"><input type="checkbox" className="w-4 h-4 rounded mr-2"/>Hide Expired Product</label>
                <button className="bg-[#6366F1] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"> Add Product </button>
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
								<td><img src={product.image} alt="img" className="h-20 w-20 rounded-full" />{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.expiryDate}</td>
                                <td>{product.isDeleted ? "Deleted" : "Active"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
    )
}