import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { Content } from 'components';
import 'css/ContentList.css';

class ContentList extends Component{
    static defaultProps = {
        data: []
    };

    render(){
        const {data} = this.props;

        const list = data.map(
            i => (<Content
                key={i.id}
                info={i}
            />)
        );

        return(
            <div>
                {/* <h2>[ContentList.js]</h2> */}
                {list}
            </div>
        );
    }
}

export default ContentList;