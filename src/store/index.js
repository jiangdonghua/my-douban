import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/activities'
import book from './modules/book'
import group from './modules/group'
import movie from './modules/movie'
import search from './modules/search'
import subject from './modules/subject'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    activities,
    book,
    group,
    movie,
    search,
    subject,
    user
  }
})
