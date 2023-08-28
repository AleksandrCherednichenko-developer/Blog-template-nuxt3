<template>
    <BackgroundBlock>
        <form
            ref="target"
            class="modal-form"
            @submit.prevent="submitData"
            @keydown.enter="submitData"
        >
            <div class="modal-form__header">
                <h5 class="title">
                    {{ props.title }}
                </h5>
                <BaseButton
                    class="modal-form__button-close"
                    icon="close"
                    disabled-hover
                    @click="closeModal"
                />
            </div>
            <div class="modal-form__content">
                <slot name="modal-content" />
            </div>
            <div class="modal-form__control">
                <BaseButton
                    v-if="props.buttonText"
                    type="submit"
                    :text="props.buttonText"
                />
            </div>
        </form>
    </BackgroundBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

interface Props {
    title?: string
    buttonText?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    buttonText: '',
});

const emit = defineEmits(['close', 'submit', 'delete']);

const target = ref(null); // use for click outside

const closeModal = () => {
    emit('close');
};

const submitData = () => {
    emit('submit');
    closeModal();
};

onClickOutside(target, () => closeModal()); // use for click outside
</script>

<style src="./styles.scss" lang="scss" scoped />
