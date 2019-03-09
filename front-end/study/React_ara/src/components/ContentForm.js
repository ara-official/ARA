import React, { Component } from 'react';

class ContentForm extends Component{
    state = {
        title: '',
        nickName: '',
        address: '',
        phone: '',
        perpose: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log('do nothing right now..');
        e.preventDefault();

        this.props.onCreate(this.state);

        this.setState({
            title: '',
            nickName: '',
            address: '',
            phone: '',
            perpose: ''
        })
    }

    render(){
        const styleComponent = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        return(
            <form onSubmit={this.handleSubmit}>
                <div style={styleComponent}>
                    {/* <h2>[ContentForm.js]</h2> */}
                    <ul>
                    <li><input
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        name="title"
                    /></li>
                    <li><input
                        placeholder="nickName"
                        value={this.state.nickName}
                        onChange={this.handleChange}
                        name="nickName"

                    /></li>
                    <li><input
                        placeholder="주소?"
                        value={this.state.address}
                        onChange={this.handleChange}
                        name="address"
                    /></li>
                    <li><input
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        name="phone"
                    /></li>
                    <li><input
                        placeholder="perpose"
                        value={this.state.perpose}
                        onChange={this.handleChange}
                        name="perpose"
                    /></li>
                    </ul>
                    <div>글이름: {this.state.title}</div>
                    <div>닉네임: {this.state.nickName}</div>
                    <div>주소: {this.state.address}</div>
                    <div>phone: {this.state.phone}</div>
                    <div>perpose: {this.state.perpose}</div>
                    <button type="submit">생성(rerender 된다)</button>
                </div>
            </form>
        );
    };
}

export default ContentForm;