<template>
  <div>
    <h2>Action modal</h2>
    <component :is="target" v-events="events" :item="item" />
  </div>
</template>

<script>
export default {
  components: {},

  directives: {
    // manage modal custom events
    Events: {
      bind: function(el, binding, vnode) {
        const allEvents = binding.value;
        if (!allEvents) return;

        allEvents.forEach(event => {
          // register handler in the dynamic component
          vnode.componentInstance.$on(event, eventArgs => {
            // when the event is fired, the proxyEvent function is going to be called
            vnode.context.proxyEventHandler(event, eventArgs);
          });
        });
      },
      unbind: function(el, binding, vnode) {
        vnode.componentInstance.$off();
      }
    }
  },

  components: {},
  props: {
    target: {
      type: String,
      default: null
    },
    item: {
      type: Object,
      default: undefined
    },
    events: {
      type: Array,
      default: undefined
    }
  },

  methods: {
    proxyEventHandler(eventName, eventArgs) {
      //utils.log("proxyEvent -> " + eventName);

      // relay the modal event
      this.$emit("app:onActionModalCustomEvent", {
        eventName: eventName,
        args: eventArgs
      });
    }
  }
};
</script>
