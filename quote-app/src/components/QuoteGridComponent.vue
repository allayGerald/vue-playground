<template>
    <div class="row main">
        <app-quote v-for="(quote, index) in quotes" :key="quote"  @click.native="onDelete(index)">{{ quote }}</app-quote>
    </div>
</template>

<script>
    import QuoteComponent from "./QuoteComponent"

    export default {
        name: "QuoteGridComponent",
        props: ['quotes'],
        components: {
            appQuote: QuoteComponent
        },
        methods: {
            onDelete(index) {
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style scoped>

</style>