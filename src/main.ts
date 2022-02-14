import App from './App.svelte';
import Attempts from './Attempts.svelte';

const app = {
    App: name => {
        new App({
            target: document.body,
            props: {
                name,
            },
        });
    },

    Attempts: attempts => {
        new Attempts({
            target: document.body,
            props: {
                attempts,
            },
        });
    },
};

export default app;

/*
const app = (component, props) => {
    new App({
        target: document.body,
        props: {
            name: attempts,
        },
    });
};
*/

/*
const app = new App({
    target: document.body,
    props: {
        name: 'world',
    },
});
*/
