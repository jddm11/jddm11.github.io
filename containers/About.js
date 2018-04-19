import React from 'react';
import { Segment, Grid, Container, Header, Message, Sticky, Image} from 'semantic-ui-react'
import ImageZoom from 'react-medium-image-zoom'
import {Link} from 'react-router-dom';
import HeaderSection from './Header';
import FooterSection from './Footer';
import SideMenuSection from './SideMenu';
import './App.css';

export default class About extends React.Component {
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
         {/* style={{ marginTop: '100px'}} */}
         <Grid.Row only='tablet mobile'>
           <Grid.Column width={16}>
           <SideMenuSection active='about_me'/>
           </Grid.Column>
         </Grid.Row>
         <Grid.Row>
           <Grid.Column width={4} only='large screen'>
             <Sticky context={contextRef} offset={75}>
               <SideMenuSection active='about_me'/>
             </Sticky>
           </Grid.Column>
           <Grid.Column stretched tablet={16} mobile={16} largeScreen={12} widescreen={12}>
             <Segment>
               <Container fluid>
                 <Header as='h2'>About</Header>
                 <Message>
                  <p>
                    I have been developing my professional career since 2011, between that year and nowadays I have had the opportunity to gather some experiences on technological projects that has shown me the different tones of the Software Development. </p>
                    <p>From Rails to C#, I have been able to understand that there are technologies for each specific reason and that a programming language powerful but wrong used is the same as a terrible solution. One of my goals is move forward on my knowledge
                    then unite my skills in a strategic way to create quality solutions.  I move in the world of Software Engineering, an area that I am passionate about because it offers the possibility of working transversally in various action fields.
                  </p>
                </Message>
                <Segment>
                <Grid>
                <Grid.Row columns={2}>
                <Grid.Column>
                <ImageZoom
                    image={{
                      src: '../images/argentina.jpg',
                      alt: 'Buenos Aires',
                      className: 'img image small ui inline spaced'
                    }}
                  />
                 <Message info compact>
                   <Message.Header>Buenos Aires, Argentina</Message.Header>
                   <p>Japanese Garden</p>
                 </Message>
                </Grid.Column>
                <Grid.Column>
                 <ImageZoom
                     image={{
                       src: '../images/amazon.jpg',
                       alt: 'Seattle, USA',
                       className: 'img image small ui inline spaced'
                     }}
                   />
                 <Message info compact>
                   <Message.Header>Seattle, USA</Message.Header>
                   <p>Amazon GO</p>
                 </Message>
                 </Grid.Column>
                 </Grid.Row>
                 <Grid.Row columns={2}>
                 <Grid.Column>
                 <ImageZoom
                     image={{
                       src: '../images/family.jpg',
                       alt: 'Family',
                       className: 'img image small ui inline spaced'
                     }}
                   />
                 <Message info compact>
                   <Message.Header>My family</Message.Header>
                   <p>Daniel, Miriam and Karen</p>
                 </Message>
                </Grid.Column>
                <Grid.Column>
                 <ImageZoom
                     image={{
                       src: '../images/sydney.jpg',
                       alt: 'Sydney, Australia',
                       className: 'img image small ui inline spaced'
                     }}
                   />
                 <Message info compact>
                   <Message.Header>Sydney, Australia</Message.Header>
                   <p>Embassy School</p>
                 </Message>
                 </Grid.Column>
                 </Grid.Row>
                 </Grid>
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
