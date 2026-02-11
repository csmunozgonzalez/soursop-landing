#!/bin/bash
echo "🚀 Iniciando despliegue de la LANDING al servidor..."

# 0. Compilar Proyecto
echo "🔨 Compilando assets de producción..."
npm run build

# 1. Crear directorios
echo "📂 Creando carpetas en el servidor..."
ssh -i ~/.ssh/id_soursop cristian@100.64.114.111 "mkdir -p ~/soursop-landing/html"

# 2. Copiar Configuración
echo "⚙️ Copiando archivos de configuración..."
scp -i ~/.ssh/id_soursop nginx.conf cristian@100.64.114.111:~/soursop-landing/nginx.conf
scp -i ~/.ssh/id_soursop docker-compose.yml cristian@100.64.114.111:~/soursop-landing/docker-compose.yml

# 3. Copiar Build
echo "📦 Copiando aplicación..."
scp -i ~/.ssh/id_soursop -r dist/* cristian@100.64.114.111:~/soursop-landing/html/

# 4. Levantar Servicio
echo "🔥 Levantando servicio web de la landing..."
ssh -i ~/.ssh/id_soursop cristian@100.64.114.111 "cd ~/soursop-landing && docker compose up -d"

echo "✅ ¡Despliegue de landing completado!"
echo "➡️  Tu landing debería estar disponible en: http://100.64.114.111:8081"
