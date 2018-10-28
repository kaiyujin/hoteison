<template>
  <div>
    {{ user.displayName }}
    {{ user.uid }}
    {{ user.email }}
    <v-btn
      color="primary"
      @click="logout">ログアウト</v-btn>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'Logout',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut()
    }
  }
}
</script>
