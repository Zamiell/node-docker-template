FROM node:16 AS base
USER node
ENV NODE_ENV=production
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force

FROM base AS dev
ENV NODE_ENV=development
# Production dependencies were already installed in the base image
# Now we install the dev dependencies (and avoid modifying package-lock.json)
RUN npm install --save=false
ENV PATH=/home/node/app/node_modules/.bin:$PATH
CMD ["nodemon"]

FROM dev AS build
ENV NODE_ENV=production
COPY --chown=node:node . .
RUN npm run build

FROM base AS prod
COPY --from=build --chown=node:node /home/node/app/dist ./dist
CMD ["node", "dist/main.js"]
