import { FunctionComponent, useState } from 'react'

const Navigation: FunctionComponent = () => {
    const [state, SetState] = useState<string>("d-none")

    const SetMenu = () => {
        if (state == "d-none") {
            SetState("d-block")
        }
        else {
            SetState("d-none")
        }
    }
    return (
        <div>
            <div className='spacer Background3'></div>
            {/*  nav pc */}
            <div className='d-none d-md-flex menufix Background3'>
                <div className='menuheader'>
                    <a href={'/'} className='mainmenu menuhead mainbutton  Font3'>Joël Dierckx</a>
                </div>
                <div className='menutail row'>
                    <div className=' col-9 d-flex justify-content-end'>
                        <div className='d-block text-center Background1 borderradius menutailpc'>
                            <a href={'/AboutMe'} className='mainmenu Font3'>Over mij</a>
                            <a href={'/Experience'} className='mainmenu Font3'>Ervaringen</a>
                            <a href={'/Projects'} className='mainmenu Font3'>Portfolio</a>
                            <a href={'/Documents'} className='mainmenu Font3'>Documenten</a>
                        </div>
                    </div>
                    <div className='col-3 col-3 d-flex justify-content-center'>
                        <a href={'/Contact'} className='Font3 mainbutton mainmenu m-auto'>Contact</a>
                    </div>

                </div>
            </div>
            {/*  nav phone */}
            <div className='d-block d-md-none Background2 menufix'>
                <div className='row'>
                    <div className='menuheaderphone col-9'>
                        <a href={'/'} className='mainmenu menuhead mainbutton  Font3'>Joël Dierckx</a>
                    </div>
                    <div className='col-3 text-center m-auto'>
                        <a onClick={SetMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                        </a>
                    </div>
                </div>

                <div className={state}>
                    <div className='ms-3'><a href={'/'} className='Font3 mainbutton mainmenu'>Home</a></div>
                    <div className='ms-3'><a href={'/AboutMe'} className='ms-1 mainmenu Font1'>Over mij</a></div>
                    <div className='ms-3'><a href={'/Experience'} className='ms-1 mainmenu Font1'>Ervaring</a></div>
                    <div className='ms-3'><a href={'/Projects'} className='ms-1 mainmenu Font1'>Portfolio</a></div>
                    <div className='ms-3'><a href={'/Documents'} className='ms-1 mainmenu Font1'>Documenten</a></div>
                    <div className='ms-3'><a href={'/Contact'} className='Font3 mainbutton mainmenu'>Contact</a></div>
                </div>
            </div>
        </div>


    )
}
export default Navigation