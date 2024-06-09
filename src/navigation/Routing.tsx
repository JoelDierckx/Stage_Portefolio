import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import AboutMe from '../pages/aboutMe/AboutMe'
import Experience from '../pages/experience/Experience'
import ProjectPage from '../pages/projects/ProjectPage'
import Documents from '../pages/documents/Documents'

interface RoutingProps {
}
const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path='/AboutMe' element={<AboutMe></AboutMe>}></Route>
            <Route path='/Experience' element={<Experience></Experience>}></Route>
            <Route path='/Projects' element={<ProjectPage></ProjectPage>}></Route>
            <Route path='/Documents' element={<Documents></Documents>}></Route>
            <Route path='/Contact' element={<Contact></Contact>}></Route>
            <Route path={'*'} element={<Home></Home>}></Route>
        </Routes>
    )
}
export default Routing