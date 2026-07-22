#!/data/data/com.termux/files/usr/bin/bash

echo "Running FHI tests"

python engine/event_bus.py

python engine/health.py

echo "Tests complete"
