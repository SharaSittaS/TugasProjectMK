import glob

html_files = glob.glob('d:/Modul Visualisasi Data/uas visdat/TugasProjectMK/*.html')

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace ?v=2 with ?v=3
    content = content.replace('?v=2"', '?v=3"')
    content = content.replace("?v=2'", "?v=3'")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated {len(html_files)} HTML files to ?v=3")
