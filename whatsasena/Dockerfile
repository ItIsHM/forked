FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ItIsHM/forked /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN npm install -g npm@8.2.0

CMD ["node", "bot.js"]
