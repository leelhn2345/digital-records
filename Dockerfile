FROM oven/bun:1 AS base

WORKDIR /app

FROM base AS builder

COPY bun.lockb package.json ./
RUN bun i --frozen-lockfile

COPY . .

# Define build args for build process
ARG VITE_BACKEND_URL

# Set env vars for build process
ENV VITE_BACKEND_URL="${VITE_BACKEND_URL}"

RUN bun run build


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
