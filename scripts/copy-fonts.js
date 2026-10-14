// 빌드 전에 npm 패키지(@fontsource)에서 게임 글꼴을 www/fonts 로 복사합니다 (오프라인 실행용).
const fs = require("fs"), path = require("path");
const map = { jua: "jua", "black-han-sans": "bhs", "lilita-one": "lilita" };
for (const [pkg, dst] of Object.entries(map)) {
  const src = path.join(__dirname, "..", "node_modules", "@fontsource", pkg);
  const out = path.join(__dirname, "..", "www", "fonts", dst);
  fs.mkdirSync(path.join(out, "files"), { recursive: true });
  for (const f of fs.readdirSync(path.join(src, "files")))
    if (f.endsWith(".woff2")) fs.copyFileSync(path.join(src, "files", f), path.join(out, "files", f));
  const css = fs.readFileSync(path.join(src, "index.css"), "utf8").replace(/, url\([^)]*\.woff\) format\('woff'\)/g, "");
  fs.writeFileSync(path.join(out, "index.css"), css);
}
console.log("fonts copied");
