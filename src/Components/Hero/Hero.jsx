import greendots from "/dots-green.svg"
import sofaimg from "/couch.png"

const Hero = () => {
    return (
        <div id="hero" className="bg-[#3B5D50] md:h-[95vh]  text-white flex justify-center items-center">
            <div className="md:max-w-screen-2xl md:mx-auto md:px-32 px-5 py-30 md:py-10">
                <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-10 md:gap-0">
                    <div className="">
                        <div className="flex flex-col gap-10">
                            <h1 className="text-5xl font-bold">
                                Modern Interior <br />
                                Design Studio
                            </h1>
                            <p className="text-gray-300">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                <br />
                                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                            <div>
                                <a href="#shops" className="bg-[#F8B810] hover:bg-transparent border-2 border-transparent hover:border-white active:scale-95 hover:text-white text-black font-semibold px-6 py-4 rounded-full active:scale transition-all mr-2">Shop Now</a>
                                <a href="#aboutus" className="hover:bg-[#F8B810] hover:text-black font-semibold px-6 py-4 rounded-full border-2 active:scale-95 transition-all">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative">
                            <img className="absolute -right-10 top-5" src={greendots} alt="" />
                            <img className="relative z-10" src={sofaimg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero