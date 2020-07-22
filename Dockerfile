FROM node:12.18.2-stretch
WORKDIR /product-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]