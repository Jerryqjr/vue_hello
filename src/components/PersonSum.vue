<template>
  <div class="person">
    {{ person.name }}
  </div>
</template>

<script lang="ts" setup name="Person">
import type { PersonInter, Persons } from "@/types/index"

//let personList: PersonInter = { id: "123456789", name: "Jerry", age: 18 }

let personList: Array<PersonInter> = [
  { id: "123456789", name: "Jerry", age: 18 },
  { id: "123456789", name: "Jerry", age: 18 },
  { id: "123456789", name: "Jerry", age: 18 },
]
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
