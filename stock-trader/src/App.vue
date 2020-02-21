<template>
  <div id="app" class="container-fluid">
    <app-header></app-header>
    <div class="row">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import HeaderComponent from "./components/HeaderComponent"

export default {
  name: 'App',
  components: {
    appHeader: HeaderComponent
  }

}
</script>


<style>
  body {
    padding: 1rem;
  }
</style>