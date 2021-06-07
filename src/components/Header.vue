<template>
  <header id="header" class="bg-gray-700">
    <nav class="container flex items-center justify-start px-4 py-5 mx-auto">
      <a class="mr-4 text-2xl font-bold text-white uppercase" href="#">Music</a>
      <div class="flex items-center flex-grow">
        <ul class="flex flex-row mt-1">
          <li v-if="!userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signout"
                >Logout</a
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState(['userLoggedIn']),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
    ...mapActions(['signout']),
  },
};
</script>

<style></style>
