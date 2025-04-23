import product1 from "/product-1.png"
import product2 from "/product-2.png"
import product3 from "/product-3.png"

const Products = () => {
    return (
        <div id="shops" className="flex justify-center items-center py-28">
            <div className="md:max-w-screen-2xl md:mx-auto md:px-32 mx-10">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    {/* <!-- Start Column 1 --> */}
                    <div id="explore" className="flex flex-col gap-8">
                        <h2 className="text-3xl text-black font-medium">
                            Crafted with excellent material.
                        </h2>
                        <p className="">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                        </p>
                        <p className="">
                            <a href="#explore" className="bg-black text-white px-6 py-3 rounded-full hover:bg-transparent border-2 border-transparent hover:border-black hover:text-black transition-all">
                                Explore
                            </a>
                        </p>
                    </div>
                    {/* <!-- End Column 1 --> */}

                    {/* <!-- Start Column 2 --> */}
                    <div className="text-center font-semibold text-black">
                        <a className="grid gap-2" href="#">
                            <img src={product1} className="hover:-translate-y-3 transition-all" />
                            <h3 className="text-lg">Nordic Chair</h3>
                            <strong className="text-xl">$50.00</strong>
                        </a>
                    </div>
                    {/* <!-- End Column 2 --> */}

                    {/* <!-- Start Column 3 --> */}
                    <div className="text-center font-semibold text-black">
                        <a className="grid gap-2" href="#">
                            <img src={product2} className="hover:-translate-y-3 transition-all" />
                            <h3 className="text-lg">Kruzo Aero Chair</h3>
                            <strong className="text-xl">$78.00</strong>
                        </a>
                    </div>
                    {/* <!-- End Column 3 --> */}

                    {/* <!-- Start Column 4 --> */}
                    <div className="text-center font-semibold text-black">
                        <a className="grid gap-2" href="#">
                            <img src={product3} className="hover:-translate-y-3 transition-all" />
                            <h3 className="text-lg">Ergonomic Chair</h3>
                            <strong className="text-xl">$43.00</strong>
                        </a>
                    </div>
                    {/* <!-- End Column 4 --> */}
                </div>
            </div>
        </div>
    )
}

export default Products