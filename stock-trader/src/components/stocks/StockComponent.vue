<template>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card ca">
            <div class="card-header">
                {{stock.name}} <small class="font-weight-bold">{{`(PRICE: ${stock.price} )`}}</small>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="float-left mr-2">
                        <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">
                    </div>
                    <div class="float-right mt-sm-2 mt-lg-0">
                        <button class="btn btn-success" @click="onBuyStock" :disabled="!Number.isInteger(quantity) || quantity <= 0">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StockComponent",
        props: ['stock'],
        data() {
            return {
                'quantity': 0
            }
        },
        methods: {
            onBuyStock() {
               const order = {
                   stockId: this.stock.id,
                   stockPrice: this.stock.price,
                   quantity: this.quantity
               };

               console.log(order);
               this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

</style>