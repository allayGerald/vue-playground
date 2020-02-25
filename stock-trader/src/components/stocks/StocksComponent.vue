<template>
   <div class="row my-5">
      <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
   </div>
</template>

<script>

    import StockComponent from "./StockComponent"

    export default {
        name: "StocksComponent",
        components: {
            appStock: StockComponent
        },
       computed: {
           stocks() {
              return this.$store.getters.stocks;
           }
       }
    }
</script>

<style scoped>

</style>