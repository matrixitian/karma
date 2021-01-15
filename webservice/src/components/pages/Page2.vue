<template>
  <div id="pageTwo">
      <div id="job">
          <div id="job_sentence">
              <p>Job sentence</p>
          </div>
          <div id="job_selector">
            <Select :list="['MIT', 'Hardvard', 'Oxford',
            'MIT', 'Hardvard', 'Oxford',
            'MIT', 'Hardvard', 'Oxford',
            'MIT', 'Hardvard', 'Oxford',
            'MIT', 'Hardvard', 'Oxford',
            'MIT', 'Hardvard', 'Oxford',
            'MIT', 'Hardvard', 'Oxford',
            'MIT', 'Hardvard', 'Oxford']" />
          </div>
      </div>
  </div>
</template>

<script>
import Select from '@/components/parts/Select'

export default {
    components: {
        Select
    }
}
</script>

<style>
#job_selector {
    margin-left: 50px;
}
</style>