pipeline {
    agent {
        dockerfile {
            filename 'docker/dockerfile.jenkins'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm ci'
            }
        }
    }
    post {
        always {
            echo 'First Build!'
        }
    }
}