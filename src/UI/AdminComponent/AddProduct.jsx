import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import API_URL from '../../Config';
import axios from 'axios';

function AddProduct() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({
    isVisible: false,
    isSuccess: false,
    message: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 bg-[url(assets/Frame2.png)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden bg-[url(assets/Frame2.png)]">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">Add New Product</h2>
            <p className="mt-1 text-sm text-gray-600">Fill in all the required product details</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-4" encType="multipart/form-data">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Product Name/ID */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Product Name/ID *</label>
                <input
                  type="text"
                  {...register("productName", { required: true })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.productName ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm`}
                  placeholder="Enter product name"
                />
              </div>

              {/* SKU */}
              <div>
                <label className="block text-sm font-medium text-gray-700">SKU *</label>
                <input
                  type="text"
                  {...register("sku", { required: true })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.sku ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm`}
                  placeholder="e.g., PROD001"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Category *</label>
                <select
                  {...register("category", { required: true })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.category ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm`}
                >
                  <option value="">Select a category</option>
                  <option value="Medical">Hospital Equipment</option>
                  <option value="Equipment">Education / Teaching Model</option>
                  <option value="Diagnostic">Lab Consumable</option>
                  <option value="Safety">Surgical Equipment</option>
                  <option value="Safety">Biology Equipment</option>
                  <option value="Safety">Chemistry Equipment</option>
                  <option value="Safety">Physics Equipment</option>
                </select>
              </div>

              {/* Current Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Price (USD) *</label>
                <input
                  type="number"
                  step="0.01"
                  {...register("price", { required: true })}
                  className={`block w-full h-[40px] rounded-md border ${errors.price ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm pl-7`}
                  placeholder="46.00"
                />
              </div>

              {/* Original Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Original Price (USD) *</label>
                <input
                  type="number"
                  step="0.01"
                  {...register("oldPrice", { required: true })}
                  className={`block w-full h-[40px] rounded-md border ${errors.oldPrice ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm pl-7`}
                  placeholder="55.00"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Rating (1-5) *</label>
                <select
                  {...register("rating", { required: true })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.rating ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm`}
                >
                  <option value="">Select rating</option>
                  {[1, 2, 3, 4, 5].map(r => (
                    <option key={r} value={r}>{r} Star{r > 1 && 's'}</option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Quantity *</label>
                <input
                  type="number"
                  {...register("productQuantity", { required: true })}
                  className={`block w-full h-[40px] rounded-md border ${errors.productQuantity ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm`}
                  placeholder="20"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Status *</label>
                <select
                  {...register("status", { required: true })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.status ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm`}
                >
                  <option value="">Select status</option>
                  <option value="new">New Product</option>
                  <option value="regular">Regular Product</option>
                </select>
              </div>

              {/* Product Image */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Product Image *</label>
                <div className="mt-1 flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    {...register("image", { required: true })}
                    onChange={handleImageChange}
                  />
                  {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="h-16 w-16 object-cover rounded-md" />
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description *</label>
                <textarea
                  {...register("description", { required: true })}
                  rows={4}
                  className={`mt-1 block w-full rounded-md border ${errors.description ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm`}
                  placeholder="Detailed product description..."
                />
              </div>

              {/* Specifications */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Specifications (one per line)</label>
                <textarea
                  {...register("specifications")}
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm"
                  placeholder="e.g., Dimensions: 10x10x5cm\nWeight: 500g\nMaterial: Polypropylene"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setImagePreview(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Add Product'}
              </button>
            </div>

            {submitStatus.isVisible && (
              <div className={`mt-4 text-sm ${submitStatus.isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
