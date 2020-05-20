### Table 表格
用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础表格
基础的表格展示用法。

<img :src="$withBase('/vol-table.png')" />

```vue
<template>
  <vol-table 
    ref="table"
    :moduleName="moduleName"
  ></vol-table>
</template>

<script>
  export default({
    data() {
      return {
        moduleName: '岗位管理'
      }
    }
  })
</script>
```

### Attributes
<template>
  <div>
    <h1>{{ a }}</h1>
    <test />
  </div>
</template>

<template>
  <div>
    <h1>{{ b }}</h1>
    <test />
  </div>
</template>

<script>
  export default({
    data() {
      return {
        a: 321,
        b: 987
      }
    }
  })
</script>

### Events


### 