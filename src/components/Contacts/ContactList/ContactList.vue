<script setup lang='ts'>
import { computed, ref } from 'vue';
import Contact from '../Contact/Contact.vue';
const props = defineProps<{
    contacts: Contact[];
    editing: boolean;
}>();

const searchFilter = ref('');

const filteredContacts = computed(() => {
    return props.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(searchFilter.value.toLowerCase());
    });
});

const selectedContacts = defineModel<Contact[]>({ required: true });

function toggleContact(contact: Contact) {
    if (props.editing) {
        return;
    }
    if (selectedContacts.value.includes(contact)) {
        selectedContacts.value = selectedContacts.value.filter((c) => c !== contact);
    } else {
        selectedContacts.value = [...selectedContacts.value, contact];
    }
}
</script>
<template>
    <div class='ContactList'>
        <div class="headerArea">
            <input class="searchFilter" type="text" placeholder="Search" v-model="searchFilter" />
            <slot></slot>
        </div>
        <div class="listWrapper">
            <Contact @click="toggleContact(contact)" :class="{ selected: selectedContacts.includes(contact) }" v-for="contact in filteredContacts" :key="contact.id" :modelValue="contact" :editing="editing" />
        </div>
    </div>
</template>
<style scoped>
.ContactList {}

.headerArea {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
}

input {
    flex: 1;
}

.searchFilter {
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    width: 200px;
}

.listWrapper {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.Contact {
    cursor: pointer;
}

.Contact.selected {
    border: 4px solid black;
}
</style>