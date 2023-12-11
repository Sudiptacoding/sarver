import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const cards = props.cards;
    return (
        <div>
            <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14 pt-10 ">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Lorem ipsum </h2>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere eligendi nulla atque rem molestias, inventore vitae consectetur autem natus?</p>
                </div>
                <div className="container px-4 mx-auto lg:px-8 xl:max-w-7xl">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {
                            cards?.length > 0 ? <>
                                {
                                    cards?.map((item, i) => {
                                        return <a key={i} className="relative block overflow-hidden transition ease-out group active:opacity-75 sm:col-span-2 md:col-span-1"
                                        >
                                            <img
                                                src={item?.image_url}
                                                alt="Product Image"
                                                className="transform transition ease-out group-hover:scale-110 h-[400px] w-1/2 object-cover object-top"
                                            />
                                            <div
                                                className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0"
                                            ></div>
                                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                                <Link to={`/details/${item.id}`}>
                                                    <div
                                                        className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white cursor-pointer rounded-3xl bg-opacity-95 group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90"
                                                    >
                                                        {item?.name}
                                                    </div>
                                                </Link>
                                            </div>
                                        </a>
                                    })
                                }
                            </> : <div className='flex items-center justify-center pt-32'><h1 className='text-2xl'>No Data Here</h1></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;