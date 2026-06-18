// Static server for the built Storybook, gated behind HTTP Basic Auth.
//
// Credentials come from environment variables so the password never lives in the
// repo. On Heroku set:
//   BASIC_AUTH_USER, BASIC_AUTH_PASSWORD
// If either is unset (e.g. local dev), the site is served without auth.
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { timingSafeEqual } from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATIC_DIR = path.join(__dirname, "storybook-static");
const PORT = process.env.PORT || 6006;

const USER = process.env.BASIC_AUTH_USER;
const PASS = process.env.BASIC_AUTH_PASSWORD;

const app = express();
app.disable("x-powered-by");

function safeEqual(a, b) {
  const ab = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

if (USER && PASS) {
  app.use((req, res, next) => {
    const header = req.headers.authorization || "";
    const [scheme, encoded] = header.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString("utf8");
      const sep = decoded.indexOf(":");
      const user = decoded.slice(0, sep);
      const pass = decoded.slice(sep + 1);
      // Compare both fields (timing-safe) so neither short-circuits early.
      if (safeEqual(user, USER) & safeEqual(pass, PASS)) return next();
    }
    res.set("WWW-Authenticate", 'Basic realm="Carbon Design System", charset="UTF-8"');
    return res.status(401).send("Authentication required.");
  });
} else {
  console.warn("BASIC_AUTH_USER/PASSWORD not set — serving without authentication.");
}

app.use(express.static(STATIC_DIR));
// SPA-style fallback so any deep link resolves to the Storybook shell.
app.get("*", (_req, res) => res.sendFile(path.join(STATIC_DIR, "index.html")));

app.listen(PORT, () => console.log(`Carbon Design System listening on ${PORT}`));
