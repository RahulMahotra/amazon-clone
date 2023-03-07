import React from 'react'
import './styles/Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
        /> 

        <div className = "home__row">
            <Product
                id = "1"
                title = "lorem ipsum"
                price = {69}
                rating = {5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
            <Product
                id = "2"
                title = "lorem ipsum"
                price = {69}
                rating = {5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
        </div>

        <div className = "home__row">
        <Product
                id = "3"
                title = "lorem ipsum"
                price = {69}
                rating = {5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
        <Product
                id = "12"
                title = "lorem ipsum"
                price = {69}
                rating = {5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
        <Product
                id = "23"
                title = "lorem ipsum"
                price = {69}
                rating = {5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
        </div>

        <div className = "home__row">
        <Product
                id = "123"
                title = "lorem ipsum"
                price = {69}
                rating = {5}
                image="https://images.unsplash.com/photo-1640681858035-5e62f72d90a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
            />
        </div>

    </div>
  )
}

export default Home
