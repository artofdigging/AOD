import React, { Component } from 'react'
import {Container, Segment, Grid} from 'semantic-ui-react'
import './Latest.css'


export default class Latest extends Component {

    render() {
      return (
        <div className="latest">
          <Container>
            <h3>LATEST STORIS</h3>
            <div className="divder"></div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <div className="latest_image"></div>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <h3 className="latest_title">Why the Roots are one of the greatest bands to exsist in  music</h3>
                        <div className="latest_subtitle">This is some sample text from the article and what it would sound like if you went and actually read it</div>
                        <div className="latest_category_author">
                            <span className="latest_category">MUSIC</span> <span className="hero_author">| CHRISTOPHER NORMAN</span>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <div className="latest_separator"></div>
            </Grid>

          </Container>
        </div>
      )
    }
}
