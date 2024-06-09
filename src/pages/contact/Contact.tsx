import { FunctionComponent } from 'react'

const Contact: FunctionComponent = () => {
    return (
        <div className='row justify-content-center mt-3'>
            <div className='col-11 col-md-11'>
                <h1 className='mainbutton Font3 fitcontent'>Contact</h1>
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
                    <h1 className='Font3 m-2'>Contact</h1>
                    <hr className='Font1 tabhr Background1' />
                    <div className='row pb-2'>
                        <div className='col-12 col-md-6'>
                            <h3>Adres</h3>
                            <p className='p-0 m-0 ms-5'>Osseven 44</p>
                            <p className='p-0 m-0 ms-5'>2350 Vosselaar</p>
                            <p className='p-0 m-0 ms-5'>België</p>
                            <h3>Telefoon</h3>
                            <p className='p-0 m-0 ms-5'>0478 01 27 80</p>
                            <h3>Email</h3>
                            <p className='p-0 m-0 ms-5'>joeldierckx@gmail.com</p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <h3>Kanalen</h3>
                            <h5 className='p-0 m-0 ms-5'>Github</h5>
                            <div className='d-flex'>
                                <a href="https://github.com/JoelDierckx" target='_blank' className="button Background1 Font3 borderradius fitcontent  ms-5">
                                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff" /></svg>
                                </a>
                            </div>
                            <h5 className='p-0 m-0 ms-5'>Linkedin</h5>
                            <div className='d-flex'>
                                <a href="https://be.linkedin.com/in/jo%C3%ABl-dierckx-669727312" target='_blank' className="button Background1 Font3 borderradius fitcontent ms-5">
                                    <svg height="40" viewBox="0 0 72 72" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB" /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF" /></g></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact