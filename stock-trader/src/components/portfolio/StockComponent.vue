<template>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card ca">
            <div class="card-header">
                {{stock.name}} <small class="font-weight-bold">{{`(PRICE: ${stock.price} | ${stock.quantity})`}}</small>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="float-left mr-2">
                        <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">
                    </div>
                    <div class="float-right mt-sm-2 mt-lg-0">
                        <button class="btn btn-success" @click="onSellStock"
                                :disabled="!Number.isInteger(quantity) || quantity <= 0 || quantity > stock.quantity">
                            Sell
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "StockComponent",
        props: ['stock'],
        data() {
            return {
                'quantity': 0
            }
        },
        methods: {
            ...mapActions(['sellStock']),
            onSellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };

                this.sellStock(order);

                this.quantity = 0;

            }
        }
    }
</script>

<style scoped>

</style>