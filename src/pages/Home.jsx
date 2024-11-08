import React from 'react'
import BoxFiveCard from '../components/Card-Home/BoxFiveCard'
import BoxThreeContainer from '../components/Container-Home/BoxThreeContainer'
import Hero from '../components/Hero-Home/Hero'
import Nav from '../components/Nav'
import Footer from '../components/Footer/Footer'
import Login from '../pages/auth/Login'

const Home = () => {
    return (
        <div>
            {/* <Nav/>
            <Hero />
            <BoxFiveCard name="Promotion"/>
            <BoxFiveCard name="Most Popular"/>
            <BoxThreeContainer/>
            <Footer/> */}
            <Login />
        </div>
    )
}

export default Home
