FROM node:18-alpine
RUN npm i -g pnpm

WORKDIR /app 

COPY package.json pnpm-lock.yaml* ./
RUN pnpm i 

COPY .prettierrc.json ./.prettierrc.json

# COPY next-env.d.js ./next-env.d.js
COPY next.config.js ./next.config.js
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js
COPY tsconfig.json ./tsconfig.json
COPY tsconfig.paths.json ./tsconfig.paths.json


COPY src ./src
COPY public ./public

CMD ["pnpm", "dev"]