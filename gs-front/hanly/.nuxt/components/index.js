export { default as BaseButton } from '../../components/BaseButton.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as SimpleForm } from '../../components/SimpleForm.vue'

export const LazyBaseButton = import('../../components/BaseButton.vue' /* webpackChunkName: "components/BaseButton" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazySimpleForm = import('../../components/SimpleForm.vue' /* webpackChunkName: "components/SimpleForm" */).then(c => c.default || c)
