<template>
  <div>
    <kk></kk>
    <div>{{msg}}</div>
    <pre>{{$data}}</pre>
  </div>
</template>

<script>
import kk from './Header.vue';
export default {
  components: {kk},
  data() {
    return {
      msg: 'App.ve',
      letras: [1, 2, 3, 4, 5]
    };
  },
  methods: {

  }
};
</script>
