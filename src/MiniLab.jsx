import React from 'react'
import HeaderComponent from './ConstantComponent/HeaderComponent/HeaderComponent'
import HomeComponent from './UI/HomeComponent/HomeComponent'
import AboutComponent from './UI/AboutComponent/AboutComponent'
import ServiceComponent from './UI/ServicesComponent/ServiceComponent'
import ResearchComponent from './UI/ResearchComponent/ResearchComponent'
import TeamComponent from './UI/TeamComponent/TeamComponent'
import ContactComponent from './UI/ContactComponent/ContactComponent'
import ShopComponent from './UI/ShopComponent/ShopComponent'
import FAQComponent from './UI/FAQComponent/FAQComponent'
import CheckoutComponent from './UI/CheckoutComponent/CheckoutComponent'
import PricingComponent from './UI/PricingComponent/PricingComponent'
import CartComponent from "./UI/CartComponent/CartComponent";
import FooterComponent from "./ConstantComponent/FooterComponent/FooterComponent";
import { Route, Routes, useLocation } from 'react-router-dom'
import Authentication from "./UI/AuthenticationComponent/Authentication";
import Admin from './UI/AdminComponent/Admin'
import AddProduct from './UI/AdminComponent/AddProduct'
import ViewAllproduct from './UI/AdminComponent/ViewAllproduct'
import ViewOrder from './UI/AdminComponent/ViewOrder'
import Dashboard from './UI/AdminComponent/Dashboard'
import AdminSignUp from './UI/AuthenticationComponent/AdminSignUp'
import Settings from './UI/AdminComponent/Setting'
import Adder from './UI/AdminComponent/Adder'
import ProductSkeleton from './ReusableComponent/ProductSkeleton'
import ProductDetails from './UI/ProductDetailsPage/ProductDetails'
import OrderHistoryPage from './UI/OrderComponents/OrderHistoryPage'
import OrderDetails from './UI/OrderComponents/OrderDetails'
import Register from './UI/AuthenticationComponent/Register'


function MiniLab() {
    const location = useLocation()

        const hideHeaderFoter = location.pathname === '/Checkuser' || 
         location.pathname === '/aclab' || 
         location.pathname === '/register' || 
        
        location.pathname.startsWith('/accon');
  return (
    <div>
         {!hideHeaderFoter && <HeaderComponent />}
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/About" element={<AboutComponent />} />
                    <Route path="/Service" element={<ServiceComponent />} />
                    {/* <Route path="/Research" element={<ResearchComponent />} /> */}
                    <Route path="/Team" element={<TeamComponent />} />
                    <Route path="/Contact" element={<ContactComponent />} />
                    <Route path="/cart" element={<CartComponent />} />
                    <Route path="/Shop" element={<ShopComponent />} />
                    <Route path="/FAQ" element={<FAQComponent />} />
                    <Route path="/Checkout" element={<CheckoutComponent />} />
                    <Route path="/checkuser" element={<Authentication />} />
                    <Route path="/order-history" element={<OrderHistoryPage />} />
                    <Route path="/order/:orderId" element={<OrderDetails />} />
                    <Route path="/aclab" element={<AdminSignUp />} />
                    <Route path="/accon" element={<Admin />} >
                        <Route index element={<Dashboard/>}/>
                        <Route path='/accon/dashboard' element={<Dashboard/>}/>
                        <Route path='/accon/productlist' element={<ViewAllproduct/>}/>
                        <Route path='/accon/order' element={<ViewOrder/>}/>
                        {/* <Route path='/accon/addproduct' element={<AddProduct/>}/> */}
                        <Route path='/accon/addproduct' element={<Adder/>}/>
                        <Route path='/accon/settings' element={<Settings/>}/>
                    </Route>
                    <Route path="/sk" element={<ProductSkeleton />} />
                    <Route path="singleproduct/:id" element={<ProductDetails />} />
                    <Route path="register" element={<Register />} />

                    {/* <Route path="/Pricing" element={<PricingComponent />} /> */}
                </Routes>
               
                {!hideHeaderFoter &&  <FooterComponent/>}
    </div>
  )
}

export default MiniLab