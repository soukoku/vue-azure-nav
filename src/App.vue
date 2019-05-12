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
      <div
        class="blade-track flex-auto flex items-strech overflow-y-none overflow-x-scroll"
      >
        <div class="blade flex-none border-r border-blue-800 w-64">Blade 1</div>
        <div class="blade flex-none border-r border-blue-800 w-64">Blade 2</div>
        <div class="blade flex-none border-r border-blue-800 w-64">Blade 3</div>
        <div class="blade flex-none border-r border-blue-800 w-64">Blade 4</div>
        <div class="blade flex-none border-r border-blue-800 w-64">Blade 5</div>
        <div class="blade flex-none border-r border-blue-800 w-64">Blade 6</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
