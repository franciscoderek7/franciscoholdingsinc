#!/data/data/com.termux/files/usr/bin/bash

set -e

echo "====================================="
echo "FHI TERMUX STABILIZER WAVE 16"
echo "ENVIRONMENT OPTIMIZATION"
echo "====================================="

mkdir -p \
logs \
backups \
reports/system \
tmp


echo "[1] System information"

{
echo "DATE:"
date

echo ""
echo "DIRECTORY:"
pwd

echo ""
echo "MEMORY:"
free -h 2>/dev/null || true

echo ""
echo "DISK:"
df -h

} > reports/system/environment.txt


echo "[2] Cleaning temporary files"

rm -rf tmp/* 2>/dev/null || true


echo "[3] Checking Python"

python --version \
> reports/system/python.txt 2>&1 || true


echo "[4] Checking Node"

node --version \
> reports/system/node.txt 2>&1 || true


echo "[5] Checking Git"

git status \
> reports/system/git_status.txt 2>&1 || true


echo "[6] Creating safe launcher"

cat > RUN_SAFE_WAVES.sh <<'RUN'
#!/data/data/com.termux/files/usr/bin/bash

echo "Safe FHI Wave Runner"

for FILE in "$@"
do

if [ -f "$FILE" ]
then

echo "Starting:"
echo "$FILE"

bash "$FILE"

echo "Completed:"
echo "$FILE"

else

echo "Missing:"
echo "$FILE"

fi

done

echo "All requested waves complete"

RUN

chmod +x RUN_SAFE_WAVES.sh


echo "[7] Creating backup point"

git add . || true

git commit \
-m "FHI Termux Stabilization Wave 16" \
|| true


echo "====================================="
echo "STABILIZATION COMPLETE"
echo "====================================="

