import React  , { useContext } from 'react'
import { CartContext } from '../../ReusableComponent/CartContext';
import Button from '../../ReusableComponent/Button';
import CartComponent3 from './CartComponent3';
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from 'react-router-dom';


function CartComponent2() {
    const { cart, removeFromCart,decreaseQuantity, increaseQuantity } = useContext(CartContext);

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='max-w-6xl mx-auto p-6'>
      {cart.length === 0 ? (
        <div className='text-center py-16'>
          <div className='text-gray-400 mb-4'>
            <svg className='w-24 h-24 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0V9a2 2 0 00-2-2H6a2 2 0 00-2-2v4m16 0H4' />
            </svg>
          </div>
          <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Your cart is empty</h2>
          <p className='text-gray-500'>Add some items to get started</p>
        </div>
      ) : (
        <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Product</th>
                  <th className='px-6 py-4 text-center text-sm font-semibold text-gray-700'>Price</th>
                  <th className='px-6 py-4 text-center text-sm font-semibold text-gray-700'>Quantity</th>
                  <th className='px-6 py-4 text-center text-sm font-semibold text-gray-700'>Total</th>
                  <th className='px-6 py-4 text-center text-sm font-semibold text-gray-700'>Action</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {cart.map((item) => (
                  <tr key={item.id} className='hover:bg-gray-50 transition-colors'>
                    <td className='px-8 md:px-6 py-4'>
                      <div className='flex items-center space-x-4'>
                        <img 
                          src={item.image} 
                          alt={item.productName} 
                          className='w-16 h-16 object-cover rounded-lg border border-gray-200'
                        />
                        <div>
                          <h3 className='font-medium text-gray-900 capitalize'>{item.productName}</h3>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <div className='flex items-center justify-center text-gray-900 font-medium'>
                        <TbCurrencyNaira className='w-4 h-4' />
                        {item.price}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center justify-center space-x-2'>
                        <Button
                          onClick={() => decreaseQuantity(item)}
                          disabled={item.quantity === 1}
                          label='-'
                          className='w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-gray-600 font-semibold'
                        />
                        <span className='w-12 text-center font-medium text-gray-900'>{item.quantity}</span>
                        <Button
                          onClick={() => increaseQuantity(item)}
                          label='+'
                          className='w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 font-semibold'
                        />
                      </div>
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <div className='flex items-center justify-center text-gray-900 font-semibold'>
                        <TbCurrencyNaira className='w-4 h-4' />
                        {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <Button
                        onClick={() => removeFromCart(item)}
                        label='Remove'
                        className='text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-1 rounded-md text-sm font-medium transition-colors'
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div className='mt-8 bg-gray-50 rounded-lg p-6'>
          <div className='flex justify-end gap-6'>
            <Link to="/shop">
              <Button
                label='Update Cart'
                className='px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium'
              />
            </Link>
           
          </div>
          
          <div className='mt-8 flex justify-end'>
            <div className='w-full max-w-md'>
              <div className='bg-white rounded-lg border border-gray-200 p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>Cart Summary</h3>
                <div className='space-y-3'>
                  <div className='flex justify-between text-gray-600'>
                    <span>Subtotal:</span>
                    <div className='flex items-center font-medium'>
                      <TbCurrencyNaira className='w-4 h-4' />
                      {cartTotal.toFixed(2)}
                    </div>
                  </div>
                  <div className='border-t border-gray-200 pt-3'>
                    <div className='flex justify-between text-lg font-semibold text-gray-900'>
                      <span>Total:</span>
                      <div className='flex items-center'>
                        <TbCurrencyNaira className='w-5 h-5' />
                        {cartTotal.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/checkout">
                  <Button
                    label='Proceed to Checkout'
                    className='w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium'
                  />
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
  

  


export default CartComponent2