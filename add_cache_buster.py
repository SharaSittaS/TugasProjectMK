import os
import glob

html_files = glob.glob('d:/Modul Visualisasi Data/uas visdat/TugasProjectMK/*.html')

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace .css" with .css?v=2"
    content = content.replace('.css"', '.css?v=2"')
    # Also handle single quotes if any
    content = content.replace(".css'", ".css?v=2'")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated {len(html_files)} HTML files with cache buster.")
