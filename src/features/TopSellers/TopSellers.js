import React, { Component } from 'react'
import { Header, Card, Placeholder, Icon, Button, Menu } from 'semantic-ui-react'
import TopSellersCard from './TopSellersCard'

export class TopSellers extends Component {
    render() {
        return (
            <div>
                <Menu secondary>
                    <Menu.Item>
                        <Header size='small' content='Top Sellers' />
                    </Menu.Item>
                </Menu>
                {
                    this.props.isMobile === true &&
                    <Card.Group itemsPerRow={2}>
                        <TopSellersCard></TopSellersCard>
                        <TopSellersCard></TopSellersCard>
                        <TopSellersCard></TopSellersCard>
                        <TopSellersCard></TopSellersCard>
                    </Card.Group>
                }
                {
                    this.props.isMobile === false &&
                    <Card.Group itemsPerRow={5}>
                        <TopSellersCard></TopSellersCard>
                        <TopSellersCard></TopSellersCard>
                        <TopSellersCard></TopSellersCard>
                        <TopSellersCard></TopSellersCard>
                        <TopSellersCard></TopSellersCard>
                    </Card.Group>
                }
            </div>
        )
    }
}

export default TopSellers
