### Add Template

```
./add TEMPLATE-FILE-NAME --nouser
```

- TEMPLATE-FILE-NAME 模版文件名称，请遵循 `add-user-to-group` 这种形式。
- --nouser 如果带有，Pipeline 函数中将不带 user 参数。

### Build

```
yarn build
```

### Deploy

使用阿里云函数计算上传，需要

```
yarn deploy
```
