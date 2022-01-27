<template>
  <draggable
    v-bind="dragOptions"
    class="property-sets"
    :list="list"
    :value="value"
    @input="emitter"
    :move="checkMove"
  >
    <div 
      class="property-stack" 
      v-for="card in realValue"
      :key="card.id"
    >
      <card :card="card" />
      <property 
        class="nested" 
        :list="card.sets"
      />
    </div>
  </draggable>
</template>

<script>

import Card from '~/components/Card';

export default {
  name: "Property",
  props: ['value', 'list'],
  components: {
    Card
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
  methods: {
    emitter(value) {
      this.$emit("input", value);
    },
    checkMove(event) {
      console.log('check set event', event);
      if (event.from.className === 'property-sets' || event.from.className === 'property-stack') {
        if(event.to.className === 'check-hand') {
          console.log("no property to hand");
          return false;
        }
        if(event.to.className === 'discard-stack') {
          console.log("no property to discard");
          return false;
        }
        if(event.to.className === 'drag-bank') {
          console.log("no property to bank");
          return false;
        }
        if(event.to.className === 'property-stack') {
          console.log('stack to stack');

        }
      }
    },
  },
};
</script>


<style lang="scss" scoped>
  .property-sets {
    display: flex;
    width: 100%;
    justify-content: center;
    &.nested {
      border     : dashed black 1px;
    }
  }
  .property-stack {
    display        : flex;
    flex-direction : column;
    // border         : solid black 1px;
  }
  .nested {
    min-height : 150px;
  }
</style>