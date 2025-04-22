package:
	rm smoothcursorify.zip || true
	zip -r smoothcursorify.zip . -x .git/**
	zip -d smoothcursorify.zip .git/**
