<script setup lang='ts'>
const props = defineProps<{
    contact: Contact,
    editing?: boolean;
}>();
</script>
<template>
    <div class='Contact'>
        <div>{{ contact.name }}</div>
    </div>
</template>
<style>
.Contact {}
</style>