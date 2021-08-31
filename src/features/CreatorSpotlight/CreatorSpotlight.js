import React, { Component } from 'react'
import { Header, Card, Placeholder, Image, Grid, Menu } from 'semantic-ui-react'
import SmallAuctionCard from '../LiveAuctions/SmallAuctionCard'

const boxStyle={
    backgroundColor:'grey',
    width:'100%',
    height:'100%'}

export class CreatorSpotlight extends Component {
    render() {
        return (
            <div>
                <Menu secondary>
                    <Menu.Item>
                        <Header size='small' content='Creator Spotlight' />
                    </Menu.Item>
                </Menu>
                {
                    this.props.isMobile === true &&
                    <Card.Group itemsPerRow={1}>
                        <SmallAuctionCard></SmallAuctionCard>
                        <SmallAuctionCard></SmallAuctionCard>
                        <SmallAuctionCard></SmallAuctionCard>
                    </Card.Group>
                }
                {
                    this.props.isMobile === false &&
                    <Card.Group itemsPerRow={3}>
                        <SmallAuctionCard></SmallAuctionCard>
                        <SmallAuctionCard></SmallAuctionCard>
                        <SmallAuctionCard></SmallAuctionCard>
                    </Card.Group>
                }
                <div style={{marginTop:'1em'}}>
                    <Grid>
                        <Grid.Row columns={3} style={{height:'200px'}}>
                            <Grid.Column>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column>
                                <div style={boxStyle} />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns={3} style={{height:'200px'}}>
                            <Grid.Column>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column>
                                <div style={boxStyle} />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns={3} style={{height:'200px'}}>
                            <Grid.Column width={4}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <div style={boxStyle} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <div style={{marginTop:'1em'}}>
                    <Grid>
                        <Grid.Row style={{height:'100px'}}>
                            <Grid.Column width={3}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div style={boxStyle} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row style={{height:'100px'}}>
                            <Grid.Column width={3}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div style={boxStyle} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row style={{height:'100px'}}>
                            <Grid.Column width={3}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <div style={boxStyle} />
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div style={boxStyle} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default CreatorSpotlight
