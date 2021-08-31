import React, { Component } from 'react'
import { Card, Image, Label, Grid, Icon } from 'semantic-ui-react'

export class SmallAuctionCard extends Component {
    render() {
        return (
            <React.Fragment>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Dragon Rider on Lava Planet</Card.Header>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Card.Meta>
                                    <span className='date'>Current Bid</span>
                                </Card.Meta>
                                <Card.Description>
                                    $550 (£1.54)
                                </Card.Description>
                            </Grid.Column>
                            <Grid.Column>
                                <Card.Meta>
                                    <span className='date'>Time Left</span>
                                </Card.Meta>
                                <Card.Description>
                                    02h 30m 21s
                                </Card.Description>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    </Card.Content>
                    <Card.Content extra>
                        <Label as='a' size='small'>
                            <Image 
                            avatar 
                            spaced='right' 
                            src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                            Elliot
                        </Label>
                        <Label size='mini'>
                            <Icon name='heart outline' />
                            23
                            <Label.Detail>
                                <Icon name='eye' />
                                39
                            </Label.Detail>
                        </Label>
                    </Card.Content>
                </Card>
            </React.Fragment>
        )
    }
}

export default SmallAuctionCard
