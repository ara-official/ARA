import React, {Component} from 'react';
import ContentContainer from '../containers/ContentContainer';

class ContentList extends Component{
    static defaultProps = {
        data: []
    };

    render(){
        const { data, destination } = this.props;
        
        if(destination === '')
        {
            const list = data.map(
                info => (<ContentContainer
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
                info => (<ContentContainer
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