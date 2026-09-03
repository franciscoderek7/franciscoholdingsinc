#!/data/data/com.termux/files/usr/bin/bash
set -e

cd "$(dirname "$0")"

echo "============================================================"
echo "FHI EXECUTIVE WAR ROOM v0.2"
echo "============================================================"
echo "LOCAL ONLY"
echo "NO PAYMENT ACCESS"
echo "NO CREDENTIAL ACCESS"
echo "NO PRODUCTION ACCESS"
echo "NO DEPLOYMENT"
echo "NO AUTONOMOUS EXECUTION"
echo ""
echo "Open:"
echo "http://127.0.0.1:8787"
echo ""
echo "Press CTRL-C to stop."
echo "============================================================"

exec node server.js
