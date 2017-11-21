import React from 'react';
import { Segment, Grid, Container, Header, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import HeaderSection from './Header';
import FooterSection from './Footer';
import SideMenuSection from './SideMenu';
import './App.css';

export default class About extends React.Component {
 render () {
   return (
     <div className='full-height'>
       <HeaderSection />
       <Segment basic>
         <Grid>
           <Grid.Column width={4}>
             <SideMenuSection active='about_me'/>
           </Grid.Column>
           <Grid.Column stretched width={12}>
             <Segment>
               <Container fluid>
                 <Header as='h2'>About</Header>
                 <Message>
                  <p>
                    I have been developing my professional career since 2011, between that year and nowadays I have had the opportunity of gather some experiences on technological projects that has shown me the different tones of the Software Development. </p>
                    <p>From Rails to C#, I have been able to understand that there are technologies for each specific reason and that a programming language powerful but wrong used is the same as a terrible solution. One of my goals is move forward on my knowledge
                    then unite my skills in a strategic way to create quality solutions. Also I want to apply the technology transversally to each one of the sciences that we have in the world.
                  </p>
                </Message>
               </Container>
             </Segment>
           </Grid.Column>
         </Grid>
       </Segment>
       <FooterSection/>
     </div>
   )
 }
}
