const fs = require('fs');
const path = require('path');

// Create a minimal routes-manifest.json for Cloudflare Pages
const routesManifest = {
  version: 3,
  pages404: true,
  basePath: "",
  redirects: [],
  rewrites: [],
  headers: [],
  dynamicRoutes: [],
  staticRoutes: [
    {
      page: "/",
      regex: "^/$",
      routeKeys: {},
      namedRegex: "^/$"
    },
    {
      page: "/locations/burleigh",
      regex: "^/locations/burleigh$",
      routeKeys: {},
      namedRegex: "^/locations/burleigh$"
    }
  ],
  dataRoutes: [],
  i18n: null
};

const outDir = path.join(process.cwd(), 'out');
const manifestPath = path.join(outDir, 'routes-manifest.json');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Write the manifest
fs.writeFileSync(manifestPath, JSON.stringify(routesManifest, null, 2));
console.log('Created routes-manifest.json for Cloudflare Pages'); 