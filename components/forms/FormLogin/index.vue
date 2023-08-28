<template>
    <form class="form__login" @submit.prevent="submitData">
        <h4 class="title">
            {{ $t('welcome') }}
        </h4>
        <BaseInput v-model="data.login" label-top="login" />
        <InputPassword v-model="data.password" label-top="password" />
        <BaseButton :text="$t('logIn')" type="submit" :disabled="validate" />
    </form>
</template>

<script setup lang="ts">
import { BodyLogin } from '@/interfaces/requests-interfaces';
import { useAuthStore } from '@/store/auth-store';

const authStore = useAuthStore();

const data = reactive<BodyLogin>({
    login: '',
    password: '',
});

const validate = computed(() => {
    return !(data.login.length && data.password.length);
});

const submitData = async () => {
    await authStore.logIn(data);
};

defineComponent({ name: 'FormLogin' });
</script>

<style src="./styles.scss" lang="scss" scoped />
