import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/bootstrap-b52c6177.mjs": {
    "type": "application/javascript",
    "etag": "\"19d56-KADY6KoDAeqVqRhoIIJv1ge1FGY\"",
    "mtime": "2022-03-23T10:13:21.132Z",
    "path": "../public/_nuxt/bootstrap-b52c6177.mjs"
  },
  "/_nuxt/entry-7da3edef.mjs": {
    "type": "application/javascript",
    "etag": "\"65-LSt9wJSPiPMfYeCuO5CWYDdl0hk\"",
    "mtime": "2022-03-23T10:13:21.132Z",
    "path": "../public/_nuxt/entry-7da3edef.mjs"
  },
  "/_nuxt/features-a40e0791.mjs": {
    "type": "application/javascript",
    "etag": "\"da5-RbvIyLvzGb4eW0XHyxZzUnw3+VE\"",
    "mtime": "2022-03-23T10:13:21.128Z",
    "path": "../public/_nuxt/features-a40e0791.mjs"
  },
  "/_nuxt/index-b83a1ddd.mjs": {
    "type": "application/javascript",
    "etag": "\"8e4-SMvS72EYRb1q9wuljLz4rip448E\"",
    "mtime": "2022-03-23T10:13:21.128Z",
    "path": "../public/_nuxt/index-b83a1ddd.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"336-qQHIQUwhgoc8QL1NNFuZzbu1z6Y\"",
    "mtime": "2022-03-23T10:13:21.128Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/assets/bootstrap.70b96f69.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b99-/qoSvumIqjCurO1cnMYs8CdvRKo\"",
    "mtime": "2022-03-23T10:13:21.136Z",
    "path": "../public/_nuxt/assets/bootstrap.70b96f69.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/home/kiiya/Code/ui-playground/dist" + "/" + "1648030394";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
