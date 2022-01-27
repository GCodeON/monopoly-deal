<template>
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
</template>

<script>


export default {
  name: "card",
  props: ['card'],
  components: {
  },
  computed: {
  
  },
  methods: {
   
  }

};
</script>


<style lang="scss" scoped>

</style>