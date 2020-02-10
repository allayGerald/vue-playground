<template>
    <div class="col-sm-12 col-md-4 col-lg-3">
        <div class="card " >
            <div class="card-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "QuoteComponent"
    }
</script>

<style scoped>
    /*.card{
        width: 18rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }*/
    .card-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }
    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ffe2e2;
    }
</style>