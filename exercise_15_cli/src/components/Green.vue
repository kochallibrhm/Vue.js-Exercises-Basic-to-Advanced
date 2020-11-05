<template>
    <div class="container">
        <slot name = "heading"></slot>
        <slot name="h4"></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: #aeffb2;
        padding: 30px;
        margin: 20px auto;
        border-radius: 25px;
        text-align: center;
    }
</style>