<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
    <div class="columns">
      <div class="column">
        <p class="is-size-6 has-text-weight-semibold">ชื่อ</p>
      </div>
      <div class="column">
        <p class="is-size-6 has-text-weight-semibold">นามสกุล</p>
      </div>
      <div class="column">
        <p class="is-size-6 has-text-weight-semibold">อายุ</p>
      </div>
  </div>
  <div v-for="item in customer" :key="item.id">
    <div class="columns">
      <div class="column">
        <p class="is-size-6">{{item.name}}</p>
      </div>
      <div class="column">
        <p class="is-size-6">{{item.lastName}}</p>
      </div>
      <div class="column">
        <p class="is-size-6">{{item.age}}</p>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import { HTTP } from "@/axios.js";

export default {
  name: "HelloWorld",
  data(){
    return{
      customer:[]
    }
  },

  props: {
    msg: String,
  },
  mounted(){
    this.getCustomer();
  },
  methods: {
    async getCustomer() {
      await HTTP.get(`CPC-MyChannelFE-WEB/rest/product/GetProductDetail`)
        .then((res) => {
          if (res.data.success) {
            this.customer = res.data.data;
            console.log(res.data.data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
