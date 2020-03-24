pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                git 'https://github.com/amar-ox/iot-dashboard.git/'
                sh 'docker build -t iot-dashboard-test -f Dockerfile.test --no-cache .'
            }
        }
        
        stage('Test') { 
            steps {
                sh 'docker run --rm iot-dashboard-test'
                sh 'docker rmi iot-dashboard-test' 
            }
        }
        
        stage('Deploy') { 
            steps {
                sh 'docker build -t iot-dashboard --no-cache .'
                sh 'docker run -it -p 9090:8080 --rm --name=iot-dashboard iot-dashboard'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'docker stop iot-dashboard'
                sh 'docker rmi iot-dashboard' 
            }
        }
    }
}