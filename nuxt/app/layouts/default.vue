<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Top</NuxtLink></li>
          <li><NuxtLink to="/development">Dev</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <slot />
    <footer>footer</footer>
  </div>
</template>
