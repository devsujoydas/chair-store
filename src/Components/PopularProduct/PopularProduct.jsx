import product1 from "/product-1.png"
import product2 from "/product-2.png"
import product3 from "/product-3.png"

const PopularProduct = () => {
    return (
        <div className="" id="popularproducts">
            <div className="md:max-w-screen-2xl md:mx-auto md:px-32 m-10">
                <div className="flex justify-center items-center gap-10 min-h-80 flex-col md:flex-row">
                    <div className="hover:shadow-lg rounded-xl transition-all duration-200">
                        <div className="flex justify-center items-center gap-2">
                            <div className="bg-[#DCE5E4] rounded-xl p-2">
                                <img src={product1} alt="Image" className="w-36" />
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-black">Nordic Chair</h3>
                                <p>
                                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                                    odio
                                </p>
                                <p>
                                    <a className="hover:text-black hover:border-b border-black transition-all" href="#">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hover:shadow-lg rounded-xl transition-all duration-200">
                        <div className="flex justify-center items-center gap-2">
                            <div className="bg-[#DCE5E4] rounded-xl p-2">
                                <img src={product2} alt="Image" className="w-36" />
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-black">Kruzo Aero Chair</h3>
                                <p>
                                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                                    odio
                                </p>
                                <p>
                                    <a className="hover:text-black hover:border-b border-black transition-all" href="#">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hover:shadow-lg rounded-xl transition-all duration-200">
                        <div className="flex justify-center items-center gap-2">
                            <div className="bg-[#DCE5E4] rounded-xl p-2">
                                <img src={product3} alt="Image" className="w-36" />
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-black">Ergonomic Chair</h3>
                                <p>
                                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                                    odio
                                </p>
                                <p>
                                    <a className="hover:text-black hover:border-b border-black transition-all" href="#">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProduct