import React, { Component } from 'react'
import { Header, Card, Placeholder, Icon, Button, Menu } from 'semantic-ui-react'
import SmallAuctionCard from '../LiveAuctions/SmallAuctionCard'

export class RecentlySold extends Component {
    render() {
        return (
            <div>
                <Menu secondary>
                    <Menu.Item>
                        <Header size='small' content='Recently Sold' />
                    </Menu.Item>
                </Menu>
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
        )
    }
}

export default RecentlySold
