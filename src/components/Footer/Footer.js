import React, { Component } from 'react'
import {Container, Grid} from 'semantic-ui-react'
import './Footer.css'


export default class Footer extends Component {

    render() {
      return (
        <div className="footer">
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                 <h3>ART OF DIGGING</h3>
                 <div>© ART OF DIGGING LLC. ALL RIGHTS RESERVED</div>
                </Grid.Column>
                <Grid.Column width={8}>
                  <div>MUSIC</div>
                  <div>NEWS</div>
                  <div>FASHION</div>
                  <div>VIDEO</div>
                  <div>ART</div>
                  <div>ANIME</div>
                  <div>SHOP</div>
                </Grid.Column>
                <Grid.Column width={8}>
                    <div>ABOUT US</div>
                    <div>CONTACT</div>
                    <div>ADVERTISE</div>
                    <div>TERM OF USE</div>
                    <div>PRIVACY</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      )
    }
}