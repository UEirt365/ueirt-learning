FROM openjdk:8-jre

EXPOSE 8080

ADD ./target/java-spring-boot-with-docker-1.0-SNAPSHOT.jar /demo.jar

ENTRYPOINT ["java", "-jar", "demo.jar"]
