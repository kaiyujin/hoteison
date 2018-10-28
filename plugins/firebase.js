import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAzlHACYMJazQTr5_wumpwDEx_7LGppQiY',
    authDomain: 'hoteison-ebi.firebaseapp.com',
    databaseURL: 'https://hoteison-ebi.firebaseio.com',
    projectId: 'hoteison-ebi'
  })
}

export default firebase
