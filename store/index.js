export const state = () => ({
  currentuser: "",
  day: ""
})

export const mutations = {
  getCurrentuser(state, user) {
    state.currentuser = user
  },
  getDay(state, day) {
    state.day = day
  }
}

export const actions = {
  getCurrentuser(context, user) {
    context.commit("getCurrentuser", user)
  },
  getDay(context, day) {
    context.commit("getDay", day)
  }
}
