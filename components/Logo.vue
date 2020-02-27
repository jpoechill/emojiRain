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
      <div v-for="n in 20" @click="sayHello" :key="n" style="font-size: 64px; animation-name: left;" :style="classObject()">
        👋
      </div>
      <div v-for="n in 20" @click="sayHello" :key="n" style="font-size: 64px; animation-name: left;" :style="classObject()">
        #A
      </div>
      <div v-for="n in 20" @click="sayHello" :key="n" style="animation-name: right;" :style="classObject()">
        <img src="/p_momz.png" style="width: 100%;" alt="">
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    sayHello() {
      var msg = new SpeechSynthesisUtterance('Hello');
      window.speechSynthesis.speak(msg);
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
      return Math.floor(Math.random() * 15) + 's'; 
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
  top: -200px;
  position: absolute;
  animation-iteration-count: infinite;
}

.container > div:hover {
  cursor: pointer;
  transform: scale(2)
}

/* The animation code */
@keyframes right {
  100% {
    top: 800px;
    transform: translateX(40px) rotate(-180deg);
  }
}

@keyframes right-flip {
  0% {
    transform: scale(1.25) scaleX(-1);
  }

  100% {
    top: 800px;
    transform: scale(1.25) scaleX(-1) translateX(40px) rotate(-180deg);
  }
}

@keyframes left {
  100% {
    top: 800px;
    transform: translateX(-40px) rotate(180deg);
  }
}

@keyframes straight {
  100% {
    top: 800px;
    transform: translateX(-10px) rotate(45deg);
  }
}
</style>
