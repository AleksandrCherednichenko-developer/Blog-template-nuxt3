<template>
    <div
        ref="target"
        class="delete-confirm__buttons"
    >
        <transition name="fade-enter-transition" mode="in-out">
            <BaseButton
                v-if="!hasConfirmBtn"
                icon="delete"
                @click="toggleConfirmBtn(true)"
            />
        </transition>

        <transition name="fade-enter-transition" mode="in-out">
            <div v-if="hasConfirmBtn" class="confirm__buttons">
                <BaseButton
                    icon="apply"
                    class="apply-btn"
                    @click="clickApplyBtn()"
                />
                <BaseButton
                    icon="close"
                    class="cancel-btn"
                    @click="toggleConfirmBtn(false)"
                />
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core/index';

defineComponent({ name: 'DeleteConfirmButton' });

import { ref } from 'vue';

const emit = defineEmits(['apply-delete', 'cancel']);

const target = ref(null); // use for click outside
const hasConfirmBtn = ref(false);

const toggleConfirmBtn = (value: boolean) => {
    hasConfirmBtn.value = value ?? false;
};

const clickApplyBtn = () => {
    emit('apply-delete');
    toggleConfirmBtn(false);
};

onClickOutside(target, () => toggleConfirmBtn(false)); // use for click outside

</script>

<style src="./styles.scss" lang="scss" scoped />
