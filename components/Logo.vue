<template>
    <div class="container">
      <!-- <div v-for="n in 10" :key="n" style="animation-name: straight;" :style="classObject()">
        <img src="/nick.png" style="width: 100%;" alt="">
      </div>
      <div v-for="n in 10" :key="n" style="animation-name: left;" :style="classObject()">
        <img src="/justin.png" style="width: 100%;" alt="">
      </div>
      <div v-for="n in 10" :key="n" style="animation-name: right;" :style="classObject()">
        <img src="/taylor.png" style="width: 100%;" alt="">
      </div> -->
      <!-- <div v-for="n in 10" :key="n" style="font-size: 48px; animation-name: right;" :style="classObject()">
        🌲
      </div> -->
      <div v-for="n in 10" @click="sayHello" class="unselect" :key="n" style="font-size: 64px; animation-name: left;" :style="classObject()">
        👋
      </div>
      <div v-for="n in 10" @click="sayHello" class="unselect" :key="n" style="font-size: 64px; animation-name: left;" :style="classObject()">
        <img src="/liam.png" style="width: 100%;" alt="">
      </div>
      <!-- <div v-for="n in 10" @click="sayHello" class="unselect" :key="n" style="font-size: 64px; animation-name: right;" :style="classObject()">
        <img src="/skull.png" style="width: 100%;" alt="">
      </div> -->
      <div v-for="n in 10" @click="sayHello" class="unselect" :key="n" style="animation-name: right;" :style="classObject()">
        <img src="/p_momz.png" style="width: 100%;" alt="">
      </div>
      <div v-for="n in 10" @click="playMeow" class="unselect" :key="n" style="animation-name: right;" :style="classObject()">
        <img src="/skull.png" style="width: 75%;" alt="">
      </div>
      <!-- <div v-for="n in 10" @click="playMeow" class="unselect" :key="n" style="animation-name: left;" :style="classObject()">
        <img src="/olivia.png" style="width: 100%;" alt="">
      </div> -->
      <!-- <div v-for="n in 10" @click="playMeow" class="unselect" :key="n" style="animation-name: left;" :style="classObject()">
        <img src="/bednar.png" style="width: 100%;" alt="">
      </div> -->
      <!-- <div v-for="n in 10" @click="playMeow" class="unselect" :key="n" style="animation-name: left;" :style="classObject()">
        <img src="/jesusy.png" style="width: 100%;" alt="">
      </div> -->
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    sayHello() {
      var sound = new Audio('pmomz-hello.m4a');

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

.container > div:hover {
  cursor: pointer;
  /* transform: scale(2) */
}

.unselect {
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

/* The animation code */
@keyframes right {
  100% {
    top: 900px;
    transform: translateX(40px) rotate(-180deg);
  }
}

@keyframes right-flip {
  0% {
    transform: scale(1.25) scaleX(-1);
  }

  100% {
    top: 900px;
    transform: scale(1.25) scaleX(-1) translateX(40px) rotate(-180deg);
  }
}

@keyframes left {
  100% {
    top: 900px;
    transform: translateX(-40px) rotate(180deg);
  }
}

@keyframes straight {
  100% {
    top: 900px;
    transform: translateX(-10px) rotate(45deg);
  }
}
</style>
