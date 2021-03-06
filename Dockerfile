FROM node:10.15.3-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install --no-progress

COPY . ./
RUN npm run generate


FROM node:10.15.3-alpine as runner

RUN npm install -g http-server

COPY --from=builder /app/dist /

EXPOSE 8080
CMD [ "http-server", "dist" ]

# docker build -t local/dockernize-nuxtjs-app --no-cache .
# docker run -it -p 8080:8080 --rm --name dockerize-nuxtjs-app local/dockernize-nuxtjs-app
