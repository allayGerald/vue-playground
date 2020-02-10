<template>
    <div id="app" class="container">
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>

    import QuoteGridComponent from "./QuoteGridComponent"

    export default {
        name: 'App',
        components: {
            appQuoteGrid: QuoteGridComponent
        },
        data: function () {
            return {
                quotes: [
                    'One quote', 'quote two'
                ],
                maxQuotes: 10
            }
        }
    }
</script>

