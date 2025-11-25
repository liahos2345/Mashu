# Mashu — Lost Cat Page

Small static site to help find Mashu. This repository contains a single-page site (`index.html`), styles (`styles.css`), and client-side logic (`script.js`).

## Quick deploy to GitHub Pages (PowerShell)

Open PowerShell in this folder (`c:\Users\sp4\Desktop\cat`) and follow one of the options below.

Option A — Automatic (requires GitHub CLI `gh`):

```powershell
# create repo, push and set remote (requires you are logged in with gh auth)
.\deploy.ps1 -RepoName cat -Visibility public
```

`deploy.ps1` will initialize git (if needed), commit files, and attempt to create and push the repository using the authenticated GitHub CLI account. After the push you still need to enable GitHub Pages (Settings -> Pages) or run `gh` pages commands.

Option B — Manual (no `gh`):

```powershell
# initialize and push
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<YOUR_USER>/<REPO>.git
git push -u origin main
```

Then enable GitHub Pages in repository Settings -> Pages (choose `main` branch / root). Your site URL will be:

```
https://<your-github-username>.github.io/<repo>/
```

## Generate a QR code (PowerShell)

After you have the public URL, create a QR PNG with `generate-qr.ps1`:

```powershell
.\generate-qr.ps1 -Url "https://<your-github-username>.github.io/<repo>/" -Out "qr-mashu.png" -Size 400
```

This downloads a PNG (`qr-mashu.png`) into the project folder. Print or share the PNG; scanning it opens the site URL.

## Notes & security
- Both scripts require `git`. `deploy.ps1` optionally uses `gh` if installed and authenticated — I do not store credentials in the repo; you run `gh auth login` locally if needed.
- If you want me to push the repo for you I can prepare the push commands, but I cannot perform the push without your `gh` authentication on this machine. For security, run the scripts locally.

## Next steps I can help with
- Make the carousel paging adaptive (mobile/tablet JS behavior).
- Automatically enable Pages via `gh` API (if you authenticate and want me to add the exact `gh` commands).
- Generate the QR for your final public URL once you provide it.

If you'd like, tell me your GitHub username and I will provide the exact `gh` command strings you can paste into PowerShell (or run `deploy.ps1` yourself). 
