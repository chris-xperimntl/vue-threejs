<script setup lang="ts">
const props = defineProps<{
  id: string
  tests?: boolean
}>()
</script>

<template>
  <div class="codesandbox-embed">
    <iframe
      :src="`https://codesandbox.io/embed/${props.id}?fontsize=14&hidenavigation=1&theme=dark${
        props.tests ? '&previewwindow=tests' : ''
      }`"
      style="width: 100%; height: 500px; border: 0; border-radius: 4px; overflow: hidden"
      allow="
        accelerometer;
        ambient-light-sensor;
        camera;
        encrypted-media;
        geolocation;
        gyroscope;
        hid;
        microphone;
        midi;
        payment;
        usb;
        vr;
        xr-spatial-tracking;
      "
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      loading="lazy" />
  </div>
</template>
