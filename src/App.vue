<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark px-3">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="navbar_link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar_link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar_link" to="{name: 'Contact'}">Contacto</router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar_link" to="/blog/1">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar_link" to="/servicios">Experiencias</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li{
  padding-inline-end: 5px;
}
.navbar_link{
  color: #ffffff;
  text-decoration: none;
}

</style>
