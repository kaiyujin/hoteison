<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height>
        <v-layout
          align-center
          justify-center>
          <v-flex
            xs12
            sm8
            md4>
            <v-card class="elevation-12">
              <v-toolbar
                dark
                color="primary">
                <v-toolbar-title>Hoteison Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    prepend-icon="person"
                    name="email"
                    label="Email"
                    type="text"/>
                  <v-text-field
                    v-model="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                  color="primary"
                  @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  layout: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() {
      alert('hoge')
      return null
    }
  }
}
</script>
