import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, Header, Grid, Segment , Flag, Image, Menu, Dropdown, Divider, Icon, Rail, Sticky, Card, List, Message} from 'semantic-ui-react'
import HeaderSection from './Header';
import FooterSection from './Footer';
import SideMenuSection from './SideMenu';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })
  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

    render () {

      const { active, contextRef } = this.state
      const content = (
        <div>
          <Header as='h2' inverted>Sydney, Australia <Flag name='australia' /></Header>
        </div>
      )
        return (
					<div className='full-height'>
	          <HeaderSection />
						<Segment basic className='main'>
            <div ref={this.handleContextRef}>
            <Grid>
              <Grid.Row only='tablet mobile'>
                <Grid.Column width={16}>
                <SideMenuSection active='home'/>
                </Grid.Column>
              </Grid.Row>
							<Grid.Row>
				        <Grid.Column width={4} only='large screen'>
                  <Sticky context={contextRef} offset={75}>
                    <SideMenuSection active='home'/>
                  </Sticky>
				        </Grid.Column>
				        <Grid.Column stretched tablet={16} mobile={16} largeScreen={12} widescreen={12}>
									<Segment>
						          <Header as='h3'>Welcome</Header>
                      <Segment basic textAlign='center'>
                      <Image
                        bordered={true} centered={true}
                        onMouseEnter={this.handleShow}
                        onMouseLeave={this.handleHide}
                        dimmer={{ active, content }}
                         circular size='medium' spaced src='../images/myPhoto.jpg' />
                      </Segment>
                      <List celled>
                      <List.Item>
                          <List.Content>
                          <List.Header>Bachelor{"'"}s degree</List.Header>
                          <p><Flag name='colombia'/> Computer Systems Engineer - Corhuila University, 2012.</p>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Postgraduate studies</List.Header>
                          <p><Flag name='colombia'/> Specialist in Telecommunications Project Management - Politecnico Grancolombiano University, 2013</p>
                          <p><Flag name='chile'/> Master in Computer Engineering - Pontifical Catholic University of Chile, 2017</p>
                        </List.Content>
                      </List.Item>
                      </List>

                      <Message floating
                        icon='settings'
                        size='small'
                        header='Research'
                        content='My research areas are Software Engineering, Recommender Systems and Process Mining. Since 2016 I have been working in the field of Empirical Software Engineering aiming for better teaching and learning experiences of the Software Development Process in educational environments.'
                      />
                      <Message floating
                        icon='crosshairs'
                        header='Focus'
                        size='small'
                        content='My master research is focused on the integration of different approaches (Recommender Systems, Process Mining, etc) to offer an Integrated Educational Plataform in Software Engineering which support students in the learning process and academic teams in the teaching strategies.'
                      />
                      <Message floating
                        icon='cubes'
                        header='Experience'
                        size='small'
                        content='My main experiences are in the field of software development, I have worked in some companies developing software products in different platforms.'
                      />
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

export default connect(state => state)(App);
