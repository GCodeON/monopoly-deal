<template>
  <draggable
    v-bind="dragOptions"
    class="property-sets"
    :list="list"
    :value="value"
    @input="emitter"
    :move="checkMove"
  >
    <div class="property-stack" 
      :key="card.id" 
      v-for="card in realValue">
      <card :card="card" />
      <property class="nested" :list="card.sets" />
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
// .item-container {
//   max-width : 20rem;
//   margin    : 0;
// }
// .item {
//   padding          : 1rem;
//   border           : solid black 1px;
//   background-color : #fefefe;
//   min-height       : fit-content;
//   /* padding-bottom   : 50px; */
// }
// .item-sub {
//  margin: 50px;
// }
  .property-sets {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .property-stack {
    display        : flex;
    flex-direction : column;
    border         : solid black 1px;
  }
  .nested {
    min-height: 200px;
  }
</style>