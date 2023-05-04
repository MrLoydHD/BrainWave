import React from 'react';
import image from '../Images/matematica.jpeg';

function HomeCarousel() {
  return (
    <div className="carousel w-10/12">
        <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
            <div className="px-3 flex justify-center w-1/4">
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <img className="w-full h-40 object-cover" src={image} alt={"title"} />
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 flex justify-center w-1/4">
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <img className="w-full h-40 object-cover" src={image} alt={"title"} />
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 flex justify-center w-1/4">
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <img className="w-full h-40 object-cover" src={image} alt={"title"} />
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
            <div className="px-3 flex justify-center w-1/4">
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <img className="w-full h-40 object-cover" src={image} alt={"title"} />
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 flex justify-center w-1/4">
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <img className="w-full h-40 object-cover" src={image} alt={"title"} />
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 flex justify-center w-1/4">
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <img className="w-full h-40 object-cover" src={image} alt={"title"} />
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div> 
    </div>
  );
}

export default HomeCarousel;