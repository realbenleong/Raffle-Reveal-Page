import React, { Component } from 'react'
import { Header, Card, Placeholder, Grid, Button, Menu } from 'semantic-ui-react'
import SmallAuctionCard from '../LiveAuctions/SmallAuctionCard'

export class TrendingNFTs extends Component {
    render() {
        return (
            <div>
                <Menu secondary>
                    <Menu.Item>
                        <Header size='small' content='Trending NFTs' />
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
                        <SmallAuctionCard></SmallAuctionCard>
                        <SmallAuctionCard></SmallAuctionCard>
                        <SmallAuctionCard></SmallAuctionCard>
                        <SmallAuctionCard></SmallAuctionCard>
                    </Card.Group>
                }
                <div style={{marginTop:'2em',marginBottom:'2em'}}>
                    <Menu fluid 
                        attached='middle' 
                        size='mini' 
                        className='shell-header-top' 
                        widths={3}
                        secondary
                        style={{boxShadow:'none',border:'none'}}
                    >
                        <Menu.Item>
                        </Menu.Item>
                        <Menu.Item>
                            <Button basic color='violet'>View all trending NFTs</Button>
                        </Menu.Item>
                        <Menu.Item>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default TrendingNFTs
