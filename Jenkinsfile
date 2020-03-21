pipeline {
    agent {
        docker {
            image 'node:13.10.1-alpine3.11' 
            args '-p 9090:9090' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        
        stage('Test') { 
            steps {
                sh 'npm run test:unit' 
            }
        }
        
        stage('Deploy') { 
            steps {
                sh 'npm run serve' 
            }
        }
    }
}