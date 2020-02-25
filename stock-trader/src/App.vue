<template>
    <div id="app" class="container-fluid">
        <app-header></app-header>
        <div class="row">
            <div class="col-12">
                <transition name="slide" , mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

    import HeaderComponent from "./components/HeaderComponent"

    export default {
        name: 'App',
        components: {
            appHeader: HeaderComponent
        },
        created() {
            this.$store.dispatch('setStocks')
        }

    }
</script>


<style>
    body {
        padding: 1rem;
    }

    .slide-enter-active {
animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
      animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-50px);
            opacity: 0;
        }
    }
</style>