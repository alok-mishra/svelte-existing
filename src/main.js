import App from './App.svelte';

/*
const app = new App({
    target: document.body,
    props: {
        name: 'world',
    },
});
*/

const app = (component, props) => {
    new App({
        target: document.body,
        props: {
            name: attempts,
        },
    });
};

export default app;

// export default function (target, props) {
//     new App({
//         target,
//         props,
//     });
// }

// export default function (target, props) {
//     new App({
//         target,
//         props,
//     });
// }
