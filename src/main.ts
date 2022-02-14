import App from './App.svelte';

const app = {};
app.App = props => {
    new App({
        target: document.body,
        props: {
            name: props,
        },
    });
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
