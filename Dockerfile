FROM node:10.15.3-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#RUN npm run build
RUN npm run generate

EXPOSE 8080
CMD [ "http-server", "dist" ]

# docker build -t local/dockernize-nuxtjs-app --no-cache .
# docker run -it -p 8080:8080 --rm --name dockerize-nuxtjs-app local/dockernize-nuxtjs-app
