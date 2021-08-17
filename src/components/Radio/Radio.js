import React, { Component } from 'react'
import {Container, Grid, Card, Icon} from 'semantic-ui-react'
import gray from '../../images/ruby.jpeg'
import './Radio.css'

export default class Radio extends Component {
    render() {
      return (
        <div className="radio">
          <Container>
            <h3>ART OF DIGGING RADIO</h3>
            <div className="divder"></div>
            <Grid className="centered">
              <Grid.Row>
                <Grid.Column width={4}>
                  <Card
                    image={gray}
                    header='Episode 1 - Ruby Mountain'
                    meta='Singer/Songwriter/Producer'
                    description='Ruby Moutain Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                  />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Card
                    image={gray}
                    header='Episode 1 - Ruby Mountain'
                    meta='Singer/Songwriter/Producer'
                    description='Ruby Moutain Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                  />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Card
                    image={gray}
                    header='Episode 1 - Ruby Mountain'
                    meta='Singer/Songwriter/Producer'
                    description='Ruby Moutain Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                  />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Card
                    image={gray}
                    header='Episode 1 - Ruby Mountain'
                    meta='Singer/Songwriter/Producer'
                    description='Ruby Moutain Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <div class="radio_view_all">VIEW ALL EPISODES</div>
        </div>
      )
    }
}