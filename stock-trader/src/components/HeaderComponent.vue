<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">Stock Trader</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link to="/"
                                 exact-active-class="active"
                                 class="nav-item" tag="li"><a class="nav-link">Home</a>
                    </router-link>

                        <router-link class="nav-item"
                                     to="/portfolio"
                                     active-class="active" tag="li">
                            <a class="nav-link">Portfolio</a>
                        </router-link>
                        <router-link class="nav-item"
                                     to="/stocks"
                                     active-class="active" tag="li">
                            <a class="nav-link">Stocks</a>
                        </router-link>

                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">End Day</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Save and Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Save Data</a>
                            <a class="dropdown-item" href="#">Load Data</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>

</style>