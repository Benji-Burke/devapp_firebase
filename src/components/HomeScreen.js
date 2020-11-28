import React from 'react'
import logo from '../DevAppAgencyLogo2.png';




function HomeScreen() {
    return (
        <div>
            <header className="App-header" id="home">

                <img src={logo} className="app-logo" alt="logo" />
                <p>
                    Let us help you grow your business.
                </p>
            </header>
            <section className="container section-text first" id="about">

                <div className="row">
                    <div className="col-12">
                        <h2 className="header-text">
                            WE ARE DEVAPP AGENCY
            </h2>
                        <p>
                            We design and develop digital products that help clients grow, and transform their endeavors.
                            We listen and understand why before we tackle a project. We work together to achieve your goals,
                            and use our expertiese to find your dream into reality.
            </p>

                    </div>

                </div>
            </section>
           
         
            <div className="flex-grid column"  id="services">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">3</div>
            </div>

      


        </div>
    )
}

export default HomeScreen
