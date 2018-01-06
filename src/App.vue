<template>
    <div id="app"
         class="wrapper">
        <!-- <div id=""> -->
        <router-view/>

        <!-- </div> -->
    </div>
</template>

<script>
import navBar from './nav/nav'
export default {
  components: { navBar },
  name: 'app'
}
</script>

<style>
</style>
