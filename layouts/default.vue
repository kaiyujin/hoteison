<template>
  <v-app id="keep">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          />
          <v-list-tile
            v-else
            :key="i"
            @click="test"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="amber"
      app
      absolute
      clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"/>
      <span class="title ml-3 mr-5">Hoteison</span>
      <v-spacer/>
      <Login
        v-if="!isLogin"/>
      <Logout
        v-if="isLogin"
        :user="userData" />
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height
        class="grey lighten-4">
        <v-layout
          justify-center
          align-center>
          <v-flex shrink>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
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
  data: () => ({
    drawer: null,
    items: [
      { divider: true },
      { heading: 'Periods' },
      { text: 'Create new label' }
    ]
  }),
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
  },
  methods: {
    test() {
      alert('hoge')
    }
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

<style lang="stylus">
  #keep
    .v-navigation-drawer__border
      display: none
</style>
