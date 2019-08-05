### Run app:
mvn clean install -Dmaven.test.skip=true

### Build Dockerfile:
docker build -t test_app:v1 -f Dockerfile .

### Run image:
docker run --name app -p 8080:8080 --rm test_app:v1

### Run this command for get API:
curl -X GET http://localhost:8080/test/get

------------------------------------
# docker-compose
# copy mysql config:
docker run --rm -v /home/ueirt/Desktop/docker/:/home/ mysql cp /etc/mysql/my.cnf /home
# add to end of file
default-authentication-plugin=mysql_native_password

# Run docker-compose:
docker-compose up

