<template>
      <div class="hand"> 
          <div class="stack" 
		  	:class="{ active: isActive }" >
            <div class="card"
				v-for="(card, index) in cards" 
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
      </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  props: [
    'cards'
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
		.card {
			height        : 200px;
			width         : 150px;
			position      : relative;
			transition    : all 0.3s;
			border        : 3px solid white;
			border-radius : 15px;
			box-shadow    : 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			transition    : all 0.7s;
			margin: 0 1em;
			// &:hover {
			// 	z-index: 10;
			// 	transform: scale(1.2) !important;
			// }
			
			.corner {
				width   : 100%;
				display : block;
			}
			.top, .bottom, .center {
				font-size: 1.5em;
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
</style>
