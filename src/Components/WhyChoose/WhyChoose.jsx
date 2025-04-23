import truckimg from "/truck.svg"
import bagimg from "/bag.svg" 
import supportimg from "/support.svg"
import returnimg from "/return.svg"
import WhyChooseImg from "/why-choose-us-img.jpg"

const WhyChoose = () => {
    return (
        <div id="aboutus" className="">
            <div className="md:max-w-screen-2xl md:mx-auto md:px-32 mx-5">
                <div className="flex gap-5 justify-between items-center flex-col md:flex-row">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl text-black font-medium">Why Choose Us</h2>
                        <p>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                            velit. Aliquam vulputate velit <br />
                            imperdiet dolor tempor tristique.
                        </p>
                        <div className="grid grid-cols- gap-5 mt-8">
                            <div className="hover:shadow-xl shadow-2xl p-5 rounded-lg transition-all">
                                <div className="feature">
                                    <div className="icon">
                                        <img src={truckimg} alt="Image" className="imf-fluid" />
                                    </div>
                                    <h3 className="font-semibold">Fast &amp; Free Shipping</h3>
                                    <p className="text-xs mt-2">
                                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                                        aliquet velit. Aliquam vulputate.
                                    </p>
                                </div>
                            </div>
                            <div className="hover:shadow-xl shadow-2xl p-5 rounded-lg transition-all">
                                <div className="feature">
                                    <div className="icon">
                                        <img src={bagimg} alt="Image" className="imf-fluid" />
                                    </div>
                                    <h3 className="font-semibold">Easy to Shop</h3>
                                    <p className="text-xs mt-2">
                                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                                        aliquet velit. Aliquam vulputate.
                                    </p>
                                </div>
                            </div>
                            <div className="hover:shadow-xl shadow-2xl p-5 rounded-lg transition-all">
                                <div className="feature">
                                    <div className="icon">
                                        <img src={supportimg} alt="Image" className="imf-fluid" />
                                    </div>
                                    <h3 className="font-semibold">24/7 Support</h3>
                                    <p className="text-xs mt-2">
                                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                                        aliquet velit. Aliquam vulputate.
                                    </p>
                                </div>
                            </div>
                            <div className="hover:shadow-xl shadow-2xl p-5 rounded-lg transition-all">
                                <div className="feature">
                                    <div className="icon">
                                        <img src={returnimg} alt="Image" className="imf-fluid" />
                                    </div>
                                    <h3 className="font-semibold">Hassle Free Returns</h3>
                                    <p className="text-xs mt-2">
                                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                                        aliquet velit. Aliquam vulputate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-center items-center overflow-hidden rounded-xl">
                            <a href="#">
                                <img src={WhyChooseImg} alt="Image" className="hover:scale-110 transition-all rounded-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose