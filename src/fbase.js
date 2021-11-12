// firebase/app에 포함된 모든 모듈을 firebase라는 객체에 부여한다. (버전이 바뀌면서 export 하는 방법이 바뀌어서 그럴수 잇음)
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

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
const app = initializeApp(firebaseConfig)

export const authService = getAuth()  // auth 서비스를 자주 호출할 예정이므로 이곳에서 작성