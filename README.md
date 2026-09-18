# 烏梅公演座位紀錄

用 Canva《烏梅座位表》做成的靜態網站：每人一個帳戶，點座位記下自己坐過哪一場公演。

適合部署到 **GitHub Pages**，不需要後端。帳戶與紀錄存在瀏覽器 `localStorage`，可用匯出／匯入 JSON 備份或換裝置。

## 本機執行

```bash
npm install
npm run dev
```

開啟 http://localhost:3000

## 部署到 GitHub Pages

1. 把這個專案推到 GitHub repo `TPE48-kouen-seats`。
2. Repo → **Settings** → **Pages** → Build and deployment 選 **GitHub Actions**。
3. 推送到 `main` 或 `master` 後，Actions 會自動建置並上線。
4. 網站網址會是：`https://<你的帳號>.github.io/TPE48-kouen-seats/`

## 使用方式

- 註冊／登入自己的帳戶
- 點座位圖上的位子，填公演日期與名稱
- 坐過的座位會變成綠色
- 用右上角「匯出」備份；換電腦時用「匯入」
