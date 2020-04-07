<template>
  <div class="game">
	<player :data="players[0]" role="user"></player>
	<div class="middle">
		<deck :cards="deck"></deck>
	</div>
	<player :data="players[1]" role="opponent"></player>
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
  },
  computed:
    mapState([
	  'deck',
	  'players',
	  'turn',
	  'discardPile'
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
		max-height: 100vh;
	}
</style>
