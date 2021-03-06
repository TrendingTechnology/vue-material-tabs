import * as components from "@/lib-components/index";

const install = function installVueMaterialTabs(Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

export default install;

export * from "@/lib-components/index";
