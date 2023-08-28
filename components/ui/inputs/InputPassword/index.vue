<template>
    <BaseInput :type="typePassword" has-icon>
        <PasswordToggleButton
            v-model="isShowPassword"
            class="input__toggle-password"
            aria-label="toggle-password"
        />
    </BaseInput>
</template>

<script setup>
const isShowPassword = ref(false);
const typePassword = computed(() => isShowPassword.value ? 'text' : 'password');

</script>
