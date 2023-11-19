import React from 'react'

import Layout from './Layout'
import Faq from '../components/Faq';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Service from '../components/Service';
import data from '../data.json';

const Home = () => {
  const { galleries, services, faqs } = data;

  return (
    <Layout> 
        <Hero />
        <Gallery data={galleries}/>
        <Service data={services}/>
        <Faq data={faqs}/>
    </Layout>
  )
}

export default Home
