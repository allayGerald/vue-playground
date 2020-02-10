<template>
    <div class="progress my-2">
        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0"
             :style="{width: (totalCount / maxCount)* 100 + '%'}"
             aria-valuemax="100">{{ `${totalCount} / ${maxCount}`}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent",
        props: ['totalCount', 'maxCount']
    }
</script>

<style scoped>
.progress {
    height: 1.5rem;
}
</style>