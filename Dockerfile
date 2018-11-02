FROM dockermaker/alpine-node:10.12.0

ARG APP_SERVER="Server"

WORKDIR /app
ADD package.json /app/
RUN npm install
COPY server /app

ENV APP_SERVER=$APP_SERVER

RUN adduser -D -g -S dockerranger && \
    chown -R dockerranger:dockerranger /app

USER dockerranger

CMD ["node", "server.js"]
