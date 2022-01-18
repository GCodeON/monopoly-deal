<template>
      <div class="player"> 
		<button v-if="player.turn" @click="nextTurn">End Turn</button>
		<hand :player="player" class="hand" ></hand>
		<bank :player="player" class="money"></bank>
		<sets :player="player" class="properties"></sets>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Hand from '~/components/Hand'
import Bank from '~/components/Bank'
import Sets from '~/components/Sets'


export default {
  props: [
	//   'id', 'role', 'active'
	'player'
  ],
  components: {
	  Hand, Bank, Sets
  },
  data() {
    return {
	
	}
  },
  mounted() {
   
  },
  computed: {

  },
  methods: {
	...mapActions([
		'nextTurn'
	]),
	endTurn() {
		
	}
   
  }
};
</script>

<style lang="scss" scoped>
	.hand {
		grid-area: hand;
	}
	.money {
		grid-area: bank;
	}
	.properties {
		grid-area: sets;
	}
	.player {
		display: grid;
		grid-template-rows    : 1fr 1fr;
		&.user {
			grid-template-columns : 25% 1fr;
			grid-template-areas   : "bank hand" "sets sets";
		}
		&.opponent {
			grid-template-columns : 1fr 25%;
			grid-template-areas: "sets sets" "hand bank";
		}
	}
	.hand, .money, .properties {
		border: 1px grey dashed;
		width: 100%;
	}
</style>
