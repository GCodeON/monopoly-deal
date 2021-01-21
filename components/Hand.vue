<template>
      <div class="hand"> 
		<!-- <div class="stack" :class="{ active: isActive }" > -->
		  <draggable group="card" draggable=".card" @onEnd="cardCount">
   			<transition-group>
				<div v-for="(card, index) in cards"
					:key="index"
					class="card"
					:class="card.color">
					<span class="corner top" v-if="card.value">
						{{ card.value}}
					</span>
					<span class="center" v-if="card.type">
						{{ card.type }}
					</span>
					<span class="corner bottom" v-if="card.value" >
						{{ card.value }}
					</span>
				</div>
			</transition-group>
		  </draggable>
          <!-- </div> -->
      </div>
</template>

<script>
// import { mapGetters } from 'vuex'


export default {
  props: [
    'cards', 'role'
  ],
  components: {

  },
  data() {
    return {
	  isActive: false,
    };
  },
  mounted() {
	  cardCount() {
		  console.log("card count");
	  }
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
	.hand {
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
