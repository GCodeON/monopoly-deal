<template>

      <div class="hand">
        <section>
          <div class="stack stack-fanout" :class="{ active: isActive }" >
            <!-- <div v-for="(card, index) in cards" class="card" :key="index">
              {{ card.title }}
            </div> -->
          </div>
        </section>
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
      isActive: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.fanout();
    }, 1000);
  },
  computed: {
    ...mapGetters([])

  },
  methods: {
    fanout() {
       this.isActive = true;
    }
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
  
  .card {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    outline: 1px solid transparent;
  }
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
