export const state = () => ({
    loading: false
})

export const mutations = {
    toggleLoading(state) {
        state.loading = !state.loading
    }
}