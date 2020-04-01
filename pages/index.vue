<template>
  <div class="container">
    <!-- <hand></hand> -->
    <transition-group name="fade" tag="div" class="deck">
      <div class="card" v-for="(card, index) in deck" :class="card.color" :key="`key-${index}`">
        <span class="card__suit card__suit--top">{{ card.value}}</span>
        <span class="card__number">{{ card.type }} </span>
        <span class="card__suit card__suit--bottom">{{ card.value }}</span>
      </div>
    </transition-group>
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
      shuffleSpeed: 'shuffleMedium'
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

.title {
  font-family: Roboto Slab, sans-serif;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
  font-weight: 300;
  font-size: 3rem;
}

.deck {
  margin-left: 30px;
  padding-top: 30px;
}

.card {
  width         : 75px;
  height        : 100px;
  float         : left;
  margin-right  : 5px;
  margin-bottom : 5px;
  border-radius : 2px;
  position      : relative;
  border        : 1px solid black;
  box-shadow    : 2px 3px 5px 0 rgba(0,0,0,.2);
}

.card__suit {
  width   : 100%;
  display : block;
}

.card__suit--top {
  text-align   : left;
  padding-left : 5px;
}

.card__suit--bottom {
  position     : absolute;
  bottom       : 0px;
  text-align   : left;
  transform    : rotate(180deg);
  padding-left : 5px;
}

.card__number {
  width      : 100%;
  position   : absolute;
  top        : 38%;
  text-align : center;
}

.shuffleMedium-move {
  transition : transform 2s;
}

.fade-enter-active, .fade-leave-active {
  transition : opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity : 0;
}

</style>
