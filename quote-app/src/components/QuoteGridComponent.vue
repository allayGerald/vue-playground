<template>
    <div class="row main">
        <app-quote v-for="(quote, index) in quotes" :key="quote">{{ `${quote} index ${index}` }}</app-quote>
    </div>
</template>

<script>
    import QuoteComponent from "./QuoteComponent"

    export default {
        name: "QuoteGridComponent",
        props: ['quotes'],
        components: {
            appQuote: QuoteComponent
        }
    }
</script>

<style scoped>

</style>