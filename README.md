# 烏梅公演座位紀錄

用 Canva《烏梅座位表》做成的靜態網站：每人一個帳戶，點座位記下自己坐過哪一場公演。

適合部署到 **GitHub Pages**，不需要後端。可用 **Google 登入** 或帳號密碼。座位紀錄存在瀏覽器 `localStorage`，並綁在登入的帳戶上；換裝置請用匯出／匯入 JSON。

## 本機執行

```bash
npm install
npm run dev
```

開啟 http://localhost:3000

### 開啟 Google 登入

1. 到 [Google Cloud Console](https://console.cloud.google.com/apis/credentials) 建立 **OAuth 用戶端 ID**（應用程式類型選「網頁應用程式」）。
2. **已授權的 JavaScript 來源** 加上：
   - `http://localhost:3000`
   - `https://kawing0810.github.io`
3. 本機在專案根目錄建立 `.env.local`：

```
NEXT_PUBLIC_GOOGLE_CLIENT_ID=你的Client_ID.apps.googleusercontent.com
```

4. 線上版到 GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **Variables**，新增 `NEXT_PUBLIC_GOOGLE_CLIENT_ID`，然後重新部署。

## 部署到 GitHub Pages

1. 把這個專案推到 GitHub repo `TPE48-kouen-seats`。
2. Repo → **Settings** → **Pages** → Build and deployment 選 **GitHub Actions**。
3. 推送到 `main` 或 `master` 後，Actions 會自動建置並上線。
4. 網站網址會是：`https://<你的帳號>.github.io/TPE48-kouen-seats/`

## 使用方式

- 註冊／登入自己的帳戶
- 在「座位備忘」點位子，填公演名、活動日期時間、組別／隊伍後儲存
- 已保存的場次在「保存紀錄」分頁分開查看
- 坐過的座位會變成綠色
- 用右上角「匯出」備份；換電腦時用「匯入」
