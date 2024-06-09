import { FunctionComponent } from 'react'

const Experience: FunctionComponent = () => {
    return (
        <div className='row justify-content-center mt-3'>
            <div className='col-11 col-md-11'>
                <h1 className='mainbutton Font3 fitcontent'>Ervaringen</h1>
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>Cipal Schaubroeck: Werkplekleren</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row justify-content-center '>
                        <div className='col-12 col-md-4'>
                            <img className='imgcard borderradius mb-2' src="/img/CipalCard.png" alt="Cipal Schaubroeck" />
                        </div>
                        <div className='col-12 col-md-8'>
                            <p>Bij Cipal Schaubroeck liep ik stage van 12 februari tot 3 juni 2024.
                                Dit was voor het onderdeel “werkplekleren” in de opleiding programmeren.
                                Deze opleiding wordt besproken in de volgende sectie. Het werkplekleren neemt het laatste halve jaar
                                in van de tweejarige opleiding. Hierin verwerven studenten ervaring op de werkvloer van een bedrijf.
                                Mijn werkplekleren bestond uit het ontwikkelen van een MVP-project “MyHr”. In dit project heb ik zowel
                                de UI als de backend zelfstandig ontworpen en gemaakt. De kern van de opdracht was om een flexibele en
                                responsieve applicatie op te leveren. Tijdens mijn werkplekleren heb ik bijgeleerd over
                                Java Spring boot, Thymeleaf, HTMX en andere programmeertalen en frameworks. Daarnaast heb ik ook
                                ervaring opgedaan over Agile in de praktijk.</p>
                        </div>
                    </div>
                </div>
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>Thomas More Turnhout: Graduaat Programmeren</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row justify-content-center flex-row-reverse'>
                        <div className='col-12 col-md-4'>
                            <img className='imgcard borderradius mb-2' src="/img/TMCard.png" alt="Cipal Schaubroeck" />
                        </div>
                        <div className='col-12 col-md-8'>
                            <p>Tussen september 2022 en juni 2024 volgde ik de opleiding graduaat programmeren te Thomas More Turnhout.
                                Dit is praktijk gerichte opleiding tot full-stack developer. Tijdens het eerste jaar krijgt men de
                                basis van programmeren aangeleerd alsook de sociale vaardigheden om met klanten en medewerkers om te gaan.
                                C# is de programmeertaal die in het eerste jaar het meeste aanbod komt en men leert een volledige applicatie hiermee
                                te ontwikkelen. Daarnaast komen ook javascript en SQL aanbod. In het tweede jaar worden voornamelijk webframeworks
                                aangeleerd waaronder React. De studenten volgen in dit jaar ook een stage, zie bovenstaande sectie.</p>
                        </div>
                    </div>
                </div>
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>Corona: Blender en Unreal</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row justify-content-center '>
                        <div className='col-12 col-md-4'>
                            <img className='imgcard borderradius mb-2' src="/img/Blender_card.jpg" alt="Cipal Schaubroeck" />
                        </div>
                        <div className='col-12 col-md-8'>
                            <p>Tijdens de coronacrisis heb ik mij zelfstandig Blender, 3D tekensoftware, en Unreal Engine 4, een 3D-engine, aangeleerd. In Blender heb ik 3d-modellen gemaakt alsook geanimeerd. Unreal beschikt over een eigen visuele programmeertaal. Hierin heb ik rudimentaire kennis opgedaan over programmeren.</p>
                        </div>
                    </div>
                </div>
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>Universiteit Antwerpen: Geschiedenis</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row justify-content-center flex-row-reverse'>
                        <div className='col-12 col-md-4'>
                            <img className='imgcard borderradius mb-2' src="/img/UACard.png" alt="Cipal Schaubroeck" />
                        </div>
                        <div className='col-12 col-md-8'>
                            <p>Van 2014 tot 2020 volgde ik de opleiding geschiedenis aan de Universiteit Antwerpen.
                                De eerste jaren van deze opleiding omvatten voornamelijk algemene vakken zoals economie of tijdsvlakken zoals middeleeuwen.
                                Daarnaast leert men ook kritisch lezen en schrijven. In de latere jaren specialiseert men op een bepaald domein.
                                Mijn specialisatie is de politiek.
                                Tijdens deze opleiding leerde ik hoe men historisch onderzoek voert.
                                Men formuleert eerst een vraagstelling, een onderzoekhypothese. Vervolgens raadpleegt men dan relevante historische bronnen
                                die men dan kritisch analyseert en binnen hun historische context plaatst. Uiteindelijk onderbouwt men een antwoord op de
                                hypothese met de beschikbare gegevens. Tijdens mijn opleiding heb ik met een breed scala aan documenten gewerkt uit de
                                16de eeuw tot 20ste eeuw. Dit omvatte persoonlijke documenten, administratieve documenten van gemeenten, boekhoudingen
                                en nog veel meer.</p>
                        </div>
                    </div>
                </div>

                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>CV</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row text-center'>
                        <p>Download mijn curriculum vitae hier!
                        </p>
                        <a href="/img/2024 CV.pdf" download className="m-auto button Background1 Font3 borderradius fitcontent mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Experience