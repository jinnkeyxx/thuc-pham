import {WOW} from 'wowjs'

export const useWow = () => {
    const initWow = () => {
      const wow = new WOW.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: false,
          live: true,
          scrollContainer: null
        });
      wow.init();
    }

    return { initWow }
}