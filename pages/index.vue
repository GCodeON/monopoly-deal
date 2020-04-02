<template>
  <div class="game">
    <hand :player="player1"></hand>
    <deck :cards="deck"></deck>
    <hand :player="player2"></hand>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'

import Hand from '~/components/Hand'
import Deck from '~/components/Deck'


export default {
  components: {
    Hand, Deck
  },
  data() {
    return {
	
    };
  },
  mounted() {
	  this.shuffle();
	  this.deal();
  },
  computed:
    mapState([
	  'deck',
	  'player1',
	  'player2'
    ]),
  methods: {
      ...mapActions([
      'shuffle',
      'deal',
      'draw'
    ])
  }
};
</script>

<style lang="scss" scoped>
	.game {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
	}

</style>
