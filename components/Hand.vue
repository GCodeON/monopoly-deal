<template>
      <div class="cards" :class="player.role"> 
		<!-- <div class="stack" :class="{ active: isActive }" > -->
			<draggable 
				group="card" 
				class="check-hand" 
				draggable=".card" 
				v-model="cards" 
				:move="checkMove"
				:disabled="!player.active"
			>
				<card 
					v-for="card in cards" 
					:card="card" 
					:key="card.id"
				/>
			</draggable>
          <!-- </div> -->
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Card from '~/components/Card';

export default {
  props: [
	// 'id', 'role', 'enabled'
	'player'
  ],
  components: {
	  Card
  },
  data() {
    return {
	  isActive: false,
    };
  },
  mounted() {
	
  },
  computed: {
	cards: {
		get() {
			return this.$store.state.players[this.player.id].hand;
		},
		set(value) {
			this.$store.commit('updateHand', { value: value, id: this.player.id})
		}
	}
  },
  methods: {
	...mapActions([
	  'onTurn',
	  'onAction',
	]),
	checkMove(event) {
	
		if(event.from.className === 'check-hand') {

			if(event.to.className === 'check-hand') {
				console.log("no hand to hand");
				return false;
			}

			if(event.to.className === 'discard-stack') {
				console.log("hand to discard", event);
				if(event.draggedContext.element.type === 'action') {
					// console.log("not an action card");
					alert(event.draggedContext.element.description);
					// execute action
					this.onAction(event.draggedContext.element);
				} else {
					return false;
				}
			}
			if(event.to.className === 'drag-bank') { 
				if(event.draggedContext.element.type === 'property' || event.draggedContext.element.type === 'wild') {
					console.log("no property in the bank");
					return false;
				}
			}
			if(event.draggedContext.element.type === 'money' || event.draggedContext.element.type === 'action') {
				if(event.to.className === 'property-sets' || event.to.className === 'property-stack') {
					console.log("no money or action card in property field");
					return false;
				}
			}
			if(event.to.className === 'property-sets nested' || event.to.className === 'property-stack' ) { 
				this.$store.commit('onEvent', {move: event.to.className, item: event.draggedContext});
				// this.$store.commit('updateMoveType', event.to.className)
			}
		} 
		// this.onTurn();
	},
	onStart(evt) {
		console.log("on start", evt);
	},

  }
};
</script>

<style lang="scss" scoped>
	.cards {
		animation : 3s appear;
		margin: 0 auto;
	}

	.stack {
		display: flex;
	}

	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
