#!/usr/bin/env bash
set -euo pipefail

cat > open-next.config.ts <<'EOF'
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({});
EOF

npx @opennextjs/cloudflare@1.19.11 build
