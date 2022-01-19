<template>
  <div class="game" v-if="gameStarted">
	<Player
		v-for="(data, index) in players" 
		:key="index"  
		:player="data"
		:class="data.role"
	/>
	<div class="middle">
		<!-- <Deck :cards="deck"></Deck> -->
		<Discard></Discard>
	</div>

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
      this.start();
	  this.deal();
	  this.nextTurn();
  },
  computed:
    mapState([
	  'deck',
	  'players',
	  'turnCount',
	  'discarded',
	  'active',
	  'cardCount',
	  'gameStarted'
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
		display             : grid;
		grid-template-rows  : 1fr 1fr 1fr;
		max-height          : 100vh;
		grid-template-areas : "user" "middle" "opponent";
	}
	.user {
		grid-area: user;
	}
	.middle {
		grid-area : middle;
	}
	.opponent {
		grid-area: opponent;
	}
</style>
