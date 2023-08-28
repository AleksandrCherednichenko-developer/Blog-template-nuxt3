<template>
    <label class="input__wrapper">
        <span
            v-if="props.labelTop"
            class="input__label"
        >
            {{ $t(props.labelTop) }}
        </span>

        <label class="input__inner">
            <input
                v-bind="attrs"
                :class="['input__field', {'error' : props.hasError, 'has-icon': props.hasError || props.ticker || props.hasIcon,}]"
                :value="props.modelValue"
                :type="props.type"
                :autofocus="props.focusOnMounted"
                :maxlength="props.maxLength"
                :placeholder="props.placeholder"
                @input="onInput"
                @focus="emit('focus')"
                @blur="emit('blur')"
            >

            <HintIcon
                v-if="props.hasError"
                role="alert"
                aria-label="alert"
                class="input__icon-error"
                icon="alert"
                :text="props.errorMsg"
            />

            <span
                v-if="props.ticker"
                v-show="!props.hasError"
                class="input__ticker"
                aria-label="input-ticker"
            >
                <span>{{ props.ticker }}</span>
            </span>

            <slot />
        </label>
    </label>
</template>

<script lang="ts" setup>
defineComponent({ name: 'BaseInput', inheritAttrs: true });

const attrs = useAttrs();
const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

interface Props {
    modelValue: string | number | null
    type?: string
    placeholder?: string
    focusOnMounted?: boolean
    maxLength?: number
    labelTop?: string
    hasIcon?: boolean
    hasError?: boolean
    errorMsg?: string
    ticker?: string
    inputNumber?: boolean
    integerNumber?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    type: 'text',
    placeholder: '',
    focusOnMounted: false,
    maxLength: 255,
    labelTop: '',
    hasIcon: false,
    hasError: false,
    errorMsg: '',
    ticker: '',
    inputNumber: false,
    integerNumber: false,
});

let timer:any;

const onInput = (ev:any) => {
    const { value } = ev.target;
    if (!props.inputNumber) return emit('update:modelValue', ev.target.value.trim());

    let newValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

    if (props.integerNumber) {
        newValue = value.replace(/[^0-9]/g, '');
    }
    if (newValue.startsWith('.')) {
        newValue = '0' + newValue;
    }

    ev.target.value = newValue;
    emit('update:modelValue', Number(newValue));

    clearTimeout(timer);
    timer = setTimeout(() => {
        if (newValue.endsWith('.')) {
            newValue = newValue.slice(0, -1);
            ev.target.value = newValue;
            emit('update:modelValue', Number(newValue));
        }
    }, 2000);
};
</script>

<style src="./styles.scss" lang="scss" scoped />
