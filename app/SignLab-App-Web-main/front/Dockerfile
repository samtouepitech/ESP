FROM node:alpine
WORKDIR /app
COPY --chown=node:node package.json .
COPY package-lock.json .
RUN npm i
COPY . .
CMD ["npm", "run", "start"]