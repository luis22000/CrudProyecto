FROM node:10


WORKDIR /app


ENV PATH /app/node_modules/.bin:$PATH


COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app

# start app
EXPOSE 4200
CMD ng build --prod host 0.0.0.0