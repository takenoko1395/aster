PROJECT_NAME := aster

DOCKER_COMPOSE := docker-compose \
	--file deployments/docker-compose.yml \
	--project-name $(PROJECT_NAME)

up: ## docker 立ち上げ
	$(DOCKER_COMPOSE) up -d localstack

down: ## docker 終了
	$(DOCKER_COMPOSE) down
