<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/32824e7f-379a-429f-b3ad-17ba22276883

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy no GitHub Pages

1. Envie o projeto para o GitHub com a branch `main`.
2. No repositório, abra `Settings > Pages`.
3. Em `Source`, selecione `GitHub Actions`.
4. Faça um push na `main` ou rode manualmente o workflow `Deploy to GitHub Pages`.

O build agora detecta automaticamente o nome do repositório no GitHub Actions e publica com o `base` correto para Pages.
