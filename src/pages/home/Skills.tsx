import { FunctionComponent } from 'react'
import Progressbar from './progressbar'
import Progressbarfull from './progressbarfull'

const Skills: FunctionComponent = () => {
    return (

        <div className='row justify-content-center mt-4'>
            <div className='col-11 col-md-9 Background2 Font3 borderradius p-0'>
                <h1 className='Font3 m-2'>Vaardigheden</h1>
                <hr className='Font1 tabhr Background1' />
                <h3 className='m-2 ms-4'>Programmeertalen</h3>
                <Progressbar Text={"C#"} Percent={80}></Progressbar>
                <Progressbar Text={"Java"} Percent={75}></Progressbar>
                <Progressbar Text={"Javascript"} Percent={70}></Progressbar>
                <Progressbar Text={"Typescript"} Percent={70}></Progressbar>
                <Progressbar Text={"HTML + CSS"} Percent={80}></Progressbar>
                <h3 className='m-2 ms-4'>Frameworks</h3>
                <Progressbar Text={"React"} Percent={70}></Progressbar>
                <Progressbar Text={"Blazor"} Percent={50}></Progressbar>
                <Progressbar Text={"Spring Boot"} Percent={75}></Progressbar>
                <h3 className='m-2 ms-4'>Talen</h3>
                <Progressbar Text={"Nederlands"} Percent={100}></Progressbar>
                <Progressbar Text={"Engels"} Percent={80}></Progressbar>
                <Progressbar Text={"Duits"} Percent={80}></Progressbar>
                <Progressbar Text={"Frans"} Percent={50}></Progressbar>
                <h3 className='m-2 ms-4'>Extra Vaardigheden</h3>
                <Progressbarfull Text={"3D tekenen en animatie"}></Progressbarfull>
                <Progressbarfull Text={"Academisch onderzoek"}></Progressbarfull>
                <Progressbarfull Text={"Rijbewijs B"}></Progressbarfull>
            </div>
        </div>

    )
}
export default Skills