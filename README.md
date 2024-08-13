## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Github flow

- main branch => Production
- develop branch => Develop
- feat/{xxx} => feat/layout-home-page

Github command

**Tạo nhánh mới**

```
$ git checkout -b feat/layout-home-page
```

**Hiển thị toàn bộ những file đã được thay đổi**

```cmd
$ git status
```

**Add toàn bộ file change trước khi commit code**

```cmd
$ git add .
or
$ git add ten_file
```

**Tạo một commit trước khi push code**

```cmd
$ git commit -m "mesage"
$ git commit -m "feat: css and make layout"
```

**Đẩy code lên Github**

```cmd
$ git push
or
$ git push -u origin branch name => $ git push -u origin feat/layout-home-page
```
