
### axios example
<pre><code>
axios.get('/user?id=sms')
            .then( response =&gt; { console.log(response); }) // success
            .catch( response =&gt; { console.log(response); }); // error

// catch 생략 가능

axios.get('user', {
    param: { id: 'sms'}
    })
    .then( response =&gt; { console.log(response); })
    .catch( response =&gt; { console.log(response); });


axios.post('msg', {
    user: 'sms',
    message: 'hi'
    })
    .then( response =&gt; { console.log(response); })
    .catch( response =&gt; { console.log(response); });

</code></pre>