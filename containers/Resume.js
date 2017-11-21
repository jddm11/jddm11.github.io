import React from 'react';
import { Segment, Grid, Container, Header, Message, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import HeaderSection from './Header';
import FooterSection from './Footer';
import SideMenuSection from './SideMenu';
import './App.css';

export default class Resume extends React.Component {
 render () {
   return (
     <div className='full-height'>
       <HeaderSection />
       <Segment basic>
         <Grid>
           <Grid.Column width={4}>
             <SideMenuSection active='resume'/>
           </Grid.Column>
           <Grid.Column stretched width={12}>
             <Segment>
               <Container fluid>
                 <Header as='h2'>Resume</Header>
                 <Message icon warning>
                  <Icon name='circle notched' loading />
                  <Message.Content>
                  Under development
                  </Message.Content>
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
