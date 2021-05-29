<template>
  <div class="container">
    <h1>My Contact</h1>
    <p>
      TEL : {{ tel }} <br />
      E-mail : {{ mail }}
    </p>
  </div>
  <div class="container">
    <h2>
      <router-link :to="{ name: 'Home' }"> Menu </router-link>
      &nbsp;&nbsp;<router-link :to="{ name: 'profile' }"> Profile </router-link>
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "090-565-3795",
      mail: "pa.thanapol_st@tni.ac.th",
    };
  },
};
</script>

<style scoped>
h1 {
  margin: 40px 0 40px;
  text-align: center;
}
p {
  margin: 40px 0 0 40px;
}
h2 {
  margin: 40px 0 40px 0;
  text-align: center;
}
</style>>