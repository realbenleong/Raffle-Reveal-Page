import React, { Component } from 'react'
import { Menu, Segment, Input, Button, Dropdown, Icon, Image, Sidebar, Grid, Header } from 'semantic-ui-react'
import './shell.css'

export class HeaderUI extends Component {
    constructor(props) {
        super(props)
        this.state = {
             activeItem: 'home' ,
             navButtonVisible: false,
             sideBarActivated: false
        }
    }

    handleMouseOver = () => {
        this.setState(prevState => ({
            ...prevState,
            navButtonVisible: true
        }))
    }

    handleMouseOut = () => {
        this.setState(prevState => ({
            ...prevState,
            navButtonVisible: false
        }))
    }
    
    render() {
        let { activeItem } = this.state

        return (
            <React.Fragment>
                <Menu fluid 
                    attached='middle' 
                    color='violet' 
                    inverted 
                    size='mini' 
                    className='shell-header-top' widths={3}
                >
                    <Menu.Item>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='fire' />
                        gshsdhsdfhsdhdsfh fhfdsh dsf hdsfh
                    </Menu.Item>
                    <Menu.Item>
                        <Dropdown text='ETHEREUM'>
                            <Dropdown.Menu>
                                <Dropdown.Item text='ZILLIQA' />
                                <Dropdown.Item text='FANTOM' />
                                <Dropdown.Item text='SOLANA' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
                <Menu 
                    fluid 
                    attached='middle' 
                    color='violet' 
                    inverted 
                    className='shell-headers-bottom'
                >
                    <Menu.Menu position='left'>
                        <Menu.Item>
                            Logo
                        </Menu.Item>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                    {
                        this.props.isMobile === false && 
                        <React.Fragment>
                            <Menu.Menu widths={3} fluid>
                                <Menu.Item
                                    name='Browse'
                                    active={activeItem === 'home'}
                                />
                                <Menu.Item
                                    name='Discover'
                                />
                                <Menu.Item
                                    name='Mint an item'
                                />
                                <Menu.Item
                                    name='Vote / DAO'
                                />
                            </Menu.Menu>
                            {
                                this.props.windowWidth > 930 &&
                                <Menu.Menu position='right'>
                                    <Menu.Item>
                                        <Button>Login</Button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button>Sign Up</Button>
                                    </Menu.Item>
                                </Menu.Menu>
                            }
                            {
                                this.props.windowWidth < 930 &&
                                <React.Fragment>
                                    <Menu.Menu widths={1} fluid position='right'>
                                        <Menu.Item>
                                            <Icon name='bars'></Icon>
                                        </Menu.Item>
                                    </Menu.Menu>
                                </React.Fragment>
                            }
                        </React.Fragment>
                    }
                </Menu>
                {
                    this.props.isMobile === false && 
                    <Menu fluid 
                        borderless
                        attached='middle' 
                        color='white' 
                        size='mini' 
                        className='shell-header-top' 
                        widths={9}
                    >
                        <Menu.Item/>
                        <Menu.Item
                            name='Art'
                        />
                        <Menu.Item
                            name='Collectibles'
                        />
                        <Menu.Item
                            name='Game Items'
                        />
                        <Menu.Item
                            name='Music'
                        />
                        <Menu.Item
                            name='Domains'
                        />
                        <Menu.Item
                            name='Templates'
                        />
                        <Menu.Item
                            name='Videos'
                        />
                        <Menu.Item/>
                    </Menu>
                }
                <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    <Menu fluid 
                        borderless
                        attached='middle' 
                        color='white' 
                        fitted
                        style={{height: '300px'}}
                    >
                        <Image
                            fluid
                            src='https://react.semantic-ui.com/images/wireframe/image.png' 
                        />
                    </Menu>
                    <Grid stackable columns={3}>
                        <Grid.Row>
                            <Grid.Column>
                                {
                                    this.state.navButtonVisible &&
                                    <div className='floating-left-button'>
                                        <Button>
                                            <Icon name='angle left' />
                                        </Button>
                                    </div>

                                }
                            </Grid.Column>
                            <Grid.Column>
                                {
                                    this.props.isMobile === false && 
                                    <div className='floating-discord-button'>
                                        <Button color='blue' fluid>
                                            <Icon name='discord' />
                                            Join our discord community
                                        </Button>
                                    </div>
                                }
                            </Grid.Column>
                            <Grid.Column>
                                {
                                    this.state.navButtonVisible &&
                                    <div className='floating-right-button'>
                                        <Button>
                                            <Icon name='angle right' />
                                        </Button>
                                    </div>

                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

export default HeaderUI
