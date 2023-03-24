<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- /pages 디렉토리 내에 있음 -->
          <NuxtLink to="/about">About</NuxtLink>
          <!-- Dynamic Routes -->
          <NuxtLink to="/posts/1">Post 1</NuxtLink>
          <NuxtLink to="/posts/2">Post 2</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
