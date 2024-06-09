import { FunctionComponent } from 'react'
import Banner from './Banner';
import Introduction from './Introduction';
import Skills from './Skills';
import More from './More';

const Home: FunctionComponent = () => {
    return (
        <div className='page'>
            <Banner></Banner>
            <Introduction></Introduction>
            <Skills></Skills>
            <More></More>
        </div>
    )
}
export default Home