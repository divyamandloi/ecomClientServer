import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'
import Layout from './Components/common/Layout.jsx'
import ViewUsers from './Components/pages/users/ViewUsers.jsx'

import NewsLetters from './Components/pages/enquiry/NewsLetters.jsx'
import AddColor from './Components/pages/colors/AddColor.jsx'
import ViewColor from './Components/pages/colors/ViewColor.jsx'
import AddMaterials from './Components/pages/materials/AddMaterials.jsx'
import ViewMaterials from './Components/pages/materials/ViewMaterials.jsx'
import ViewCategory from './Components/pages/parentCategory/ViewCategory.jsx'
import AddSubCategories from './Components/pages/subCategories/AddSubCategories.jsx'
import AddProducts from './Components/pages/products/AddProducts.jsx'
import ViewProducts from './Components/pages/products/ViewProducts.jsx'
import AddWhyChooseUs from './Components/pages/whychooseus/AddWhyChooseUs.jsx'
import ViewWhyChooseUs from './Components/pages/whychooseus/ViewWhyChooseUs.jsx'
import Orders from './Components/pages/orders/Orders.jsx'
import AddSliders from './Components/pages/sliders/AddSliders.jsx'
import ViewSliders from './Components/pages/sliders/ViewSliders.jsx'
import ViewCountry from './Components/pages/country/ViewCountry.jsx'
import AddTestimonials from './Components/pages/testimonials/AddTestimonials.jsx'
import ViewTestimonials from './Components/pages/testimonials/ViewTestimonials.jsx'
import AddFaq from './Components/pages/faq/AddFaq.jsx'
import ViewFaq from './Components/pages/faq/ViewFaq.jsx'
import AddTermConditions from './Components/pages/terms&conditions/AddTermConditions.jsx'
import ViewTermConditions from './Components/pages/terms&conditions/ViewTermConditions.jsx'
import AdminProfile from './Components/pages/profile/AdminProfile.jsx'
import CompanyProfile from './Components/pages/profile/CompanyProfile.jsx'
import AddCategory from './Components/pages/parentCategory/AddCategory.jsx'
import AddCountry from './Components/pages/country/AddCountry.jsx'
import ContactEnquery from './Components/pages/enquiry/ContactEnquery.jsx'
import AddSubSubCategories from './Components/pages/subsubCategories/AddSubSubCategories.jsx'
import ViewSubCategories from './Components/pages/subCategories/ViewSubCategories.jsx'
import ViewSubSubCategorie from './Components/pages/subsubCategories/ViewSubSubCategorie.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
           
            <Route element={<Layout/>}>
            
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              <Route path="/view-user" element={<ViewUsers/>}></Route>
              <Route path="/contact-enquiry" element={<ContactEnquery/>}></Route>
              <Route path="/newsletter" element={<NewsLetters/>}></Route>
              <Route path="/add-color" element={<AddColor/>}></Route>
              <Route path="/view-color" element={<ViewColor/>}></Route>
              <Route path="/add-material" element={<AddMaterials/>}></Route>
              <Route path="/view-material" element={<ViewMaterials/>}></Route>
              <Route path="/add-category" element={<AddCategory/>}></Route>
              <Route path="/view-category" element={<ViewCategory/>}></Route>
              <Route path="/add-sub-category" element={<AddSubCategories/>}></Route>
              <Route path="/view-sub-category" element={<ViewSubCategories/>}></Route>
              <Route path="/add-sub-sub-category" element={<AddSubSubCategories/>}></Route>
              <Route path="/view-sub-sub-category" element={<ViewSubSubCategorie/>}></Route>
              {/* <Route path="/view-sub-sub-category" element={<ViewSubSubCategory/>}></Route> */}
              <Route path="/add-products" element={<AddProducts/>}></Route>
              <Route path="/view-products" element={<ViewProducts/>}></Route>  
              <Route path="/add-why-choose-us" element={<AddWhyChooseUs/>}></Route>
              <Route path="/view-why-choose-us" element={<ViewWhyChooseUs/>}></Route>
              <Route path="/orders" element={<Orders/>}></Route>
              <Route path="/add-slider" element={<AddSliders/>}></Route>
              <Route path="/view-slider" element={<ViewSliders/>}></Route>
              <Route path="/add-country" element={<AddCountry/>}></Route>
              <Route path="/view-country" element={<ViewCountry/>}></Route>
              <Route path="/add-term-conditions" element={<AddTermConditions/>}></Route>
              <Route path="/view-term-conditions" element={<ViewTermConditions/>}></Route>
              <Route path="/add-testimonials" element={<AddTestimonials/>}></Route>
              <Route path="/view-testimonials" element={<ViewTestimonials/>}></Route>
              <Route path="/admin-profile" element={<AdminProfile/>}></Route>
              <Route path="/company-profile" element={<CompanyProfile/>}></Route>
              
              <Route path="/add-faqs" element={<AddFaq/>}></Route>
              <Route path="/view-faqs" element={<ViewFaq/>}></Route>
            </Route>
            
            <Route path='/' element={<Login/>}></Route>

           
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
