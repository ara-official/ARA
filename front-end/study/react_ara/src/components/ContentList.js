import React, {Component} from 'react';
import { Content } from '../components';
import '../css/ContentList.css';

class ContentList extends Component{
    static defaultProps = {
        data: []
    };

    render(){
        const { data, destination } = this.props;
        
        if(destination === '')
        {
            const list = data.map(
                info => (<Content
                    key={info.id}
                    info={info}
                />)
            );
            return(
                <div>
                    {list}
                </div>
            );
        }
        else
        {
            const list = data.filter(info => info.destination === destination).map(
                info => (<Content
                    key={info.id}
                    info={info}
                />)
            );
            return(
                <div>
                    {list}
                </div>
            );
        }

        
    }
}

export default ContentList;