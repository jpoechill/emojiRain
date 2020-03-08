<template>
    <div class="container">
      <img src="/liam.png" @click="sayHello('/sounds/deepbark.mp3')" alt="">
      <img src="/skull-light.png" @click="sayHello('/sounds/dolphin.mp3')" alt="">
      <img src="/p_momz.png" @click="sayHello('/sounds/jaguar.mp3')" alt="">
      <img src="/olivia.png" @click="sayHello('/sounds/tiger.mp3')" alt="">
      <img src="/jesus.png" @click="sayHello('/sounds/zebra.mp3')" alt="">
      <img src="/bednar.png" @click="sayHello('/sounds/deepbark.mp3')" alt="">
      <img src="/taylor.png" @click="sayHello('/sounds/meow.mp3')" alt="">
      <img src="/skull-dark.png" @click="sayHello('/sounds/jaguar.mp3')" alt="">
      <img src="/ellen.png" @click="sayHello('/sounds/tiger.mp3')" alt="">
      <img src="/ian.png" @click="sayHello('/sounds/zebra.mp3')" alt="">
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    sayHello(fileName) {
      var sound = new Audio(fileName);

      sound.play();
    },
    playMeow() {
      var sound = new Audio('meow.mp3');

      sound.play();
    },
    classObject: function () {
      return {
        left: this.getRandomLeft(), 
        'animation-delay': this.getRandomDelay(), 
        'animation-duration': this.getRandomDuration()
      }
    },
    getRandomLeft() {
      return Math.floor(Math.random() * 1200) + 'px'; 
    },
    getRandomDelay() {
      return Math.floor(Math.random() * 20) + 's'; 
    },
    getRandomDuration() {
      return (Math.random() * 5) + 15 + 's'; 
    }
  },
  
}
</script>

<style>
.container > div {
  width: 90px;
  /* top: -200px; */
  position: absolute;
  animation-iteration-count: infinite;
}

img {
  width: 100px;
  display: inline;
  /* height: 100px; */
}

img:hover {
  cursor: pointer;
  transform: scale(1.5);
}
/* 
.container > div:hover {
  cursor: pointer;
  transform: scale(2)
} */

.unselect {
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
</style>
