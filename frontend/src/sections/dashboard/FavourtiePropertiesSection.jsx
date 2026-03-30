import React, { useEffect, useState } from 'react'
import PropertiesListing from '../../components/PropertiesListing'
import Heading from '../../components/Heading'
import {getFavouriteProperties, removeFromFavourite } from '../../services/favouriteProperty'
import { useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

const FavourtiePropertiesSection = () => {

    const [properties, setProperties] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        async function fetchProperties() {
            try {
                const response = await getFavouriteProperties();
                const data = response.data;
                setProperties(data.properties)
                // console.log(data.properties)
            } catch (err) {
                if (err.response.status === 401) {
                    navigate('/login')
                }
                else {
                    toast.error(err.response.data.message)
                }
            }
        }
        fetchProperties();
    }, [])

    async function removeFavourite(propertyId) {
        try {

            console.log(propertyId)
            const response = await removeFromFavourite(propertyId)
            toast.success(response.data.message)
            setProperties(prev =>
                prev.filter(property => property._id !== propertyId)
            );

        } catch (error) {
            if (error.response.status === 401) {
                navigate('/login')
            } else {
                toast.error(error.reponse.data.message)
            }
        }
    }

    return (
        <section className=''
        id='favouriteProperties'
        >
            <div className='content !py-14 space-y-14'>
                <Heading primaryText={"Favourtie"} secondaryText={"Properties"} para={"Explore the favorite properties listing."} />

                <PropertiesListing properties={properties} removeFavoriteHandler={removeFavourite} 
                emptyText={"Looks like you don't have any favorites at the moment."}
                />
            </div>

            <ToastContainer/>
        </section >
    )
}

export default FavourtiePropertiesSection