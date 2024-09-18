FROM oven/bun:1 AS base

WORKDIR /app

FROM base AS builder

COPY bun.lockb package.json ./
RUN bun i --frozen-lockfile

COPY . .
RUN bun run build


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
