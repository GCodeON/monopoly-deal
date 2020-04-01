<template>
  <div class="container">
    <hand></hand>
      <div class="card" v-for="(card, index) in deck">
        <span class="card__suit card__suit--top">{{ card.value}}</span>
        <span class="card__number">{{ card.type }} </span>
        <span class="card__suit card__suit--bottom">{{ card.value }}</span>
      </div>
      <button @click="shuffle()"> Shuffle</button>
  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

import Hand from '~/components/Hand'
import Deck from '~/components/Deck'



export default {
  components: {
    Hand
  },
  data() {
    return {
      
    };
  },
  mounted() {

  },
  computed:
    mapState([
      'deck'
    ]),
  methods: {
    ...mapMutations({
      shuffle: 'shuffleDeck'
    })
  }
};
</script>

<style lang="scss" scoped>
// .container {
//   margin: 0 auto;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700");

html, body, #app {
  height: 100%;
  background: ghostwhite;
}

.title {
  font-family: Roboto Slab, sans-serif;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
  font-weight: 300;
  font-size: 3rem;
}

.speed-buttons {
  text-align: center;
  padding-top: 30px;

  .button {
    height: 2.50em;
  }
}


.main-buttons {
  display: block;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
}

.count-section {
  position: absolute;
  top: 10px;
  right: 10px;
}

.fas {
  padding-left: 5px;
}

.deck {
  margin-left: 30px;
  padding-top: 30px;
}

.card {
  width: 75px;
  height: 100px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 2px;
  position: relative;
  border: 1px solid black;
  box-shadow: 2px 3px 5px 0 rgba(0,0,0,.2);
}

.card__suit {
  width: 100%;
  display: block;
}

.card__suit--top {
  text-align: left;
  padding-left: 5px;
}

.card__suit--bottom {
  position: absolute;
  bottom: 0px;
  text-align: left;
  transform: rotate(180deg);
  padding-left: 5px;
}

.card__number {
  width: 100%;
  position: absolute;
  top: 38%;
  text-align: center;
}

.red {
  color: #FF0000;
}

.black {
  color: #000;
}

.twitter-section {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.twitter-section .fa-twitter-square {
  color: #00d1b2;
  font-size: 30px;
}

.shuffleSlow-move {
  transition: transform 2s;
}

.shuffleMedium-move {
  transition: transform 1s;
}

.shuffleFast-move {
  transition: transform 0.5s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 1210px) {
  .deck {
    position: initial;
    top: 0;
  }

  .twitter-section {
    display: none;
  }
}

</style>
