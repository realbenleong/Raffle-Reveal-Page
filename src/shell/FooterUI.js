import React, { Component } from 'react'
import { Menu, List, Button, Dropdown, Icon, Image, Rail, Grid } from 'semantic-ui-react'
import './shell.css'

export class FooterUI extends Component {
    render() {

        let footerMenu = (width,items) => {
            return (
                <Menu fluid 
                    borderless
                    attached='middle' 
                    color='violet' 
                    inverted 
                    size='mini' 
                    className='shell-header-top' 
                    widths={width}
                >
                    {items}
                </Menu>
            )

        }

        let menuItem = (size) => {
            return (
                <Menu.Item>
                    <List link size={size}>
                        <List.Item active>Link</List.Item>
                        <List.Item active>Link</List.Item>
                        <List.Item active>Link</List.Item>
                        <List.Item active>Link</List.Item>
                    </List>
                </Menu.Item>
            )
        }

        return (
            <React.Fragment>
                <div style={{marginTop:'6em'}}>
                    <Menu fluid 
                        attached='middle' 
                        color='violet' 
                        inverted 
                        size='large' 
                        className='shell-header-bottom' widths={3}
                    >
                    </Menu>
                    {
                        this.props.isMobile === true && 
                        <React.Fragment>
                            {footerMenu(1,menuItem('massive'))}
                            {footerMenu(1,menuItem('massive'))}
                            {footerMenu(1,menuItem('massive'))}
                            {footerMenu(1,menuItem('massive'))}
                        </React.Fragment>
                    }
                    {
                        this.props.isMobile === false &&
                        <React.Fragment>
                            {footerMenu(6,
                                <React.Fragment>
                                    <Menu.Item></Menu.Item>
                                    {menuItem('big')}
                                    {menuItem('big')}
                                    {menuItem('big')}
                                    {menuItem('big')}
                                    <Menu.Item></Menu.Item>
                                </React.Fragment>
                                )}
                        </React.Fragment>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default FooterUI
