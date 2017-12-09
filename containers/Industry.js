import React from 'react';
import { Segment, Grid, Container, Header, Item, Label, Sticky} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import HeaderSection from './Header';
import FooterSection from './Footer';
import SideMenuSection from './SideMenu';
import './App.css';

export default class Industry extends React.Component {
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
           <SideMenuSection active='industry'/>
           </Grid.Column>
         </Grid.Row>
         <Grid.Row>
           <Grid.Column width={4} only='large screen'>
             <Sticky context={contextRef} offset={75}>
               <SideMenuSection active='industry'/>
             </Sticky>
           </Grid.Column>
           <Grid.Column stretched tablet={16} mobile={16} largeScreen={12} widescreen={12}>
             <Segment>
               <Container fluid>
                 <Header as='h2'>Industry</Header>
                 <Item.Group divided>

                 <Item>
                   <Item.Image size='tiny' src='../images/php.png' />
                   <Item.Content>
                     <Item.Header as='a'>Merchant-e</Item.Header>
                     <Item.Meta>
                       <span className='cinema'>Software Development Company</span>
                     </Item.Meta>
                     <Item.Description><p>FullStack software development for solutions in the e-commerce sector.</p>
                     <p>Working on Magento platform and implementing integrations with different services through 3rd party API{"'"}s.</p></Item.Description>
                     <Item.Extra>
                       <Label>Senior Developer</Label>
                       <Label icon='globe' content='+ 1 year' />
                     </Item.Extra>
                   </Item.Content>
                 </Item>

                 <Item>
                   <Item.Image size='tiny' src='../images/web.png' />
                   <Item.Content>
                     <Item.Header as='a'>Indigo Technologies</Item.Header>
                     <Item.Meta>
                       <span className='cinema'>Software Development Company</span>
                     </Item.Meta>
                     <Item.Description><p>Development of modules and components for an ERP platform focused in the Health Industry.</p>
                     <p>Apps{"'"} development for Windows Phone 8 and Windows 8 using C#.</p></Item.Description>
                     <Item.Extra>
                       <Label>Software Developer</Label>
                       <Label icon='globe' content='+ 1 year' />
                     </Item.Extra>
                   </Item.Content>
                 </Item>

                  <Item>
                    <Item.Image size='tiny' src='../images/java.png' />
                    <Item.Content>
                      <Item.Header as='a'>Molino ROA</Item.Header>
                      <Item.Meta>
                        <span className='cinema'>Rice Processing and Marketing Company</span>
                      </Item.Meta>
                      <Item.Description>Analisys and development of modules using technologies and languages such as PHP, Flex, SQL Server, Java, Ext Js, Open Layers, Share Point.</Item.Description>
                      <Item.Extra>
                        <Label>Programmer Analyst</Label>
                        <Label icon='globe' content='1 year' />
                      </Item.Extra>
                    </Item.Content>
                  </Item>

                  <Item>
                    <Item.Image size='tiny' src='../images/net.png' />
                    <Item.Content>
                      <Item.Header as='a'>SYMDE</Item.Header>
                      <Item.Meta>
                        <span className='cinema'>Software Development and Telecommunications Company</span>
                      </Item.Meta>
                      <Item.Description>Software development on .Net mobile platforms using C# language and consuming ASMX web services.</Item.Description>
                      <Item.Extra>
                        <Label>Software Developer</Label>
                        <Label icon='globe' content='9 Months' />
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                  </Item.Group>
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
