<template>
    <CustomHeader />

    <main>
        <slot></slot>
    </main>

    <CustomFooter />
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
    /* Place it below other content */
    pointer-events: none;
    /* Allow interactions with underlying content */
}
</style>
