<template>
    <div id="app" class="container">
        <app-header :totalCount="quotes.length" :maxCount="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="onAddQuote" v-model="isMax" :isMax="isMax" class="my-2"></app-new-quote>
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
    import HeaderComponent from "./components/HeaderComponent"

    export default {
        name: 'App',
        components: {
            appQuoteGrid: QuoteGridComponent,
            appNewQuote: NewQuoteComponent,
            appHeader: HeaderComponent
        },
        data: function () {
            return {
                quotes: [],
                maxQuotes: 10
            }
        },
        methods: {
            onAddQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                   alert('Maximum reached, Please delete before creating new quote');
                   return false;
                }
                this.quotes.push(quote);
            },
            onDelete(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

