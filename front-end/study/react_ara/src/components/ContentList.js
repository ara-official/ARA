import React, {Component} from 'react';
import ContentContainer from '../containers/ContentContainer';

class ContentList extends Component{


    render(){
        console.log('ⓙⓢ START render() - ContentList.js ');
        const { information, region } = this.props;
        console.log('search keyword(region) : ' + region);
        if(region === '')
        {
            console.log('search keyword(region) x');
            // const list = information.map(
            //     info => (<ContentContainer
            //         key={info.id}
            //         info={info}
            //     />)
            // );
            const list = information.map(
                info => {
                    const { id } = info.toJS();
                    return (<ContentContainer
                    key={id}
                    info={info}
                    />);
            }
            );
            return(
                <div>
                    {list}
                    {console.log('ⓙⓢ END render() - ContentList.js ')}
                </div>
            );
        }
        else
        {
            console.log('search keyword(region) o');
            const list = information.filter(info => info.toJS().region === region).map(
                info => 
                {
                    const { id } = info.toJS();
                    return (<ContentContainer
                    key={id}
                    info={info}
                    />);
            }
            );
            return(
                <div>
                    {list}
                    {console.log('ⓙⓢ END render() - ContentList.js ')}
                </div>
            );
        }


    }
}

export default ContentList;