import { FunctionComponent } from 'react'

const More: FunctionComponent = () => {
    return (
        <div>
            <div className='row justify-content-center mt-4 pb-3'>
                <div className='col-11 col-md-9 Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>Meer</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row justify-content-center'>
                        <div className='col-11 col-md-5 m-2 p-0 pb-3 Background1 borderradius'>
                            <h3 className='m-2' >Over mij</h3>
                            <img className='imgcard' src="/img/jumbo_card.jpg" alt="3D-art" />
                            <div className='text-center'>
                                <p className='m-2 p-1'>Ben je geïnteresseerd in het lezen over mijn extra vaardigheden en vrijetijd besteding? Klik dan op onderstaande knop!</p>
                                <a href="/AboutMe" className='button Background2 Font3 borderradius'>Meer...</a>
                            </div>
                        </div>
                        <div className='col-11 col-md-5 m-2 p-0 pb-3 Background1 borderradius'>
                            <h3 className='m-2'>Ervaringen</h3>
                            <img className='imgcard' src="/img/HistorischDocument_card.jpg" alt="3D-art" />
                            <div className='text-center'>
                                <p className='m-2 p-1' >Ben je geïnteresseerd in het lezen over mijn levensloop en ervaringen? Klik dan op onderstaande knop!</p>
                                <a href="/experience" className='button Background2 Font3 borderradius'>Meer...</a>
                            </div>
                        </div>
                        <div className='col-11 col-md-5 m-2 p-0 pb-3 Background1 borderradius'>
                            <h3 className='m-2'>Portefolio</h3>
                            <img className='imgcard' src="/img/c_card.jpg" alt="3D-art" />
                            <div className='text-center'>
                                <p className='m-2 p-1 ' >Ben je geïnteresseerd in het lezen over mijn opgeleverde projecten en mijn loopbaan als programmeur? Klik dan op onderstaande knop!</p>
                                <a href="/projects" className='button Background2 Font3 borderradius'>Meer...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default More