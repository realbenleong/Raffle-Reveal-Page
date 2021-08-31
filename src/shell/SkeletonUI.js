import React, { Component } from 'react'
import HeaderUI from './HeaderUI';
import BodyUI from './BodyUI';
import FooterUI from './FooterUI';
import { Container, Divider } from 'semantic-ui-react'

export class SkeletonUI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isMobile: false,
             windowWidth: null
        }
    }
    
    handleWindowSizeChange = () => {
        if (window.innerWidth <= 768) {
            this.setState(prevState => ({
                ...prevState,
                isMobile: true,
                windowWidth: window.innerWidth
            }), () => { 
                // console.log(this.state.windowWidth)
            })
        }
        else {
            this.setState(prevState => ({
                ...prevState,
                isMobile: false,
                windowWidth: window.innerWidth
            }), () => { 
                // console.log(this.state.windowWidth)
            })
        }
    }
    
    componentDidMount() {
        this.setState(prevState => ({
            ...prevState,
            isMobile: window.innerWidth <= 768 ? true : false,
            windowWidth: window.innerWidth
        }), () => { 
            window.addEventListener('resize', this.handleWindowSizeChange);
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    render() {
        return (
            <div style={{
                    width: '100%',
                    height: '100%',
                    // backgroundColor: 'red'
                }}>
                <div>
                    <HeaderUI 
                        isMobile={this.state.isMobile}
                        windowWidth={this.state.windowWidth}
                    />
                </div>
                <div style={{marginTop: '2em'}}>
                    <BodyUI
                        isMobile={this.state.isMobile}
                    />
                </div>
                <FooterUI
                    isMobile={this.state.isMobile}
                />
            </div>
        )
    }
}

export default SkeletonUI
