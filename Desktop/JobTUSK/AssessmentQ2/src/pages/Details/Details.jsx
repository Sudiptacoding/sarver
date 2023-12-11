import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Swal from 'sweetalert2';

const Details = () => {
    const data = useLoaderData()

    const addToCard = () => {
        Swal.fire({
            title: "Good job!",
            text: "Add to card successfully!",
            icon: "success"
        });
    }
    return (
        <div className="py-8 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col -mx-4 md:flex-row">
                    <div className="px-4 md:flex-1">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 overflow-hidden">
                            <img className="object-top w-full h-auto" src={data?.[0]?.image_url} alt="Product Image" />
                        </div>
                        <div className="flex mb-4 -mx-2">
                            <div className="w-1/2 px-2">
                                <button onClick={() => addToCard()} className="w-full px-4 py-2 font-bold text-white bg-gray-900 rounded-full dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                            </div>
                            <div className="w-1/2 px-2">
                                <Link to='/'> <button className="w-full px-4 py-2 font-bold text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">Go to Home</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 md:flex-1">
                        <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">Product Name ({data?.[0]?.name})</h2>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                            {data?.[0]?.description}
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price : </span>
                                <span className="text-gray-600 dark:text-gray-300">${data?.[0]?.srm}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">first_brewed : </span>
                                <span className="text-gray-600 dark:text-gray-300">{data?.[0]?.first_brewed}</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Total rating</span>
                            <div className="flex items-center mt-2">
                                <StarRatings
                                    rating={data?.[0]?.ph}
                                    numberOfStars={6}
                                    starDimension="20px"
                                    starSpacing="5px"
                                    starRatedColor="blue"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">{data?.[0]?.tagline}</span>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                {data?.[0]?.brewers_tips}
                            </p>
                        </div>

                        <div className="flex pt-10 mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price : </span>
                                <span className="text-gray-600 dark:text-gray-300">${data?.[0]?.srm}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">first_brewed : </span>
                                <span className="text-gray-600 dark:text-gray-300">{data?.[0]?.first_brewed}</span>
                            </div>
                        </div>


                        <div className="hs-accordion-group">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Ingredients</span>
                            {data?.[0]?.ingredients?.hops && <>
                                {
                                    data?.[0]?.ingredients?.hops?.map((item, i) => {
                                        return <div key={i} className="hs-accordion active" id="hs-basic-heading-one">
                                            <button className="inline-flex items-center w-full px-6 py-3 text-sm font-semibold text-gray-800 rounded-lg hs-accordion-toggle hs-accordion-active:text-blue-600 gap-x-3 text-start hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-collapse-one">
                                                <svg className="block w-4 h-4 text-gray-600 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                <svg className="hidden w-4 h-4 text-gray-600 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                                {item?.name} #{i}
                                            </button>
                                            <div id="hs-basic-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-one">
                                                <div className="px-6 pb-4">
                                                    <p className="text-sm text-gray-600 dark:text-gray-200">

                                                        <div className="flex">
                                                            <div className="mr-4">
                                                                <span className="font-bold text-gray-700 dark:text-gray-300">Price : </span>
                                                                <span className="text-gray-600 dark:text-gray-300">{item?.amount?.value}</span>
                                                            </div>
                                                            <div>
                                                                <span className="font-bold text-gray-700 dark:text-gray-300">unit : </span>
                                                                <span className="text-gray-600 dark:text-gray-300">{item?.amount?.unit}</span>
                                                            </div>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </>}






                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;