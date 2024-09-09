dev-down:
	docker compose --profile dev down

dev-up:
	docker compose --profile dev up -d

prod-down:
	docker compose --profile prod down

prod-up:
	docker compose --profile prod up -d
