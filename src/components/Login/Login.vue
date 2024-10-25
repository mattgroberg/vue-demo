<script setup lang='ts'>
import { ref } from 'vue';
import { authStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const { userInfo } = storeToRefs(authStore());

const loginRequest = ref({
    name: "",
    password: "",
});

function handleLogin() {
    userInfo.value = ({
        name: "John Doe",
        id: 1
    });

    sessionStorage.setItem("userInfo", JSON.stringify(userInfo.value));

    router.push("/profile");
}
</script>
<template>
    <div class='Login'>
        <div class="loginForm">
            <input type="text" v-model="loginRequest.name" placeholder="Name" />
            <input type="password" v-model="loginRequest.password" placeholder="Password" />
            <button @click="handleLogin">Login</button>
        </div>
    </div>
</template>
<style scoped>
.Login {
    display: flex;
    justify-content: center;
}

.loginForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
}

input {
    padding: 0.5rem;
    border-radius: 0.25rem;
}
</style>