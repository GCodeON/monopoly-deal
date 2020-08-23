<template>
      <div class="hand"> 
		<div class="stack" :class="{ active: isActive }" >
		  <draggable group="card" >
   			<transition-group>
				<div v-for="card in cards"
					:key="card"
					class="card"
					:class="card.color">
					<span class="corner top">
						{{ card.value}}
					</span>
					<span class="center">
						{{ card.type }}
					</span>
					<span class="corner bottom">
						{{ card.value }}
					</span>
				</div>
			</transition-group>
		  </draggable>
          </div>
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
