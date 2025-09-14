#!/bin/bash

# Create resize directory if it doesn't exist
mkdir -p resized

# Define target widths and output formats
widths=(480 800 1200 1920 2560)
formats=("jpg" "webp")

# Loop through all image files in current directory
for image in *.{jpg,jpeg,png,webp,tiff,bmp,gif}; do
    # Skip if no files match the pattern
    [[ ! -e "$image" ]] && continue
    
    # Get filename without extension
    filename="${image%.*}"
    
    echo "Processing: $image"
    
    # Resize to each target width and convert to each format
    for width in "${widths[@]}"; do
        for format in "${formats[@]}"; do
            output="resized/${filename}-${width}w.${format}"
            
            # Resize maintaining aspect ratio, only if image is wider than target
            magick "$image" -resize "${width}x>" "$output"
            
            echo "  Created: $output"
        done
    done
done

echo "Batch resize and conversion complete!"