<template>
  <draggable
    v-bind="dragOptions"
    class="property-sets"
    :list="list"
    :value="value"
    @input="emitter"
    @change="onChange"
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
        :child="true"
        @change="onChange"
      />
    </div>
  </draggable>
</template>

<script>
import { cloneDeep } from 'lodash-es'
import Card from '~/components/Card';

export default {
  name: "Property",
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
    },
    child : false
  },
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
    onChange() {
      // if (this.child === true) {
      //   this.emitter(this.value);
      // } else {
      //     this.emitter(this.value);
      // }
    },
    checkMove(event) {
      console.log('check set event', event);
      if (event.from.className === 'property-sets' || event.from.className === 'property-sets nested') {
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
    align-items    : center;
    margin         : 0 25px;
  }
  .nested {
    min-height : 150px;
  }
</style>