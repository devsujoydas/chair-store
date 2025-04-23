
import './App.css'
import Footer from './Components/Footer/Footer'
import Blogs from './Components/Blogs/Blogs'
import PopularProduct from './Components/PopularProduct/PopularProduct'
import WhyChoose from './Components/WhyChoose/WhyChoose'
import Products from './Components/Products/Products'
import Hero from './Components/Hero/Hero'
import Header from './Components/Header/Header'
import Loader from './Components/Loader/Loader'

function App() {

  return (
    <>
      <div className="relative" >
        <Loader />

        <div className="fixed bottom-5 right-5">
          <a href="#nav" className="font-bold  bg-[#F8B810] hover:bg-[#f0c55a]  text-black text-xl px-3 py-1 flex justify-center items-center rounded-full">↑</a>
        </div>

        {/* header  */}
        <Header />

        {/* Hero */}
        <Hero />

        {/* <!-- Start Product Section --> */}
        <Products />

        {/* <!-- Start Why Choose Us Section --> */}
        <WhyChoose />

        {/* <!-- Start Popular Product --> */}
        <PopularProduct />

        {/* <!-- Start Blog Section --> */}
        <Blogs />

        {/* <!-- Start Footer Section --> */}
        <Footer />
      </div>

    </>
  )
}

export default App
