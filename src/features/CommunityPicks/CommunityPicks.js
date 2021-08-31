import React, { Component } from 'react'
import { Header, Card, Placeholder, Icon, Button, Menu } from 'semantic-ui-react'
import SmallAuctionCard from '../LiveAuctions/SmallAuctionCard'

export class CommunityPicks extends Component {
    render() {
        return (
            <div>
                <Menu secondary>
                    <Menu.Item>
                        <Header size='small' content='Community Picks' />
                    </Menu.Item>
                </Menu>
                <div style={{marginBottom:'1em'}}> 
                    <Menu fluid 
                        borderless
                        attached='middle' 
                        color='white' 
                        size='mini' 
                        className='shell-header-top' 
                        widths={7}
                    >
                        <Menu.Item>
                            <Icon name='heart outline' />
                            Beautiful
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='heart outline' />
                            I Like It
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='heart outline' />
                            Innovative
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='heart outline' />
                            A Must Buy!
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='heart outline' />
                            Underpriced
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='heart outline' />
                            Overpriced
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='heart outline' />
                            Thumbs Down
                        </Menu.Item>
                    </Menu>
                </div>
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
                            <Button basic color='violet'>View all beautiful</Button>
                        </Menu.Item>
                        <Menu.Item>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default CommunityPicks
