// firebase/app에 포함된 모든 모듈을 firebase라는 객체에 부여한다.
import * as firebase from "firebase/app"

// firebase 설정과 관련된 개인 정보
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  strageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId : process.env.REACT_APP_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

// firebase.initializeApp initializeApp 함수를 firebase 객체서 꺼내 사용한것
export default firebase.initializeApp(firebaseConfig)