# HTML Element Reference

A categorized, searchable reference covering 95 HTML elements across 9 categories — document metadata, sectioning, text, lists, inline semantics, forms, tables, media, and scripting. Each entry shows the syntax, common attributes, and a live preview rendered directly by the browser.

## Files

- `index.html` — main page
- `style.css` — styling (dark theme)
- `data.js` — the element reference data
- `app.js` — renders the cards, search/filter, and scroll-spy nav

No build step or dependencies — pure HTML/CSS/JS.

## Cara upload ke GitHub

**Lewat browser (paling gampang):**
1. Buat repo baru di GitHub (jangan centang "Add a README" biar gak conflict).
2. Di halaman repo, klik **Add file → Upload files**.
3. Drag semua isi folder ini (`index.html`, `style.css`, `data.js`, `app.js`, `README.md`).
4. Commit.

**Lewat git (kalau udah punya repo lokal):**
```bash
git init
git add .
git commit -m "Add HTML element reference"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

## Aktifin GitHub Pages (biar bisa diakses online)

1. Di repo, masuk **Settings → Pages**.
2. Di "Branch", pilih `main` dan folder `/ (root)`.
3. Save. Tunggu sebentar, link-nya muncul di bagian atas (formatnya `https://USERNAME.github.io/REPO/`).

## Nambah elemen baru

Tinggal edit `data.js` — tambahin object baru di array `elements` pada kategori yang sesuai:

```js
{ tag: "namatag", desc: "Deskripsi singkat.", syntax: "<namatag>...</namatag>", attrs: "atribut1, atribut2", demo: "<namatag>preview</namatag>" }
```

Tambahin `void: true` kalau tag-nya self-closing (kayak `<img>`, `<br>`, `<input>`).
