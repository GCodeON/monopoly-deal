<template>
    <div class="sets pile">
      <h2>Sets</h2>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'



export default {
  props: [
    'properties'
  ],
  data() {
    return {
     
    };
  },
  mounted() {
   
  },
  computed: {
  

  },
  methods: {
    ...mapActions([
        'draw'
    ]),
  }
};
</script>

<style lang="scss" scoped>
  .sets {

  }

</style>
