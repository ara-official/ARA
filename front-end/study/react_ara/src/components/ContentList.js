import React, {Component} from 'react';
import ContentContainer from '../containers/ContentContainer';
import { Map, List } from 'immutable';


class ContentList extends Component{


    render(){
        const { information, destination } = this.props;
        console.log('information : ' + information);
        if(destination === '')
        {
            // const list = information.map(
            //     info => (<ContentContainer
            //         key={info.id}
            //         info={info}
            //     />)
            // );
            const list = information.map(
                info => {
                    const { id } = info.toJS();
                    console.log('id : ' + id);
                    return (<ContentContainer
                    key={id}
                    info={info}
                    />);
            }
            );
            return(
                <div>
                    {list}
                </div>
            );
        }
        else
        {
            const list = information.filter(info => info.destination === destination).map(
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