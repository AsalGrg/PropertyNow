import React from 'react'

const PropertyCard = ({ property, addFavoriteHandler, removeFavoriteHandler }) => {
    return (
        <div className='border-black/40 border rounded-md p-3 space-y-4
        hover:shadow-lg shadow-primary/40
        hover:scale-3d hover:scale-105
        transition-all duration-200 ease-initial
        '>
            <img src={property.imageUrl} alt=""
                className='w-full h-72 rounded-sm object-cover'
            />

            <div className='space-y-3'>
                <div className='flex justify-between items-center'>

                    {/* title */}
                    <div>
                        <h3 className='para font-playfair font-medium'>{property.title}</h3>
                        <div className='flex items-center gap-1 text-black/80'>
                            <i className="fa-solid fa-location-dot"></i>
                            <p className='para-small'>{property.location}</p>
                        </div>
                    </div>

                    {/* favourite */}
                    <div className='w-fit cursor-pointer'
                        onClick={() => {
                            property.isFavourite 
                            ? removeFavoriteHandler(property._id) 
                            : addFavoriteHandler!==null && addFavoriteHandler(property._id)
                        }}
                    >
                        {property.isFavourite ? (
                            <i className="fa-solid fa-heart para-big text-accent"></i>
                        ) : (
                            <i className="fa-regular fa-heart para-big text-accent"></i>
                        )}
                    </div>
                </div>


                {/* price */}
                <div className='flex items-center gap-2 text-black/80'>
                    <i className="fa-solid fa-tag para text-accent"></i>
                    <p className='para font-bold'>Rs. {property.price}</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard