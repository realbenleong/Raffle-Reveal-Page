import React, { Component } from 'react'
import { Card, Image, Label, Grid, Icon, Feed } from 'semantic-ui-react'

export class TopSellersCard extends Component {
    render() {
        return (
            <React.Fragment>
                <Card>
                    <Card.Content>
                    <Feed>
                        <Feed.Event>
                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                        <Feed.Content>
                            <Feed.Date content='Lovegoddarts' />
                            <Feed.Summary>
                                $32,434
                            </Feed.Summary>
                        </Feed.Content>
                        </Feed.Event>
                    </Feed>
                    </Card.Content>
                </Card>
            </React.Fragment>
        )
    }
}

export default TopSellersCard
