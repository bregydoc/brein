FROM node:alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

WORKDIR /opt/app

COPY . /opt/app

RUN yarn
RUN yarn add --dev typescript @types/react @types/node
RUN yarn build

CMD [ "yarn", "start" ]