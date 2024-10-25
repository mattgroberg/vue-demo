<script setup lang='ts'>
import { authStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

const { isAuthenticated } = storeToRefs(authStore());
</script>
<template>
    <div class='Navbar'>
        <RouterLink to='/'>Home</RouterLink>
        <div class="endLinks">
            <RouterLink to='/profile' v-if="isAuthenticated">Profile</RouterLink>
            <RouterLink to='/login' v-else>Login</RouterLink>
        </div>
    </div>
</template>
<style scoped>
.Navbar {
    display: flex;
    justify-content: space-between;
    background-color: #333;
}

.endLinks {
    display: flex;
    gap: 1rem;
}

a {
    color: white;
    text-decoration: none;
    padding: 1rem;
}
</style>