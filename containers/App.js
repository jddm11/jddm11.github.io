import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, Header, Grid, Segment , Flag, Image, Dimmer} from 'semantic-ui-react'
import HeaderSection from './Header';
import FooterSection from './Footer';
import SideMenuSection from './SideMenu';
import {Link} from 'react-router-dom';
import './App.css';



class App extends Component {

  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

    render () {

      const { active } = this.state
      const content = (
        <div>
          <Header as='h2' inverted>Sydney, Australia <Flag name='australia' /></Header>
        </div>
      )

        return (
					<div className='full-height'>
	          <HeaderSection />
						<Segment basic>
							<Grid>
				        <Grid.Column width={4}>
									<SideMenuSection active='home'/>
				        </Grid.Column>
				        <Grid.Column stretched width={12}>
									<Segment>
						          <Header as='h3'>Welcome</Header>
                      <Segment basic textAlign='center'>
                      <Image as = 'Dimmer'
                        bordered={true} centered={true}
                        onMouseEnter={this.handleShow}
                        onMouseLeave={this.handleHide}
                        dimmer={{ active, content }}
                        size='large' circular src='../images/myPhoto.jpg' />
                      </Segment>
                      <p>Computer Systems Engineer - Corhuila University, 2012. <Flag name='colombia'/></p>
                      <p>Specialist in Telecommunications Project Management - Politecnico Grancolombiano University, 2013. <Flag name='colombia'/></p>
						          <p>Master's Candidate in Computer Engineering - Pontifical Catholic University of Chile, 2017. <Flag name='chile'/></p>
                      <p>My research areas are Software Engineering, Recommender Systems and Process Mining. Since 2016 I have been working
                      in the field of Empirical Software Engineering aiming for better teaching and learning experiences of the Software Development
                      Process in educational environments.</p>

                      <p>My master research is focused on the integration of different approaches (Recommender Systems, Process Mining, etc) to
                      offer an Integrated Educational Plataform in Software Engineering which support students in the learning process and academic
                      teams in the teaching strategies.</p>

                      <p> My main experiences are in the field of software development, I have worked in some companies developing software products
                      in different platforms.</p>


					        </Segment>
				        </Grid.Column>
				      </Grid>
						</Segment>
						<FooterSection/>
					</div>
        )
    }
}

export default connect(state => state)(App);
