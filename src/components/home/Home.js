import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Jumbotron } from 'reactstrap'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogin: false
        }
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        document.title = "Home"
        if (sessionStorage.getItem('session')) {

        } else {
            this.setState({ isLogin: true })
        }
    }

    logout(){
        sessionStorage.setItem('session', '')
        sessionStorage.clear()
        this.setState({ isLogin: true })
    }

    render() {
        if (this.state.isLogin) {
            return (<Redirect to={'/'} />)
        }
        return (
            <Fragment>
                <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                <Button color="danger" onClick={this.logout}>Logout</Button>
            </Fragment>
        )
    }
}
export default Home