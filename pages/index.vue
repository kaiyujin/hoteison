<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">

      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Login from '~/components/Login.vue'
import Logout from '~/components/Logout.vue'
import firebase from '@/plugins/firebase'

export default {
  components: {
    Login,
    Logout
  },
  asyncData() {
    return {
      isLogin: false,
      userData: null
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogin = true
        this.userData = user
        writeUserData(user)
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  }
}
function writeUserData(user) {
  console.log(user.uid)
  const firestore = firebase.firestore()
  const settings = { timestampsInSnapshots: true }
  firestore.settings(settings)
  firestore
    .collection('users')
    .doc(user.uid)
    .set({ email: user.email })
    .then(function(docRef) {
      console.log('complete')
    })
  console.log('test')
}
</script>
