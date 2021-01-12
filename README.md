# jjunstagram
이 프로젝트는 reactJS를 이용해서 만든 프로젝트입니다.

## 참고
<ol>
<li><a href="https://pusher.com/tutorials/instagram-clone-part-1">UI 제작</a></li>

<li>
<a href="https://pusher.com/tutorials/instagram-clone-part-2">UI와 GraphQL Data 연결</a></li>

<li> 
<a href="https://pusher.com/tutorials/instagram-clone-part-3">실시간 피드 업데이트 & 알림</a>
</li>

<li><a href="https://pusher.com/tutorials/instagram-clone-part-4">오프라인 설정</a>

</li>
</ol>

## 선행작업
Node, npm 설치
http-server 모듈 설치
```
npm install http-server
```

## 프로젝트 실행 방법
이 git repository를 clone 한 후 프로젝트 디렉토리에 들어가 node module을 설치합니다.
```
cd jjunstagram
npm install
```
server 디렉토리도 마찬가지로 node module을 설치합니다.
```
cd server
npm install
```
jjunstagram 디렉토리로 돌아와 프로젝트를 빌드해줍니다.
```
cd ..
npm run build
```
nodeJS 서버를 실행해줍니다.
```
cd server
node server
```
React 서버를 실행해줍니다.
```
cd ..
npm start
```
http 서버를 실행해줍니다.
```
http-server build
```
