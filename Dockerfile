# Usar una imagen base de Nginx
FROM nginx:alpine

# Copiar los archivos del proyecto al contenedor
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
