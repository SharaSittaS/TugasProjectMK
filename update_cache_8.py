import glob

html_files = glob.glob('d:/Modul Visualisasi Data/uas visdat/TugasProjectMK/*.html')

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace ?v=7 with ?v=8
    content = content.replace('?v=7"', '?v=8"')
    content = content.replace("?v=7'", "?v=8'")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated {len(html_files)} HTML files to ?v=8")
