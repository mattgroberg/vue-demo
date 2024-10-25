import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const authStore = defineStore('authStore', () => {
    const userInfo = ref({ name: "", id: 0 });

    const isAuthenticated = computed(() => userInfo.value.id !== 0);

    function loadFromStorage() {
        const data = sessionStorage.getItem("userInfo");
        if (data) {
            userInfo.value = JSON.parse(data);
        }
    }

    loadFromStorage();
    return {
        userInfo, isAuthenticated
    };
});
