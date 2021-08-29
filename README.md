# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

# (一) umi
#### (1) config
- 配置文件可以写在 ( `.umirc.ts`) 或者 ( `config/config.ts` ) 中，注意两者不要同时使用
- 如何做区分
  - 如果配置不复杂：使用 .umirc.ts
  - 如果配置很复杂：使用 config/config.js 中，可以对配置做拆分
    -  比如：config/config.js
    -  比如：config/routes.ts
- 优先级
  - .umirc.ts  >  config/config.js

#### (2) runtime config
- runtimeConfig 和 config 的区别是，runtimeConfig跑在浏览器端
- 按照惯例，`src/app.tsx` 为运行时配置
