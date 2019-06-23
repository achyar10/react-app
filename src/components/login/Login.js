import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Button, InputGroup, Input, Container, Row, Col, Card, Form } from "reactstrap"
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            imei: '353552081356720',
            isLogin: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        document.title = "Login"
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.email == '') {
            alert('Email tidak boleh kosong')
        } else if (this.state.password == '') {
            alert('Password tidak boleh kosong')
        } else {
            let config = {
                headers: {
                    'X-API-KEY': '$2y$10$u1GmMlp3kzA/CSs5poUG5uk/Fub1YFvY3s99PbamiZg8JaXaSh/je'
                }
            }
            const URL = 'http://dhaft.com/gateway/user/login';
            axios.post(URL, this.state, config)
                .then((response) => {
                    if(response.data.status){
                        let userData = response.data.result
                        sessionStorage.setItem('session', JSON.stringify(userData))
                        this.setState({isLogin:true})
                    } else {
                        alert(response.data.result)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        if (this.state.isLogin) {
            return (<Redirect to={'/home'} />)
        }
        if (sessionStorage.getItem('session')) {
            return (<Redirect to={'/home'} />)
        }
        return (
            <Fragment>
                <Container className="wrap">
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 4 }}>
                            <Card className="flat p-3">
                                <h3 className="mb-3">Sign In</h3>
                                <Form onSubmit={this.handleSubmit}>
                                <InputGroup>
                                    <Input type="email" name="email" className="flat" placeholder="Email" onChange={this.handleChange} />
                                </InputGroup>
                                <InputGroup className="mt-3">
                                    <Input type="password" name="password" className="flat" placeholder="password" onChange={this.handleChange} />
                                </InputGroup>
                                <Button className="btn-success mt-3 btn-block">Login</Button>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
export default Login