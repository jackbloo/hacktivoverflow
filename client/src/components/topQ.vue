<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Question</th>
        <th class="text-left">Votes</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(a,i) in top10" :key="i">
        <td>{{a.question}}</td>
        <td>{{a.vote}}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
import { mapState } from 'vuex';
  export default {
      computed: mapState(['top10']),
    data () {
      return {
      }
    },
  }
</script>