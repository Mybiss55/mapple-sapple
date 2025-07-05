pipeline {
    agent any
    environment {
        WORKSPACE = "${env.WORKSPACE}"
        COMPOSE = "docker compose -f docker/docker-compose.yml"
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'mkdir -p videos'
            }
        }
        stage('Build') {
            steps {
                sh "${COMPOSE} up -d tests grid video"
                sleep 10 // Wait for services to start
                sh "${COMPOSE} exec tests npm i"
                sh "${COMPOSE} exec tests node test.tests.js"
            }
        }
    }
    post {
        always {
            echo 'First Build!'
            sleep 5
            sh 'ls -la videos'
            sh "${COMPOSE} exec video ls -la /videos"
            archiveArtifacts artifacts: 'videos/*.mp4', allowEmptyArchive: true
            sh "${COMPOSE} down --remove-orphans"

        }
    }
}