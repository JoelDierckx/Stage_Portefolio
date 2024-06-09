import { FunctionComponent } from 'react'

const Banner: FunctionComponent = () => {
    return (
        <div className='banner borderradius'>
            <div className='bannerimg'>
                <div className='blur row justify-content-center'>
                    <div className='col-11 col-md-10'>
                        <div className='bannercontent Background2 row borderradius'>
                            <div className='col-12 col-md-4 text-center'>
                                <img className='bannerprofile' src="/img/joelbanner.png" alt="Joël" />
                            </div>
                            <div className='Font3 col-12 col-md-8 mt-4 mb-2 text-center'>
                                <h1>Hallo, mijn naam is Joël</h1>
                                <p>Ik ben een full-stack developer, met ervaring in C#, Java en Webdevelopment.</p>
                                <a href="/Contact" className='Font3 button borderradius' >Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner