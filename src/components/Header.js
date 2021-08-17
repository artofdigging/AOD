import React, { Component } from 'react'
import {Menu, Input, Segment, Container} from 'semantic-ui-react'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitch from '../images/twitch.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'


export default class Header extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return ( 
        <React.Fragment>
          <Segment inverted className="header header_top">
            <Container>
              <Menu inverted pointing secondary className="centered">
                <Menu.Item 
                    header
                    onClick={this.handleItemClick}
                    name="ART OF DIGGING"
                />

                <Menu.Menu position='right' className="header_social">
                  <Menu.Item>
                    <img src={facebook} />
                  </Menu.Item>
                  <Menu.Item>
                    <img src={instagram} />
                  </Menu.Item>
                  <Menu.Item>
                    <img src={twitch} />
                  </Menu.Item>
                  <Menu.Item>
                    <img src={twitter} />
                  </Menu.Item>
                  <Menu.Item>
                    <img src={youtube} />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Container>
          </Segment>
          <Segment inverted className="header">
            <Container>
              <Menu inverted pointing secondary>
                <Menu.Item
                  name='MUSIC'
                  active={activeItem === 'MUSIC'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='NEWS'
                  active={activeItem === 'NEWS'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='VIDEO'
                  active={activeItem === 'VIDEO'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='ANIME'
                  active={activeItem === 'ANIME'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='ART'
                  active={activeItem === 'ART'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='FASHION'
                  active={activeItem === 'FASHION'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='SHOP'
                  active={activeItem === 'SHOP'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  icon="bars"
                  onClick={this.handleItemClick}
                />
        
                <Menu.Menu position='right'>
                  {/*<Dropdown item text='Language'>
                    <Dropdown.Menu>
                      <Dropdown.Item>English</Dropdown.Item>
                      <Dropdown.Item>Japaneese</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>*/}
        
                  <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Search...' />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Container>
          </Segment>
        </React.Fragment>
      )
    }
  }