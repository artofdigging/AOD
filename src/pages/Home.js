import react from 'react'
import Banner from '../components/Banner/Banner'
import Hero from '../components/Hero/Hero'
import LongAd from '../components/Ad/LongAd'
import Radio from '../components/Radio/Radio'
import Latest from '../components/Latest/Latests'
import {Container} from 'semantic-ui-react'


function Home() {
    return (
      <div>
        <Banner />
        <Container>
          <Hero />
          <LongAd />
        </Container>
        <Radio />
        <Latest />
      </div>
    );
}

export default Home
