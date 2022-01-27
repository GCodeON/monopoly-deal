<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="property-sets item-container"
    :list="list"
    :value="value"
    @input="emitter"
  >
    <div class="property-stack item" 
      :key="card.id" 
      v-for="card in realValue">
          <div 
            class="card"
            :class="card.color"
            :id="`card-${card.id}`"
						:key="card.id"
          >
						<span class="corner top">
							{{ card.value}}
						</span>
						<span class="center" v-if="card.type">
							{{ card.type }}
						</span>
						<span class="corner bottom">
							{{ card.value }}
						</span>
					</div>
      <card class="item-sub" :list="card.sets" />
    </div>
  </draggable>
</template>

<script>


export default {
  name: "card",
  methods: {
    emitter(value) {
      console.log('emmitter', value);
      this.$emit("input", value);
    }
  },
  components: {
  },
  computed: {
    dragOptions() {
      return {
        animation  : 0,
        group      : "card",
        disabled   : false,
        ghostClass : "ghost-card"
      };
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.list;
    }
  },
  props: {
    value: {
      required : false,
      type     : Array,
      default  : null
    },
    list: {
      required : false,
      type     : Array,
      default  : null
    }
  }
};
</script>


<style lang="scss" scoped>
.item-container {
  max-width : 20rem;
  margin    : 0;
}
.item {
  padding          : 1rem;
  border           : solid black 1px;
  background-color : #fefefe;
  min-height       : fit-content;
  /* padding-bottom   : 50px; */
}
.item-sub {
 margin: 50px;
}
</style>