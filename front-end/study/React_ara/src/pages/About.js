import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) =>{
    const query = queryString.parse(location.search);
    console.log(query);

    const detail = query.detail === 'true';

    const stylePage = {
        border: '3px solid black',
        padding: '8px',
        margin: '8px'
      };

    return (
        <div style={stylePage}>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}
            {!detail && 'hihi'}
            <h3>url {match.url}</h3>
        </div>
    );
}

export default About;