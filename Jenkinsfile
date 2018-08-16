pipeline {
    agent { 
        docker { 
            image 'node:latest' 
            args '-p 3000:3000'
        } 
    }
    stages {
        stage('Preparation') {
            steps {
                git 'https://github.com/rafalfaro18/react-vr-example.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install && npm run build'
            }
        }
        stage('Run') {
            steps {
                sh 'npm start &'
                sh 'sleep 1'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
            }
        }
    }
}
