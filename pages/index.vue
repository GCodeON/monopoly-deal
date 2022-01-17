<template>
  <div class="game">
	<Player :id="0" role="user" />
	<div class="middle">
		<!-- <Deck :cards="deck"></Deck> -->
		<Discard></Discard>
	</div>
	<Player :id="1" role="opponent" />
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'

import Player from '~/components/Player'
import Deck from '~/components/Deck'
import Discard from '~/components/Discard'

export default {
  components: {
	Deck, Discard, Player
  },
  data() {
    return {
	
    };
  },
  mounted() {
	  this.shuffle();
	  this.deal();
	  this.start();
	  this.nextTurn();

  },
  computed:
    mapState([
	  'deck',
	  'players',
	  'turn',
	  'discarded',
	  'active',
	  'cardCount'
    ]),
  methods: {
    ...mapActions([
      'shuffle',
      'deal',
	  'draw',
	  'start',
	  'nextTurn'
	])
  }
};
</script>

<style lang="scss" scoped>
	.game {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		max-height: 100vh;
	}
</style>
