import React from 'react';
import { Header, Image, Icon, Label, Grid, Segment, Menu, Container} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
export default class HeaderSection extends React.Component {
 render () {
   return (
     <div>
    <Menu stackable fixed='top' className='menu-header-over'>
      <Container>
        <Menu.Item as='a' header>
          <Image circular
            size='mini'
            src='../images/myAvatar.png'
            style={{ marginRight: '1.5em' }}
          />
          Juan Diego Díaz Mosquera
        </Menu.Item>
        {/*<Menu.Item as='a' href="http://facebook.com/jddm11/" target='_blank'>
            <Icon color='blue' size='large' name='facebook'/>
            Facebook
        </Menu.Item>*/}
        <Menu.Item as='a' href="http://linkedin.com/in/jddm11/" target='_blank'>
            <Icon color='blue' size='large' name='linkedin'/>
            LinkedIn
        </Menu.Item>
        <Menu.Menu position='right'>
         <Menu.Item as='a' name='github'>
         <a href="http://github.com/jddm11/" target='_blank'>
           <Label basic horizontal>
            <Icon size='large' name='github'/>
              /jddm11
           </Label>
         </a>
         </Menu.Item>
       </Menu.Menu>
       </Container>
    </Menu>
</div>
   )
 }
}
