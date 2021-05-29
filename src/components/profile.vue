<template>
  <div class="container">
    <h1>My Profile</h1>
    <p>
      Name : {{ name }} <br />Nick name : {{ n_name }}<br />
      Age : {{ Age }} <br />Skill : {{ skill }}<br />Language&Tools : {{ tool }}
    </p>
  </div>
  <div class="container">
    <h2>
      <router-link :to="{ name: 'Home' }"> Menu </router-link>
      &nbsp;&nbsp;<router-link :to="{ name: 'contact' }"> Contact </router-link>
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Thanapol Pasokpakdee",
      n_name: "Guy",
      Age: "22",
      skill: "time management / teamwork / positivity",
      tool: "R / SQL / PYTHON / JAVA / C# / PHP /// POWER BI / MATLAB ",
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
