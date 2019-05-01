# ARA
### Run [front-end] server (mac)
1. build
<pre><code>
$ cd ara/front-end/study/react_ara
$ ./0_install.sh
$ ./0_1_add_redux.sh
</code></pre>

2. run
<pre><code>
$ ./1_start.sh
</code></pre>

3. 참고
* back-end django rest server와 연동 test 하기 위해서, **MapAndListContainer 및 PageContentContainer** 의 axios.get axios.delete 뒤의 ip 주소 및 port 주소를 django rest server 에 맞게 바꿔줘야 한다.

### Run [back-end] server

0. 폴더로 이동
<pre><code>
$ cd ARA/back-end/django_test/rest_server
</code></pre>
1. django 및 필요 패키지 설치
<pre><code>
$ pip install django
$ pip install djangorestframework
$ pip install django-rest-swagger
$ pip install django-cors-headers
</code></pre>
2. Run back-end
<pre><code>
$ python manage.py runserver [ip:port]
</code></pre>

### ARA Project
<div>
  <img src="https://github.com/ara-official/ARA/blob/master/documents/meeting/20190303__0__meeting.jpeg" width="100%"/>
  <table>
    <tr>
      <td>가을</td>
      <td>꾸꾸</td>
    </tr>
    <tr>
      <td width="530">
        <img src="https://github.com/ara-official/ARA/blob/master/front-end/img/gauri.jpeg?raw=true"/>
      </td>
      <td width="400">
        <img src="https://avatars1.githubusercontent.com/u/47748609?s=200&v=4" width="100%"/>
      </td>
    </tr>
</table>

</div>
