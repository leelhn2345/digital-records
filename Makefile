dev-down:
	docker compose --profile dev down

dev-up:
	docker compose --profile dev up -d

down:
	docker compose --profile prod down

up:
	docker compose --profile prod up --force-recreate -d

shadcn:
	bunx shadcn@latest add
