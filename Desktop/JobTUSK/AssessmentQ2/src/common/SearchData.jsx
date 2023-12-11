import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Tooltip } from 'react-tooltip'

function SearchData() {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers')
            .then(res => {
                setItems(res.data)
            })

    }, [])
    const navigate = useNavigate()

    const handleOnSearch = (string, results) => {
    }

    const handleOnHover = (result) => {
 
    }

    const handleOnSelect = (item) => {
        navigate(`/details/${item.id}`)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <div className='cursor-pointer'>
                <div >
                    <a data-tooltip-id={item?.id}><h1>{item?.name}</h1></a>
                    <Tooltip id={item?.id} place={'right'}>
                        <div>
                            <img src={item?.strCategoryThumb} alt="" />
                            <span className='overflow-hidden w-[200px] h-[200px]' style={{ display: 'block', textAlign: 'left' }}> <img src={item?.image_url} className='w-full' alt="" /> </span>
                            <span className='' style={{ display: 'block', textAlign: 'left' }}> {item?.tagline}</span>
                        </div>
                    </Tooltip>
                </div>

            </div>
        )
    }


    return (
        <div className="App">
            <header className="App-header">
                <div className='relative lg:w-[450px] md:w-[350px] w-[270px]'>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                        fuseOptions={{ keys: ["name", "tagline"] }}
                        resultStringKeyName="name"
                        placeholder='Search your product'
                    />
                    <button type="submit" className="absolute top-0 right-0 h-full px-6 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded-r-0 rounded-tl-2xl rounded-tr-0 rounded-bl-0 rounded-br-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default SearchData
