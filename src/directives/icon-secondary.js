export default {
  beforeMount(el, binding) {
    let iconClass = `text-xl text-green-400 fa fa-${binding.value.icon}`;

    if (binding.value.right) {
      iconClass += ' float-right';
    }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
