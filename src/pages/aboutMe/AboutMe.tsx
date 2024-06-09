import { FunctionComponent } from 'react'

const AboutMe: FunctionComponent = () => {
    return (
        <div className='row justify-content-center mt-3'>
            <div className='col-11 col-md-11'>
                <h1 className='mainbutton Font3 fitcontent'>Over mij</h1>
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>3D tekenen</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row justify-content-center flex-row-reverse'>
                        <div className='col-12 col-md-4'>
                            <video className='imgcard borderradius mb-2' autoPlay loop muted>
                                <source src="/img/swim_anim.mkv" type="video/mp4" />
                            </video>
                        </div>
                        <div className='col-12 col-md-8'>
                            <p>In mijn vrije tijd doe ik aan 3D tekenen en animatie. Hiervoor gebruik ik Blender.
                                Oorspronkelijk gebruikte ik Unreal Engine 4 om mijn modellen weer te geven.
                                Momenteel ben ik aan het experimenteren met Blazor en Babylon.js om mijn modellen in de browser te kunnen weergeven.</p>
                        </div>
                    </div>
                </div>
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>Over mij</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row justify-content-center '>
                        <div className='col-12 col-md-4'>
                            <img className='imgcard borderradius mb-2' src="/img/GameCard.jpg" alt="Cipal Schaubroeck" />
                        </div>
                        <div className='col-12 col-md-8'>
                            <p>Hallo, mijn naam is Joël. Ik woon in Vosselaar en ben tweetalig opgegroeid in het Nederlands en het Duits.
                                Als hobby lees ik graag fantasieboeken. Daarnaast lees ik ook non-fictie boeken met historische of wereldlijke thema’s.
                                Thuis heb ik een trouwe viervoeter, Robby. Met hem ga ik bijna dagelijks wandelen. Ik hou ook van spelletjes spelen met
                                andere mensen. Zo speel ik graag videogames met meerdere spelers. Verder speel ik ook wel eens een bordspel bij
                                de Kolonisten te Turnhout.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default AboutMe