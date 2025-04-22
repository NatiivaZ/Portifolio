# Script para baixar imagens placeholder para o projeto
$destinationFolder = "public/images"

# Certifique-se de que a pasta existe
if (-not (Test-Path $destinationFolder)) {
    New-Item -ItemType Directory -Path $destinationFolder -Force
}

# Lista de imagens para download
$imageUrls = @(
    @{url = "https://via.placeholder.com/800x600/4361EE/FFFFFF?text=Project+1"; filename = "project1.jpg"},
    @{url = "https://via.placeholder.com/800x600/4CC9F0/FFFFFF?text=Project+2"; filename = "project2.jpg"},
    @{url = "https://via.placeholder.com/800x600/3F37C9/FFFFFF?text=Project+3"; filename = "project3.jpg"},
    @{url = "https://via.placeholder.com/800x600/4361EE/FFFFFF?text=Project+4"; filename = "project4.jpg"},
    @{url = "https://via.placeholder.com/800x600/4CC9F0/FFFFFF?text=Project+5"; filename = "project5.jpg"},
    @{url = "https://via.placeholder.com/800x600/3F37C9/FFFFFF?text=Project+6"; filename = "project6.jpg"},
    @{url = "https://via.placeholder.com/300x300/4361EE/FFFFFF?text=Testimonial+1"; filename = "testimonial1.jpg"},
    @{url = "https://via.placeholder.com/300x300/4CC9F0/FFFFFF?text=Testimonial+2"; filename = "testimonial2.jpg"},
    @{url = "https://via.placeholder.com/300x300/3F37C9/FFFFFF?text=Testimonial+3"; filename = "testimonial3.jpg"},
    @{url = "https://via.placeholder.com/1920x1080/333333/FFFFFF?text=Hero+Background"; filename = "hero-bg.jpg"},
    @{url = "https://via.placeholder.com/1920x1080/333333/FFFFFF?text=Counter+Background"; filename = "counter-bg.jpg"},
    @{url = "https://via.placeholder.com/400x400/4361EE/FFFFFF?text=Profile"; filename = "profile.jpg"},
    @{url = "https://via.placeholder.com/32x32/4361EE/FFFFFF?text=F"; filename = "favicon.png"}
)

# Baixar cada imagem
Write-Host "Downloading placeholder images..."

foreach ($image in $imageUrls) {
    $destination = Join-Path $destinationFolder $image.filename
    Write-Host "Downloading $($image.filename)..."
    
    try {
        Invoke-WebRequest -Uri $image.url -OutFile $destination
        Write-Host "Downloaded $($image.filename) successfully." -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $($image.filename): $_" -ForegroundColor Red
    }
}

Write-Host "All downloads completed!" -ForegroundColor Cyan 