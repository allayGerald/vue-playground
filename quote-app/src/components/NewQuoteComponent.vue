<template>
    <div class="row my-2">
        <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
            <form @submit.prevent="onAddQuote">
                <div class="form-group">
                    <label for="quote"> Quote</label>
                    <textarea id="quote" rows="3" v-model.trim="quote" class="form-control" required></textarea>
                </div>
                <div class="">
                    <button class="btn btn-success" type="submit"> Add Quote</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewQuoteComponent",
        data: function () {
            return {
                quote: ''
            }
        },
        methods: {
            onAddQuote() {
                // console.log(this.quote);
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style scoped>

</style>