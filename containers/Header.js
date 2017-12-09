import React from 'react';
import { Header, Image, Icon, Label, Grid, Segment, Menu, Container, Dropdown} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
export default class HeaderSection extends React.Component {
 render () {
   return (
     <div>
    <Menu fixed='top' className='menu-header-over'>

        {/*<Menu.Item as='a' href="http://facebook.com/jddm11/" target='_blank'>
            <Icon color='blue' size='large' name='facebook'/>
            Facebook
        </Menu.Item>*/}
        <Grid container>
        <Grid.Row only='mobile'>
        <Menu.Item as='a' header>
          <Image circular
            size='mini'
            src='../images/myAvatar.png'
            style={{ marginRight: '1.5em' }}
          />
          Juan Diego Díaz Mosquera
        </Menu.Item>
        <Menu.Menu position='right'>
        <Dropdown item icon='content' simple>
      <Dropdown.Menu>
        <Dropdown.Item>
        <a href="http://linkedin.com/in/jddm11/" target='_blank'>
          <Icon color='blue' size='large' name='linkedin'/>
          LinkedIn
        </a>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
        <a href="http://github.com/jddm11/" target='_blank'>
        <Label color='black' horizontal>
          <Icon size='large' name='github'/>
          /jddm11
        </Label>
        </a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Menu.Menu>
        </Grid.Row>
        <Grid.Row only='tablet computer'>
        <Menu.Item as='a' header>
          <Image circular
            size='mini'
            src='../images/myAvatar.png'
            style={{ marginRight: '1.5em' }}
          />
          Juan Diego Díaz Mosquera
        </Menu.Item>
        <Menu.Item as='a' href="http://linkedin.com/in/jddm11/" target='_blank'>
            <Icon color='blue' size='large' name='linkedin'/>
            LinkedIn
        </Menu.Item>
        <Menu.Menu position='left'>
         <Menu.Item as='a' href="http://github.com/jddm11/" target='_blank' name='github'>
           <Label color='black' horizontal>
            <Icon  size='large' name='github'/>
              /jddm11
           </Label>
         </Menu.Item>
       </Menu.Menu>
       </Grid.Row>
       </Grid>
    </Menu>
</div>
   )
 }
}
