<script setup lang='ts'>
import UserIcon from '@/components/Icons/UserIcon.vue';
const props = defineProps<{
    editing?: boolean;
}>();
const contact = defineModel<Contact>("modelValue", { required: true });
</script>
<template>
    <div class='Contact'>
        <UserIcon />
        <div class="text">
            <template v-if="editing">
                <input type="text" v-model="contact.name" placeholder="Name">
                <input type="text" v-model="contact.email" placeholder="Email">
            </template>
            <template v-else>
                <div><strong>{{ contact.name }}</strong></div>
                <div>{{ contact.email }}</div>
            </template>
        </div>
    </div>
</template>
<style scoped>
.Contact {
    font-family: 'Courier New', Courier, monospace;
    display: inline-flex;
    justify-items: flex-start;
    gap: 1rem;
    border: 4px solid transparent;
    padding: 10px;
    border-radius: 5px;
    background: #099BDD;
    color: white;
    min-height: 66px;
    min-width: 253px;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 0.25rem;
}

svg {
    height: 60px;
    fill: white;
}

input {
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: none;
}
</style>