
const Nav = () => {
  return (
    <div>
      <ul className="flex md:flex-row flex-col justify-center md:items-center flex-wrap md:gap-10 gap-5 md:text-lg">
        <a className="hover:text-[#ffffff] active:scale-95 hover:underline duration-500 transition-all" href="#hero">Home</a>
        <a className="hover:text-[#ffffff] active:scale-95 hover:underline duration-500 transition-all" href="#aboutus">About Us</a>
        <a className="hover:text-[#ffffff] active:scale-95 hover:underline duration-500 transition-all" href="#shops">Shop</a>
        <a className="hover:text-[#ffffff] active:scale-95 hover:underline duration-500 transition-all" href="#blogs">Blogs</a>
        <a className="hover:text-[#ffffff] active:scale-95 hover:underline duration-500 transition-all" href="#footer">Contact Us</a>
      </ul>
    </div>
  )
}

export default Nav