import React from 'react';
import { Segment, Grid, Container, Header, Message, Icon, Sticky, Rating, Statistic, List, Label} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import HeaderSection from './Header';
import FooterSection from './Footer';
import SideMenuSection from './SideMenu';
import './App.css';

export default class Resume extends React.Component {
  state = {}
  handleContextRef = contextRef => this.setState({ contextRef })

   render () {
   const { contextRef } = this.state
   return (
     <div className='full-height'>
       <HeaderSection />
       <Segment basic className='main'>
       <div ref={this.handleContextRef}>
       <Grid>
         <Grid.Row only='tablet mobile'>
           <Grid.Column width={16}>
           <SideMenuSection active='resume'/>
           </Grid.Column>
         </Grid.Row>
         <Grid.Row>
           <Grid.Column width={4} only='large screen'>
             <Sticky context={contextRef} offset={75}>
               <SideMenuSection active='resume'/>
             </Sticky>
           </Grid.Column>
           <Grid.Column stretched tablet={16} mobile={16} largeScreen={12} widescreen={12}>
             <Segment>
               <Container fluid>
                 <Header as='h2'>Resume</Header>
                 <Grid>
                 <Grid.Row>
                 <Grid.Column width={9}>
                 <Segment>
                <Statistic horizontal color='olive'>
                  <Statistic.Value>8</Statistic.Value>
                  <Statistic.Label>programming languages</Statistic.Label>
                </Statistic>
                <List divided relaxed>
                <List.Item>
                  <List.Icon name='code' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Ruby</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} />(Rails)</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='code' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Python</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} />(Flask)</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='code' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>PHP</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} />(Laravel)</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='code' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>C#</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} />(Unity and Mobile Applications)</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='code' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>VB.Net</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} />(Desktop Applications)</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='code' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Action Script</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} />(Flex)</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='code' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>JAVA</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={3} maxRating={5} />(Spring)</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='code' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>JavaScript (Frontend)</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} />(React, Angular, Meteor)</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='code' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>JavaScript (Backend)</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} />(NodeJS)</List.Description>
                  </List.Content>
                </List.Item>
                </List>
                </Segment>
                </Grid.Column>
                <Grid.Column width={7}>
                <Segment>
                <Statistic horizontal color='blue'>
                  <Statistic.Value>3</Statistic.Value>
                  <Statistic.Label>areas</Statistic.Label>
                </Statistic>
                <List divided relaxed>
                <List.Item>
                  <List.Icon name='database' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Software Engineering</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={5} maxRating={5} />(Agile Methodologies, Architecture, Software Development Tools and so on)</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='database' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Process Mining</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} />(Discovery, Conformance, Enhancement)</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='database' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Recommender Systems</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} />(Content based and Collaborative)</List.Description>
                  </List.Content>
                </List.Item>
                </List>
                </Segment>
                <Segment>
                <Statistic horizontal color='orange'>
                  <Statistic.Value>3</Statistic.Value>
                  <Statistic.Label>databases</Statistic.Label>
                </Statistic>
                <List divided relaxed>
                <List.Item>
                  <List.Icon name='database' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>PostgreSQL</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} /></List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='database' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>MySQL</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} /></List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='database' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>Microsoft SQL Server</List.Header>
                    <List.Description><Rating icon='star' disabled defaultRating={4} maxRating={5} /></List.Description>
                  </List.Content>
                </List.Item>
                </List>
                </Segment>
                </Grid.Column>
                </Grid.Row>
                </Grid>
                <Segment>
                <Label>
                  <Icon name='linkify' /> INTERESTING LINKS
                </Label>
                <List>
                    <List.Item>
                      <List.Icon name='linkify' />
                      <List.Content>
                        <List.Header as='a' target='_blank' href='https://www.newgrounds.com/portal/view/702841'>Hero Twins</List.Header>
                        <List.Description>Unity 2D game with a platformer concept in which I participated.</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='linkify' />
                      <List.Content>
                        <List.Header as='a' target='_blank' href='https://recsysjd.wordpress.com/author/jddm11/'>RecSys</List.Header>
                        <List.Description>Blog where I share my opinions on various RecSys techniques.</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='linkify' />
                      <List.Content>
                        <List.Header as='a' target='_blank' href='http://www.mineducacion.gov.co/cvn/1665/w3-article-239050.html'>Award from Colombian Education Ministry</List.Header>
                        <List.Description>Competition where I had to analyze and suggest improvement for a colombian governmental website. I got the first place <a href='http://www.colombiaaprende.edu.co/html/productos/1685/article-238397.html'>link</a>.</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='linkify' />
                      <List.Content>
                        <List.Header as='a' target='_blank' href='https://magetsync.merchant-e.net/'>MagestSync</List.Header>
                        <List.Description>Startup project in where I participated. The project consists in a platform to integrate Magento and Etsy stores.</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='linkify' />
                      <List.Content>
                        <List.Header as='a' target='_blank' href='https://pushtoarray.wordpress.com/'>Push To Array</List.Header>
                        <List.Description>It was an intent to create content in the area of software development.</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='linkify' />
                      <List.Content>
                        <List.Header as='a' target='_blank' href='https://www.youtube.com/watch?v=YxH7-3bMvCQ'>Fosfatos Online</List.Header>
                        <List.Description>Presentation of the project "Fosfatos Online", an information system that I created together with a partner for a mining company.</List.Description>
                      </List.Content>
                    </List.Item>
                </List>
                </Segment>
                <Segment inverted>
                <Statistic.Group widths='three'>
                     <Statistic size='small' color='teal' inverted>
                       <Statistic.Value><Icon name='plane' />3</Statistic.Value>
                       <Statistic.Label>Countries where I have lived <br />(Colombia, Chile and Australia)</Statistic.Label>
                     </Statistic>
                     <Statistic size='small' color='red' inverted>
                       <Statistic.Value><Icon name='graduation' />2</Statistic.Value>
                       <Statistic.Label>Scholarships obtained <br />(Bachelor and Master degree)</Statistic.Label>
                     </Statistic>
                     <Statistic size='small' color='yellow' inverted>
                       <Statistic.Value><Icon name='favorite' />3</Statistic.Value>
                       <Statistic.Label>My hobbies <br />(Music, Anime and Movies)</Statistic.Label>
                     </Statistic>
                   </Statistic.Group>
                </Segment>


               </Container>
               </Segment>
              </Grid.Column>
             </Grid.Row>
             <Grid.Row>
               <Grid.Column>
                 <FooterSection/>
               </Grid.Column>
             </Grid.Row>
           </Grid>
          </div>
         </Segment>
       </div>
   )
 }
}
