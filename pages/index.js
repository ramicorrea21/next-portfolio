import Link from 'next/link';
import React from 'react';
import Education from '../components/Education';
import Layaout from '../components/Layaout';
import Progress from '../components/progress';
import Projects from '../components/Projects';
import { projects, skills, education } from '../profile';
const Index = () => {
  return (
    <>
      <Layaout>
        {/*  header card */}
        <header className='row'>
          <div className='col-md-12'>
            <div className='card card-body bg-secondary text-light'>
              <div className='row'>
                <div className='col-md-4'>
                  <img src='React.png' className='img-fluid' />
                </div>
                <div className='col-md-8'>
                  <h1>Ramiro Correa</h1>
                  <h3>React Frontend Developer</h3>
                  <p className='fs-4'>Hi! I am a 17 years old React Developer with a big passion for this niche, I work with freelance proyects for little and medium emprendiments. I can fully build a completly funcional eCommerce App with the best tecnologies in the market, in this portfolio I would like to show you some of my education and proyects.  </p>
                  <Link href='/contactar'>Contactar</Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*  segunda seccion */}
        <div className='row'>
          <div className='col-md-4'>
            <div className='card bg-light'>
              <div className='card-body'>
                <h1>Skills</h1>
                <div className='py-2'>
                  <ul className='px-0'>
                    {skills.map((skill) => <Progress skill={skill} id={skill.id} />)}
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='card bg-light'>
              <div className='card-body'>
                <h1 className='px-1'>Education</h1>
                <div className='py-1'>
                  <ul className='pt-4'>
                    {education.map((ed) => <Education ed={ed} id={ed.id} />)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** Protfolio */}
        <div className='row'>
          <div className='col-md-12'>
            <div className='card card-body bg-dark'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1 className='text-center text-light'>Protfolio</h1>
                </div>

                  {projects.map((p) => <Projects p={p} id={p.id}/>)}
                  <div className='text-center mt-4'>
              <Link href="/portfolio" className='btn btn-outline-light'>
                More Projects
              </Link>
            </div>
              </div>
            </div>
          </div>
        </div>
      </Layaout>
    </>
  );
}

export default Index;

