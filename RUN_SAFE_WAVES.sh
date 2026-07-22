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

