# Build with the repo root as context: docker build .
#
# The site is fully static (astro `output: 'static'`): the build renders
# everything to dist/ and nginx serves it — no runtime env needed. On hotbox,
# create a GitHub service pointing at this repo (Dockerfile at the root) and
# set the service's public port to 8080.

FROM node:22-slim AS builder
WORKDIR /app

# Bun is the package manager (bun.lockb); the official binary from the
# oven/bun image runs fine on the same debian base.
COPY --from=oven/bun:1 /usr/local/bin/bun /usr/local/bin/bun

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .

# Sentry sourcemap upload self-disables (no auth token set), same as CI.
ENV ASTRO_TELEMETRY_DISABLED=1
RUN bun run build

FROM nginx:alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8080
