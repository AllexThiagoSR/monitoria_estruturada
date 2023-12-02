FROM node:16.14.2
WORKDIR /app
COPY  package*.json /app/
RUN npm install
COPY ./src /app/
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
