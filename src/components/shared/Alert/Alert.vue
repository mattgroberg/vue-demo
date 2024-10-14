<script setup lang='ts'>
import Xmark from '@/components/Icons/Xmark.vue';
const props = defineProps<{
    type?: 'info' | 'warning' | 'error' | 'success';
    message?: string;
}>();

const emit = defineEmits<{
    (e: 'close'): void,
}>();
</script>
<template>
    <div class='Alert' :class="type">
        <slot> {{ message }} </slot>
        <Xmark class="closeIcon" @click="emit('close')" />
    </div>
</template>
<style scoped>
.Alert {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    border: 1px solid currentColor;
    padding: 10px;
    border-radius: 5px;
    background: #E0F7FF;
    color: #099BDD;
    /* background: #099BDD; */
    /* color: white; */
    width: 100%;
    position: relative;
}

.warning {
    color: #FFB347;
    /* Softer orange */
    background: #FFF8DC;
    /* Softer yellow */
}

.error {
    color: #E57373;
    /* Softer red */
    background: #FFEBEE;
    /* Softer pink */
}

.success {
    color: #81C784;
    /* Softer green */
    background: #E8F5E9;
    /* Softer light green */
}

.closeIcon {
    cursor: pointer;
    fill: currentColor;
    height: 20px;
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>