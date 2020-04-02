<template>
      <div class="hand">
        <section>
          <div class="stack stack-fanout" 
		  	:class="{ active: isActive }" >
            <div class="card"
				v-for="(card, index) in player.hand" 
				:key="index" 
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
          </div>
        </section>
      </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  props: [
    'player'
  ],
  components: {

  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.fanout();
    }, 1000);
  },
  computed: {

  },
  methods: {
    fanout() {
       this.isActive = true;
    },
  }
};
</script>

<style lang="scss" scoped>
	.hand {
		animation: 3s appear;
		margin: auto;
	}

	.stack {
		margin    : 20px auto;
		width     : 400px;
		padding   : 0;
		position  : relative;
		max-width : 100%;
	
		.card {
			max-width          : 100%;
			width              : 100%;
			position           : absolute;
			top                : 0;
			left               : 0;
			-webkit-transition : all 0.3s;
			transition         : all 0.3s;
			border             : 1px solid white;
			height             : 500px;
			border-radius      : 25px;
			box-shadow         : 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			transition         : all 0.7s;
			&:hover {
				z-index: 10;
				transform: scale(1.2) !important;
			}


			&:last-child {
				position: relative;
			}
			
			.corner {
				width   : 100%;
				display : block;
			}
			.top, .bottom, .center {
				font-size: 3em;
			}
			.top {
				text-align   : left;
				padding-left : 5px;
			}
			.bottom {
				position     : absolute;
				bottom       : 0px;
				text-align   : left;
				transform    : rotate(180deg);
				padding-left : 5px;
			}
			.center {
				width          : 100%;
				position       : absolute;
				top            : 38%;
				text-align     : center;
				text-transform : uppercase;
			}
		}
	}

	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}



	/* Fan out */
	.stack-fanout .card:first-child,
	.stack-fanout .card:nth-child(2) {
		transform: scale(0.8);
	}

	.stack-fanout.active .card:nth-child(3) {
		transform: scale(0.9);
	}

	.stack-fanout.active .card:first-child {
		transform: rotate(-25deg) translateX(-55%) scale(0.8);
	}

	.stack-fanout.active .card:nth-child(2) {
		transform: rotate(-15deg) translateX(-35%) scale(0.8);
	}
	.stack-fanout.active .card:nth-child(3) {
		transform: rotate(0deg) translateX(0%) scale(0.8);
	}

	.stack-fanout.active .card:nth-child(4) {
		transform: rotate(15deg) translateX(35%) scale(0.8);
	}
	.stack-fanout.active .card:nth-child(5) {
		transform: rotate(25deg) translateX(55%) scale(0.8);
	}
</style>
