import { FunctionComponent } from 'react'

const ProjectPage: FunctionComponent = () => {
    return (
        <div className='row justify-content-center mt-3'>
            <div className='col-11 col-md-11'>
                <h1 className='mainbutton Font3 fitcontent'>Portfolio</h1>
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>2024</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row justify-content-center '>
                        {/* card */}
                        <div className='col-11 col-md-5 col-lg-4 p-2'>
                            <div className='Background1 borderradius card Font3 text-center'>
                                <h3 className='m-1 '>Deze website!</h3>
                                <img className='imgcard' src="/img/website2.png" alt="website2" />
                                <p className='m-1 '>Voor de eindevaluatie van mijn stageperiode heb ik deze website gemaakt. De website is opgebouwd in React en Typescript. Dit heb ik gedaan om te oefenen op Typescript, een taal die ik in mijn stage niet gebruikt heb. Verder bevat deze pagina alle informatie om als sollicitatieportfolio te dienen. Verken deze website om het project te zien! Of klik op de knop om de code op GitHub te bekijken.</p>
                                <a href="https://github.com/JoelDierckx/Stage_Portefolio" target='_blank' className="button Background2 Font3 borderradius fitcontent selfcenter">
                                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff" /></svg>
                                </a>
                            </div>
                        </div>
                        {/* card */}
                        <div className='col-11 col-md-5 col-lg-4 p-2'>
                            <div className='Background1 borderradius card Font3 text-center'>
                                <h3 className='m-1 '>Stageproject</h3>
                                <img className='imgcard' src="/img/MyHr.png" alt="website2" />
                                <p className='m-1 '>Voor mijn opleiding heb ik stage gelopen bij Cipal Schaubroeck. Hier kreeg ik de opdracht om een MVP project te maken van de MyHr-app. Hiervoor heb ik gebruik gemaakt van Java Spring boot, Thymeleaf, HTMX en Javascript. Verder heb ik gewerkt met de testsoftware Cypress, een MS SQL database en Docker. Enkele features van de applicatie omvatten meertaligheid, een functioneel up-en download systeem en een mobilefriendly design. De code is vanwege bedrijfsrichtlijnen niet beschikbaar.</p>
                            </div>
                        </div>
                        {/* card */}
                        <div className='col-11 col-md-5 col-lg-4 p-2'>
                            <div className='Background1 borderradius card Font3 text-center'>
                                <h3 className='m-1 '>Demoprojecten</h3>
                                <img className='imgcard' src="/img/MyHr2.png" alt="website2" />
                                <p className='m-1 '>Om structureel te kunnen werken heb ik tijdens mijn stage bij Cipal Schaubroeck meerdere demoprojecten aangemaakt. Hierin heb ik meerdere features uitgewerkt zonder daarbij de code van het hoofdproject te contamineren. Deze demo’s omvatten JPA database operaties, internationalisatie met Thymeleaf (meertaligheid), werken met interceptors en cookies, bestanden up-en downloaden en websockets. De code is vanwege bedrijfsrichtlijnen niet beschikbaar.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>2023</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row justify-content-center '>
                        {/* card */}
                        <div className='col-11 col-md-5 col-lg-4 p-2'>
                            <div className='Background1 borderradius card Font3 text-center'>
                                <h3 className='m-1 '>React website</h3>
                                <img className='imgcard' src="/img/Frontenddev.png" alt="website2" />
                                <p className='m-1 '>Tijdens het vak frontend development, aan de hogeschool Thomas More Turnhout, heb ik geleerd te werken met React en Typescript. Als opdracht heb ik hiervoor een website gemaakt over de puzzelserie Professor Layton. Op de pagina kan men meerdere karakters opzoeken en raadplegen. Daarnaast is er een sectie waarin meerdere puzzels speelbaar zijn. Klik op onderstaande knop voor de code.</p>
                                <a href="https://github.com/JoelDierckx/FrontendDevelopmentOpdracht" target='_blank' className="button Background2 Font3 borderradius fitcontent selfcenter">
                                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff" /></svg>
                                </a>
                            </div>
                        </div>
                        {/* card */}
                        <div className='col-11 col-md-5 col-lg-4 p-2'>
                            <div className='Background1 borderradius card Font3 text-center'>
                                <h3 className='m-1 '>Team-project MVC</h3>
                                <img className='imgcard' src="/img/MVC.png" alt="website2" />
                                <p className='m-1 '>Tijdens de opleiding programmeren heb ik samen met een team aan medestudenten gewerkt aan een MVC C# webapplicatie. Aan deze opdracht werd gewerkt volgens Agile principes. Taken werden opgesplitst in kleinere opdrachten. Die werden vervolgens opgenomen door teamleden in de stand-up, waarin de afgelopen en komende taken besproken werden. Hier heb ik kennis opgedaan over het werken in een team. Daarnaast is er ook oefening geweest op het maken van verslagen en documentatie.</p>
                            </div>
                        </div>
                        {/* card */}
                        <div className='col-11 col-md-5 col-lg-4 p-2'>
                            <div className='Background1 borderradius card Font3 text-center'>
                                <h3 className='m-1 '>C# programma</h3>
                                <img className='imgcard' src="/img/datamanipulatie.png" alt="website2" />
                                <p className='m-1 '>Tijdens het eerste jaar van de opleiding graduaat programmeren werd sterk ingezet op de taal C#. De culminatie hiervan is het ontwikkelen van een eigen desktop applicatie. Voor dit programma heb ik gebruik gemaakt van karakters uit de puzzelserie Proffesor Layton. Naast het inladen van bestaande karakters en puzzels kan men er eigen creëren, relaties toevoegen en karakter en puzzels linken. De frontend is gemaakt in WPF. Klik op de knop om de code te bekijken.</p>
                                <a href="https://github.com/JoelDierckx/datamanipulatie-Eindopdracht" target='_blank' className="button Background2 Font3 borderradius fitcontent selfcenter">
                                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff" /></svg>
                                </a>
                            </div>
                        </div>
                        {/* card */}
                        <div className='col-11 col-md-5 col-lg-4 p-2'>
                            <div className='Background1 borderradius card Font3 text-center'>
                                <h3 className='m-1 '>Wordpress website</h3>
                                <img className='imgcard' src="/img/Wordpress.png" alt="website2" />
                                <p className='m-1 '>Voor het vak projecten voor het werkveld heb ik, met een team van medestudenten, een nieuwe webpagina ontwikkeld voor het maatwerkbedrijf Group Intro. Deze hadden graag een nieuwe flexibele website voor hun horecazaken. Voor deze opdracht werd gecommuniceerd met de klant, die voor het project indirect als “product owner” optrad. In teamverband werd in Wordpress en Elementor een product ontwikkeld. Daarnaast werden er meerdere verslagen opgeleverd.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* yearcard */}
                <div className='Background2 Font3 borderradius p-0'>
                    <h1 className='Font3 m-2'>2022</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row justify-content-center '>
                        {/* card */}
                        <div className='col-11 col-md-5 col-lg-4 p-2'>
                            <div className='Background1 borderradius card Font3 text-center'>
                                <h3 className='m-1 '>Mijn eerste website!</h3>
                                <img className='imgcard' src="/img/eerstewebsite.png" alt="website2" />
                                <p className='m-1 '>Aan het begin van de opleiding programmeren krijgt men HTML en CSS aangeleerd. Dit zijn de basis bouwstenen van websites. Hierdoor heb ik binnen de eerste maanden van de opleiding mijn eigen website kunnen maken. Sindsdien ben ik ver gevorderd in het programmeren en designs van websites. Zo heb ik geleerd te werken met javascript en webframeworks om dynamische webpagina te maken. Maar het is altijd leuk om te zien hoe men met zeer eenvoudige elementen een passabel product kan maken. Klik op de knop om de code te bekijken.</p>
                                <a href="https://github.com/JoelDierckx/MyFirstWebpage" target='_blank' className="button Background2 Font3 borderradius fitcontent selfcenter">
                                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ProjectPage