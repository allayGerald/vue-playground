<template>
    <div id="app" class="container">
        <app-new-quote @quoteAdded="onAddQuote" class="my-2"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="onDelete"></app-quote-grid>
        
        <div class="row my-3">
            <div class="alert alert-info col-12">
                Click on Quote to delete!
            </div>
        </div>
    </div>
</template>

<script>

    import QuoteGridComponent from "./components/QuoteGridComponent"
    import NewQuoteComponent from "./components/NewQuoteComponent"

    export default {
        name: 'App',
        components: {
            appQuoteGrid: QuoteGridComponent,
            appNewQuote:  NewQuoteComponent
        },
        data: function () {
            return {
                quotes: [],
                maxQuotes: 10
            }
        },
        methods: {
            onAddQuote(quote) {
                this.quotes.push(quote);
            },
            onDelete(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

