import React, { Component } from 'react'
import { Header, Card, Placeholder, Grid, Icon, Menu } from 'semantic-ui-react'
import SmallAuctionCard from './SmallAuctionCard'

export class LiveAuctions extends Component {
    render() {
        return (
            <div>
                <Menu secondary>
                    <Menu.Item>
                        <Header size='small' icon='play' content='Live Auctions' />
                    </Menu.Item>
                </Menu>
                <div style={{margin:'1em'}}>
                    <Card.Group itemsPerRow={1}>
                        <Card>
                            <Placeholder>
                                <Placeholder.Header image>
                                <Placeholder.Line />
                                <Placeholder.Line />
                                </Placeholder.Header>
                                <Placeholder.Paragraph>
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Card>
                    </Card.Group>
                    {
                        this.props.isMobile === true &&
                        <Card.Group itemsPerRow={1}>
                            <SmallAuctionCard></SmallAuctionCard>
                        </Card.Group>
                    }
                    {
                        this.props.isMobile === false &&
                        <Card.Group itemsPerRow={4}>
                            <SmallAuctionCard></SmallAuctionCard>
                            <SmallAuctionCard></SmallAuctionCard>
                            <SmallAuctionCard></SmallAuctionCard>
                            <SmallAuctionCard></SmallAuctionCard>
                        </Card.Group>
                    }
                </div>
            </div>
        )
    }
}

export default LiveAuctions
