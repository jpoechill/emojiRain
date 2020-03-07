<template>
    <div>
      <div class="myContainer">
        <!-- <Logo></Logo>
         -->
        <TicTacToe></TicTacToe>
        <!-- <button @click="sayHello">Say Hello..!</button> -->
      </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import TicTacToe from '~/components/TicTacToe.vue'

export default {
  components: {
    TicTacToe
  },
  data() {
    return {
    }
  },
  methods: {
    sayHello() {
      var sound = new Audio({
          src: 'pmomz-hello.m4a',
          volume: 0.5,
      });
      sound.play();
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
