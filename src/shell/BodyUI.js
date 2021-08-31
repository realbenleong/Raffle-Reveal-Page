import React, { Component } from 'react'
import { Card, Placeholder, Grid, Icon } from 'semantic-ui-react'
import LiveAuctions from '../features/LiveAuctions/LiveAuctions'
import TrendingNFTs from '../features/TrendingNFTs/TrendingNFTs'
import CommunityPicks from '../features/CommunityPicks/CommunityPicks'
import RecentlySold from '../features/RecentlySold/RecentlySold'
import TopSellers from '../features/TopSellers/TopSellers'
import CreatorSpotlight from '../features/CreatorSpotlight/CreatorSpotlight'

export class BodyUI extends Component {
    render() {
        return (
            <div style={{margin:'1em'}}>
                <LiveAuctions isMobile={this.props.isMobile}/>
                <TrendingNFTs isMobile={this.props.isMobile}/>
                <CommunityPicks isMobile={this.props.isMobile}/>
                <RecentlySold isMobile={this.props.isMobile}/>
                <TopSellers isMobile={this.props.isMobile}/>
                <CreatorSpotlight isMobile={this.props.isMobile}/>
            </div>
        )
    }
}

export default BodyUI
