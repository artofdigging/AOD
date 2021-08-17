import React, { Component } from 'react'
import {Container, Grid} from 'semantic-ui-react'
import './SmallTile.css'


export default class SmallTile extends Component {

    render() {
      return (
        <div className="small_tile">
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <div className="small_tile_image">

                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="small_tile_category">MUSIC</div>
                <h3 className="small_tile_title">Bandcamp is the place where artisits should be uploading music</h3>
                <div className="small_tile_author">CHRISTOPHER NORMAN</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
    }
}