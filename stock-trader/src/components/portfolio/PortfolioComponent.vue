<template>
    <div>
        <app-stock v-for="stock in stockPortfolio" :stock="stock" :key="stock.id"></app-stock>
    </div>
</template>

<script>
    import StockComponent from './StockComponent'
    import {mapGetters} from 'vuex'
    
    export default {
        name: "PortfolioComponent",
        components: {
            appStock: StockComponent
        },
        computed: {
            ...mapGetters(['stockPortfolio'])
        }
    }
</script>

<style scoped>

</style>