
Давайте перевіримо та виправимо ваш код. Спочатку розглянемо компоненти, а потім розглянемо App.vue, router/index.js та main.js.

Компоненти у views папці:

Home.vue:

vue
Copy code
<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is the home page content...</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
</style>
About.vue:

vue
Copy code
<template>
  <div>
    <h1>About Us</h1>
    <p>Welcome to our company's About Us page...</p>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
</style>
Contact.vue:

vue
Copy code
<template>
  <div>
    <h1>Contact Us</h1>
    <p>Feel free to contact us using the information below:</p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
</style>
Registration.vue:

vue
Copy code
<template>
  <div>
    <h1>User Registration</h1>
    <p>Register to access exclusive features...</p>
  </div>
</template>

<script>
export default {
  name: 'Registration',
};
</script>

<style scoped>
</style>
Компонент App.vue:

vue
Copy code
<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/registration">Registration</router-link>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
