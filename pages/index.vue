<template>
    <div>
      <div class="myContainer">
        <Logo></Logo>
        <!-- <button @click="sayHello">Say Hello..!</button> -->
      </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
    }
  },
  methods: {
    sayHello() {
      var msg = new SpeechSynthesisUtterance('Hello');
      window.speechSynthesis.speak(msg);
    },
  },
}
</script>

<style>
body, html {
  margin: 0px;
  background-color: orange;
}

.myContainer {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>
