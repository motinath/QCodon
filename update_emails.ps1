$files = Get-ChildItem -Path 'c:\Users\harsh\Downloads\qcodon1\qcodon_2\src' -Recurse -Include '*.tsx','*.ts'
foreach ($f in $files) {
    $c = Get-Content $f.FullName -Raw
    $c = $c -replace 'hello@quantumcodon\.com','hello@qcodon.com'
    $c = $c -replace 'sales@quantumcodon\.com','contact@qcodon.com'
    $c = $c -replace 'support@quantumcodon\.com','support@qcodon.com'
    $c = $c -replace 'contact@quantumcodon\.in','contact@qcodon.com'
    $c = $c -replace 'careers@quantumcodon\.in','careers@qcodon.com'
    $c = $c -replace 'edu@quantumcodon\.in','education@qcodon.com'
    $c = $c -replace 'research@quantumcodon\.com','research@qcodon.com'
    $c = $c -replace 'investors@quantumcodon\.in','investors@qcodon.com'
    $c = $c -replace 'partners@quantumcodon\.in','partners@qcodon.com'
    Set-Content $f.FullName $c -NoNewline
}
Write-Host "Done. All emails updated to @qcodon.com"
