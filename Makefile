run_local:
	npm run dev

build_prod:
	docker build -t public_profile .

run_prod: build_prod
	docker run -p 3000:3000 public_profile