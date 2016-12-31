<template>
  <div id="app">
    <countdown :date="1514732400" year="2018"></countdown>
  </div>
</template>

<script>
import Countdown from './components/Countdown'

export default {
  name: 'app',
  components: {
    countdown: Countdown
  }
}
</script>

<style>
#app {
    align-items: center;
    bottom: 0;
    background-color: #34495e;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top:0;
}
</style>
