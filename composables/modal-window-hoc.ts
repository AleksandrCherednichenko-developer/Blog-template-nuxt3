import { h, reactive, ref, Transition } from 'vue';
import { useNuxtApp } from '#app';

interface EmitterEvent {
    force?: boolean;
    [key: string]: any;
}

interface Emits {
    [key: string]: any;
}

export function modalWindowHoc (Component: any, emitterEventName: string, emits: Emits | null = null) {
    return {
        setup () {
            const { $emitter } = useNuxtApp();
            const isOpen = ref(false);
            const eventProps = reactive({});

            const toggle = (force?: boolean) => {
                isOpen.value = force ?? !isOpen.value;
            };

            $emitter.on(emitterEventName, ({ force, ...payload }: EmitterEvent) => {
                toggle(force);
                Object.entries(payload).forEach(([key, value]) => {
                    eventProps[key] = value;
                });
            });

            return () => h(Transition,
                { name: 'modal-window' },
                () => [
                    isOpen.value
                        ? h(Component, { ...eventProps, onClose: () => toggle(false), ...emits })
                        : '',
                ],
            );
        },
    };
}
