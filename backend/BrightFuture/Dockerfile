# Stage 1: Build with Maven + JDK 17
FROM maven:3.8.4-eclipse-temurin-17 AS build

WORKDIR /application

COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src src
RUN mvn clean package -DskipTests

# Stage 2: Runtime
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy the built jar from the build stage
COPY --from=build /application/target/BrightFuture-0.0.1-SNAPSHOT.jar /BrightFuture-0.0.1-SNAPSHOT.jar

# Copy your run script
COPY run.sh /app/run.sh
RUN chmod +x /app/run.sh

EXPOSE 8080

ENTRYPOINT ["/app/run.sh"]
