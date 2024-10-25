<script setup lang='ts'>
import { ref } from 'vue';
import ContactList from '../ContactList/ContactList.vue';
import Spinner from '@/components/Icons/Spinner.vue';
import Alert from '@/components/shared/Alert/Alert.vue';
import { authStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

const { userInfo } = storeToRefs(authStore());
// const props = defineProps<{
//     user: User;
// }>();

const loading = ref(false);
const contacts = ref<Contact[]>([]);
const selectedContacts = ref<Contact[]>([]);
const editList = ref<Contact[]>([]);

const currentAlert = ref<{
    type: 'info' | 'warning' | 'error' | 'success';
    message: string;
} | null>(null);


function editContacts() {
    editList.value = selectedContacts.value.map((contact) => ({ ...contact }));
}

function deleteContacts() {
    contacts.value = contacts.value.filter((contact) => !selectedContacts.value.includes(contact));
    selectedContacts.value = [];
}

function addContact() {
    editList.value = [
        { id: 0, name: '', email: '' },
    ];
}

function saveEdits() {
    editList.value.forEach((editedContact) => {
        const index = contacts.value.findIndex(contact => contact.id === editedContact.id);
        if (index !== -1) {
            contacts.value[index] = editedContact;
        } else {
            contacts.value.push(editedContact);
        }
    });
    editList.value = [];
    selectedContacts.value = [];

}

function cancelEdits() {
    editList.value = [];
}

async function loadContacts() {
    loading.value = true;
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: LoadedContact[] = await res.json();
    if (res.ok) {
        contacts.value = data;
    } else {
        currentAlert.value = {
            type: 'error',
            message: 'Failed to load contacts',
        };
        console.error(data);
    }
    loading.value = false;
}

function setGreeting() {
    currentAlert.value = {
        type: 'info',
        message: `Welcome back, ${userInfo.value.name}!`,
    };
}

setGreeting();
loadContacts();
</script>
<template>
    <div class='ContactPage'>
        <Alert :message="currentAlert.message" :type="currentAlert.type" v-if="currentAlert" @close="currentAlert = null">
        </Alert>
        <Spinner class="spinner" v-if="loading" />
        <ContactList v-else :contacts="editList.length ? editList : contacts" v-model="selectedContacts" :editing="editList.length > 0">
            <div class="buttonRow">
                <template v-if="editList.length">
                    <button @click="saveEdits">Save</button>
                    <button @click="cancelEdits">Cancel</button>
                </template>
                <template v-else-if="selectedContacts.length">
                    <button @click="editContacts">Edit</button>
                    <button @click="deleteContacts">Delete</button>
                </template>
                <button v-else @click="addContact">Add Contact</button>
            </div>
        </ContactList>
    </div>
</template>
<style scoped>
.ContactPage {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
}

.spinner {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    animation: rotate 2s linear infinite;
}

button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.buttonRow {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>