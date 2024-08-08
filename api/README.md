
### Subir o ambiente de dev
```
docker compose up
OU
docker compose up -d || docker compose start
```

### Rodar a aplicação
```
go run cmd/wsrs/main.go
```

### Rodar os Generators
```
go generate ./...

Caso não rode o comando acima. 
export PATH="$PATH:$(go env GOPATH)/bin"
```





## DEP
Go (https://go.dev)
Baixe e instale a versão referente ao seu ambiente.

Docker (https://docs.docker.com/compose/)
Utilizamos um banco de dados em docker para realizar parte do desenvolvimento, dentro do `docker-compose.yml` você verá que tem também Admin para facilitar o gerenciamento/visualização.

GoDotEnv (https://github.com/joho/godotenv)
Usado para podermos carregar as variáveis de ambiente.

Tern (https://github.com/jackc/tern)
Usado para gerenciar as Migrations do postgresql.

SQLC (https://sqlc.dev)
