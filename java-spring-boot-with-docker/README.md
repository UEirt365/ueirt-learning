Run app:
mvn clean install -Dmaven.test.skip=true

Build Dockerfile:
docker build -t test_app:v1 -f Dockerfile .

Run image:
docker run --name app -p 8080:8080 --rm test_app:v1

Run this command for get API:
curl -X GET http://localhost:8080/test/get
