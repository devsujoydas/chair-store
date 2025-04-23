import post1 from "/post-1.jpg"
import post2 from "/post-2.jpg"
import post3 from "/post-3.jpg"

const Blogs = () => {
    return (
        <div id="blogs" className="">
            <div className="md:max-w-screen-2xl md:mx-auto md:px-32 pb-36">
                <div className="text-black flex justify-between items-center py-10 md:flex-row flex-col">
                    <div className="">
                        <h2 className="text-3xl font-medium">Recent Blog</h2>
                    </div>
                    <div className="">
                        <a href="#" className="border-b-2 border-black hover:border-transparent font-semibold translate-x-0">View All Posts</a>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 mx-10 grid-cols-1 gap-6">
                    <div className="">
                        <div className="">
                            <div className="overflow-hidden rounded-2xl">
                                <a href="#" className="">
                                    <img src={post1} alt="Image" className="rounded-2xl hover:scale-110 duration-300 transition-all" />
                                </a>
                            </div>
                            <div className="p-5">
                                <h3>
                                    <a className="font-semibold text-black" href="#">First Time Home Owner Ideas</a>
                                </h3>
                                <div className="mt-2">
                                    <span>by
                                        <a className="text-black font-semibold" href="#">Kristin Watson</a></span>
                                    <span>on
                                        <a className="text-black font-semibold" href="#">Dec 19, 2021</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="overflow-hidden rounded-2xl">
                                <a href="#" className="">
                                    <img src={post2} alt="Image" className="rounded-2xl hover:scale-110 duration-300 transition-all" />
                                </a>
                            </div>
                            <div className="p-5">
                                <h3>
                                    <a className="font-semibold text-black" href="#">How To Keep Your Furniture Clean</a>
                                </h3>
                                <div className="mt-2">
                                    <span>by
                                        <a className="text-black font-semibold" href="#">Robert Fox</a></span>
                                    <span>on
                                        <a className="text-black font-semibold" href="#">Dec 15, 2021</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="overflow-hidden rounded-2xl">
                                <a href="#" className="">
                                    <img src={post3} alt="Image" className="rounded-2xl hover:scale-110 duration-300 transition-all" />
                                </a>
                            </div>
                            <div className="p-5">
                                <h3>
                                    <a className="font-semibold text-black" href="#">Small Space Furniture Apartment Ideas</a>
                                </h3>
                                <div className="mt-2">
                                    <span>by
                                        <a className="text-black font-semibold" href="#">Kristin Watson</a></span>
                                    <span>on
                                        <a className="text-black font-semibold" href="#">Dec 12, 2021</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs