<template>
      <div class="player" :class="role"> 
        <!-- <hand :cards="data.hand" :role="role" class="cards" ></hand> -->
		<hand :cards="data.hand" :role="role" class="cards" ></hand>
		<bank :data="data.money" class="money"></bank>
		<sets :data="data.sets" :name="data.name" class="properties"></sets>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Hand from '~/components/Hand'
import Bank from '~/components/Bank'
import Sets from '~/components/Sets'


export default {
  props: [
	  'data', 'role'
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
   
  }
};
</script>

<style lang="scss" scoped>
	.cards {
		grid-area: cards;
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
			grid-template-areas   : "bank cards" "sets sets";
		}
		&.opponent {
			grid-template-columns : 1fr 25%;
			grid-template-areas: "sets sets" "cards bank";
		}
	}
	.cards, .money, .properties {
		border: 1px grey dashed;
		width: 100%;
	}
</style>
