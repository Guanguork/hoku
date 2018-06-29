<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Lolo></Lolo>
  </div>
</template>

<script>
import Lolo from './Lolo.vue'
export default {
  name: 'Lala',
  data () {
    return {
      msg: 'as'
    }
  },
  components: {Lolo}
}
</script>


