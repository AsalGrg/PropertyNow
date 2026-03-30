import React from 'react'
import PropertyCard from './PropertyCard'

const PropertiesListing = ({ properties = [], addFavoriteHandler = null, removeFavoriteHandler,emptyText, setIsClicked}) => {

    return (

        <>
            {properties.length ? (
                <div className='grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-6' >
                    {
                        properties.map(property => (
                            <PropertyCard
                                property={property}
                                addFavoriteHandler={addFavoriteHandler}
                                removeFavoriteHandler={removeFavoriteHandler} 
                                setIsClicked={setIsClicked}
                                />
                        ))
                    }
                </div>
            ) : (
                <div className='min-h-[300px] w-fit flex flex-col items-center mx-auto justify-center space-y-4'>
                    <img src='/empty.svg' className='max-w-[min(100%, 200px)]'/>
                    <p className='para-big font-playfair text-center'>{emptyText}</p>
                </div>
            )}
        </>
    )
}

export default PropertiesListing
