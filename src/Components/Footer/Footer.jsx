import sofaimg from "/sofa.png"
import envelopeimg from "/envelope-outline.svg"

const Footer = () => {
    return (
        <footer id="footer" className="bg-white">
            <div className="md:max-w-screen-2xl md:mx-auto md:px-28 relative mx-10">
                <div className="">
                    <img src={sofaimg} alt="Image" className="w-96 absolute right-0 -top-28" />
                </div>
                <div className="">

                    <div className="md:py-20 pt-56">
                        <div className="">
                            <h3 className="flex items-center text-black text-lg font-medium">
                                <span className="me-1">
                                    <img src={envelopeimg} alt="Image" className="img-fluid" />
                                </span>
                                <span>Subscribe to Newsletter</span>
                            </h3>

                            <form className="flex items-center gap-4 lg:mt-4 my-10 flex-wrap">
                                <input type="text" className="border-2 px-2 py-3 rounded-lg border-gray-400" placeholder="Enter your name" />
                                <input type="email" className="border-2 px-2 py-3 rounded-xl border-gray-400" placeholder="Enter your email" />
                                <button className="bg-green-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 active:scale-95 transition-all">
                                    Send
                                </button>
                            </form>
                        </div>

                    </div>
                </div>


                <div className="grid md:grid-cols-3 grid-cols-1">
                    <div className="col-span-1 grid gap-5">
                        <div className="">
                            <a href="#" className="text-3xl text-black font-medium">Chair Store</a>
                        </div>
                        <p className="mb-4">
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                            quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                            vulputate velit imperdiet dolor tempor tristique. Pellentesque
                            habitant
                        </p>

                        <ul className="list-unstyled custom-social">
                            <li>
                                <a href="#"><span className="fa fa-brands fa-facebook-f"></span></a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-brands fa-twitter"></span></a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-brands fa-instagram"></span></a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-brands fa-linkedin"></span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 pb-10">
                        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                            <div className="">
                                <ul className="grid gap-4">
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">About us</a>
                                    </li>
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Services</a>
                                    </li>
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Blog</a>
                                    </li>
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className="grid gap-4">
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Jobs</a>
                                    </li>
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Our team</a>
                                    </li>
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Leadership</a>
                                    </li>
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className="grid gap-4">
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Support</a>
                                    </li>
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Knowledge base</a>
                                    </li>
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Live chat</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className="grid gap-4">
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Nordic Chair</a>
                                    </li>
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Kruzo Aero</a>
                                    </li>
                                    <li className="hover:text-[#3B5D50] hover:font-semibold active:scale-95 hover:underline transition-all">
                                        <a href="#">Ergonomic Chair</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t py-10">
                    <div className="flex justify-between items-center md:flex-row flex-col gap-10">
                        <div className="">
                            <p className="">
                                Copyright © 2025. All Rights Reserved. — Designed
                                with love by
                                <a className="font-semibold text-black" href="https://www.facebook.com/devsujoydas"> Sujoy Das</a>
                            </p>
                        </div>
                        <div className="">
                            <ul className="flex justify-between items-center gap-10">
                                <li className=""><a href="#">Terms &amp; Conditions</a></li>
                                <li className=""><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer