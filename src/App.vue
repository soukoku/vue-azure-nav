<template>
  <div class="w-screen h-screen flex flex-col overflow-hidden">
    <nav class="flex-none flex items-center h-10 bg-blue-800 text-blue-100">
      Top navigation
    </nav>
    <div class="flex-auto flex overflow-hidden">
      <nav
        class="flex-none flex flex-col items-center bg-blue-900 text-blue-100"
      >
        Side nav
      </nav>
      <blade-track>
        <blade>Blade 1</blade>
        <blade>Blade 2</blade>
        <blade>Blade 3</blade>
        <blade>Blade 4</blade>
        <blade>Blade 5</blade>
        <blade>Blade 6</blade>
      </blade-track>
    </div>
  </div>
</template>
<script>
import BladeTrack from '@/components/BladeTrack'
import Blade from '@/components/Blade'
export default {
  components: {
    BladeTrack,
    Blade
  }
}
</script>
