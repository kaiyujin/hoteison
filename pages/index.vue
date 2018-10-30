<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center"/>
      {{ titles }}
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  async asyncData() {
    let titles = []
    await firebase
      .firestore()
      .collection('titles')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data())
          titles.push(doc.data().name)
        })
      })
    return {
      titles
    }
  }
}
</script>
