import React from 'react';
import { Segment, Grid, Container, Header, Card, Icon, Label} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import HeaderSection from './Header';
import FooterSection from './Footer';
import SideMenuSection from './SideMenu';
import './App.css';

export default class Academia extends React.Component {
 render () {
   const description = [
     '<p>Juan Diego Díaz</p>',
     '<p>Pablo Sanabria</p>',
     '<p>Andres Neyem</p>',
     '<p>Denis Parra</p>',
     '<p>Jaime Navon</p>'
   ].join(' ')
   return (
     <div className='full-height'>
       <HeaderSection />
       <Segment basic>
         <Grid>
           <Grid.Column width={4}>
             <SideMenuSection active='academia'/>
           </Grid.Column>
           <Grid.Column stretched width={12}>
             <Segment>
               <Container fluid>
                 <Header as='h2'>Academia</Header>
                <Card.Group>
                  <Card>
                    <Card.Content header='Enriching Capstone Project-based Learning Experiences Using a Crowdsourcing Recommender Engine' />
                    <Card.Description>
                    <Label circular>Juan Diego Díaz</Label>
                    <Label circular>Pablo Sanabria</Label>
                    <Label circular>Andres Neyem</Label>
                    <Label circular>Denis Parra</Label>
                    <Label circular>Jaime Navon</Label>
                    </Card.Description>
                    <Card.Content extra>
                      <Icon name='info circle' />
                      ICSE 2017
                    </Card.Content>
                  </Card>
                  <Card>
                   <Card.Content header='Understanding Student Interactions in Capstone Courses to Improve Learning Experiences' />
                   <Card.Description>
                   <Label circular>Juan Diego Díaz</Label>
                   <Label circular>Andres Neyem</Label>
                   <Label circular>Jorge Muñoz</Label>
                   <Label circular>Jaime Navon</Label>
                   </Card.Description>
                   <Card.Content extra>
                     <Icon name='info circle' />
                     SIGCSE 2017
                   </Card.Content>
                 </Card>
                 <Card>
                  <Card.Content header='Enhancing Project Management Skills in Software Engineering Capstone Courses' />
                  <Card.Description>
                  <Label circular>Juan Diego Díaz</Label>
                  <Label circular>Andres Neyem</Label>
                  <Label circular>Jose Ignacio Benedetto</Label>
                  </Card.Description>
                  <Card.Content extra>
                    <Icon name='info circle' />
                    Mobile Information System, HINDAWI 2017 - <Label color='blue'>On review</Label>
                  </Card.Content>
                </Card>
               </Card.Group>
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
