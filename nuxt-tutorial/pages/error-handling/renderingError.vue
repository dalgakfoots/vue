<template>
  <NuxtErrorBoundary>
    <template #error="{ error }">
      YOU CAN DISPLAY THE ERROR LOCALLY HERE
    </template>
    <button @click="error = null">this will clear the error</button>
  </NuxtErrorBoundary>
</template>
