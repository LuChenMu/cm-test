<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { autoMath2 } from '../utils/MathUtils';
import { ExcelTool, isFunction } from '@fed-material/utils'
import { delayLoading } from '../utils/timeUtils';
const props = defineProps({
  onPush: {type: Function}
})
const list = ref<any>([])
const exportExcel = () => new ExcelTool([{
  sheetName: '表',
  sheetData: [...list.value]
}]).export(`10内加减_导出表格_${new Date()}`)

function resultTopic() {
  list.value = []
  for (let index = 0; index < 36; index++) {
    const element = [];
    for (let index = 0; index < 4; index++) {
      const data = autoMath2(10)
      element.push(data.mathTopic)
    }
    list.value.push(element)
  }
  exportExcel()
}
async function outPush(){
  await delayLoading()
  console.log(1)
}

async function push() {
  if(props.onPush && isFunction(props.onPush)){
    await outPush()
    await props.onPush('2')
    console.log('3')
  }
}
</script>
<template>
  <a-button @click="resultTopic">随机生成一页</a-button>
  <a-button @click="push">随机push一页</a-button>

</template>
