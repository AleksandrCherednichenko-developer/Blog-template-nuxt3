import mitt from 'mitt';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
    const emitter = mitt();

    return {
        provide: {
            emitter: {
                on: emitter.on,
                off: emitter.off,
                emit: emitter.emit,
            },
        },
    };
});
