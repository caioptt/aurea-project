import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#E61C20',
                secondary: '#800000',
                accent: '#5C5D5C',
                error: '#B40431',
            },
        },
    },

    icons: {
        iconfont: 'mdiSvg',
    },
});
