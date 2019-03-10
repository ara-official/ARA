import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContentForm, ContentList } from 'components';

class Create extends Component {
  // temp
  id = 2
  state = {
    information: [
      {
        id: 0,
        numOfpeople: 0,
        nickName: 'choi',
        phone: '010-1111-1111',
        perpose: 'have a lunch'
      },
      {
        id: 1,
        numOfpeople: 4,
        nickName: 'son',
        phone: '010-2222-2222',
        perpose: 'look around'
      }
    ]
  }

  handleCreate = (e) => {
    console.log('handleCreate');
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...e})
    });
  }


  render() {
    console.log('Create.js render() START');
    const stylePage = {
      border: '3px solid black',
      padding: '8px',
      margin: '8px'
    };

    const activeStyle = {
      color: 'red',
      fontSize: '2rem'
    };
    const {information} = this.state; // test

    return (
      <div style={stylePage}>
          {/* <h2>[Create.js]</h2> */}
          <li><NavLink exact to ="/" activeStyle={activeStyle}>뒤로가기</NavLink></li>
          
          <ContentForm onCreate={this.handleCreate}/>
          
          <ContentList data={information}/> {/*test*/}
          {console.log('Create.js render() END')}
      </div>
    );
  }
}

export default Create;
