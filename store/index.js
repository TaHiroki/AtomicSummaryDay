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
  },
  changeName(state, name) {
    state.currentuser = name
  }
}

export const actions = {
  getCurrentuser(context, user) {
    context.commit("getCurrentuser", user)
  },
  getDay(context, day) {
    context.commit("getDay", day)
  },
  changeName(context, name) {
    context.commit("changeName", name)
  }
}
