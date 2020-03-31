<template>
      <div class="deck">

      </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  components: {

  },
  data() {
    return {
     
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
  animation: 3s appear;
  margin: auto;
}

.stack {
	margin: 20px auto;
	width: 400px;
	padding: 0;
	position: relative;
	max-width: 100%;
}

.stack img {
	max-width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	outline: 1px solid transparent;
}

.stack img:last-child {
	position: relative;
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
.stack-fanout img:first-child,
.stack-fanout img:nth-child(2) {
	transform: scale(0.8);
}

.stack-fanout.active img:nth-child(3) {
	transform: scale(0.9);
}

.stack-fanout.active img:first-child {
	transform: rotate(-10deg) translateX(-25%) scale(0.8);
}

.stack-fanout.active img:nth-child(2) {
	transform: rotate(10deg) translateX(25%) scale(0.8);
}
</style>
