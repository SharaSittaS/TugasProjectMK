import glob

html_files = glob.glob('d:/Modul Visualisasi Data/uas visdat/TugasProjectMK/*.html')

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace ?v=5 with ?v=6
    content = content.replace('?v=5"', '?v=6"')
    content = content.replace("?v=5'", "?v=6'")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated {len(html_files)} HTML files to ?v=6")
