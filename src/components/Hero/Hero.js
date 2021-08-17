import React, { Component } from 'react'
import {Container, Grid} from 'semantic-ui-react'
import SmallTile from '../SmallTile/SmallTile'
import './Hero.css'


export default class Banner extends Component {

    render() {
      return (
        <div className="hero">
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={10}>
                  <h3 className="hero_title">UNKWNS Vol. 1, a 4th Quarter Films X Normtronics docuseries collaboration</h3>
                  <div className="hero_category_author">
                    <span className="hero_category">MUSIC</span> <span className="hero_author">| CHRISTOPHER NORMAN</span>
                  </div>
                  <div className="hero_image">

                  </div>
                </Grid.Column>
                <Grid.Column width={6}>
                  <SmallTile />
                  <SmallTile />
                  <SmallTile />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      )
    }
}