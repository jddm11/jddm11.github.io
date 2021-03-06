import React from 'react';
import { Segment, Icon, Divider, Container} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './App.css';
export default class FooterSection extends React.Component {
 render () {
   return (
     <Segment secondary className='footer-height overlay-footer' textAlign='center'>
     <Container>
       <a href="http://facebook.com/jddm11/" target='_blank'>
         <Icon name='facebook' /> Facebook
       </a>
     </Container>
     <Divider />
       Copyright © 2018 Juan Diego Díaz Mosquera - All rights reserved
     </Segment>
   )
 }
}
