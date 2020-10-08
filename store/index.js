export const state = () => ({
  currentuser: ""
})

export const mutations = {
  getCurrentuser(state, user) {
    state.currentuser = user
  }
}

export const actions = {
  getCurrentuser(context, user) {
    context.commit("getCurrentuser", user)
  }
}
