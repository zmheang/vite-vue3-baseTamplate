<template>
  <div>finance</div>
</template>

<script>
import { getAllFund } from "@/api/finance";
export default {
  name: "finance-1",
  mounted() {
    console.log(3);
    this.getAllFund();
  },
  methods: {
    async getAllFund() {
      let res = await getAllFund();
      console.log(res);
      // },
    },
  },
};
</script>

<style scoped>
</style>
