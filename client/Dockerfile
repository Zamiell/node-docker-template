FROM node:16 AS dev
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package.json package-lock.json ./
RUN npm ci
CMD ["npm", "run", "start"]

FROM nginx:1 AS nginx-base
RUN rm /etc/nginx/conf.d/default.conf

FROM nginx-base AS nginx-dev
COPY nginx/dev.conf /etc/nginx/nginx.conf

FROM dev AS build
COPY . .
RUN npm run build

FROM nginx-base AS nginx-prod
COPY nginx/prod.conf /etc/nginx/nginx.conf
COPY --from=build /home/node/app/dist /usr/share/nginx/html
