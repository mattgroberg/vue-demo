<script setup lang='ts'>
import { authStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const { userInfo } = storeToRefs(authStore());
function handleLogout() {
    userInfo.value = {
        name: "",
        id: 0
    };
    sessionStorage.removeItem("userInfo");
    router.push("/");
}
</script>
<template>
    <div class='Profile'>
        <h1>Hello, {{ userInfo.name }}!</h1>
        <div class="links">
            <RouterLink to="/profile/contacts">Contacts</RouterLink>
        </div>
        <button @click="handleLogout">Log out</button>
        <RouterView />
    </div>
</template>
<style scoped>
.Profile {}
</style>