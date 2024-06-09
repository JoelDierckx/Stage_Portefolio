import { FunctionComponent } from 'react'

const Documents: FunctionComponent = () => {
    return (
        <div className='row justify-content-center mt-3'>
            <div className='col-11 col-md-11'>
                <h1 className='mainbutton Font3 fitcontent'>Documenten</h1>
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
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>Eindrapport Werkplekleren Cipal Schaubroeck 2024</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row text-center'>
                        <p>Onderstaand document bevat mijn eindverslag over mijn werkplekleren bij Cipal Schaubroeck. Hierin beschrijf ik het verloop van het werkplekleren, de stageplaats, de stageopdracht en mijn vooruitgang als programmeur. Daarna volgt een reflectie op de stageperiode. Dit verslag weerspiegeld mijn vaardigheid om te rapporteren.
                        </p>
                        <a href="/img/Eindverslag_werkplekleren_JoëlDierckx.pdf" download className="m-auto button Background1 Font3 borderradius fitcontent mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                        </a>
                    </div>
                </div>
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>Verslagen projectwerk opleiding programmeren Thomas More</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row text-center'>
                        <p>In deze sectie zijn enkele documenten te vinden, die ik tijdens mijn opleiding programmeren opgesteld heb. De verslagen Agile zijn een kort en bondige samenvatting van het Agile-proces dat mijn team heeft gebruikt tijdens een groepswerk in het vak MVC. De documentatie voor het vak “projecten voor het werkveld” omvat de gebruikersdocumentatie voor een WordPress-website. Deze website is gemaakt voor de horecazaken van Groep Intro. Over hetzelfde project heb ik ook een zelfreflectieverslag opgesteld volgens de STAR-methode. Deze documenten geven een beeld van de documentatievaardigheden die aangeleerd zijn tijdens de opleiding graduaat programmeren te Thomas More Turnhout.
                        </p>
                        <p>MVC-groepswerk Verslagen Agile</p>
                        <a href="/img/MVC_Verslagen_Agile.pdf" download className="m-auto button Background1 Font3 borderradius fitcontent mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                        </a>
                        <p>Documentatie voor projecten voor het werkveld</p>
                        <a href="/img/PVHW_Documentatie.pdf" download className="m-auto button Background1 Font3 borderradius fitcontent mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                        </a>
                        <p>Zelfreflectie voor projecten voor het werkveld</p>
                        <a href="/img/PVHW_DierckxJoël_zelfreflectie.pdf" download className="m-auto button Background1 Font3 borderradius fitcontent mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Documents