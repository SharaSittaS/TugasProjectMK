import glob

html_files = glob.glob('d:/Modul Visualisasi Data/uas visdat/TugasProjectMK/*.html')

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('?v=8"', '?v=9"')
    content = content.replace("?v=8'", "?v=9'")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated {len(html_files)} HTML files to ?v=9")
