import services from './services'
import utils from './utils'
import constants from './constants'

export default {
    install: function (Vue) {
        Vue.prototype.service = services;
        Vue.prototype.tools = utils;
        Vue.prototype.constants = constants;
    }
};
