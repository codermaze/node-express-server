pipeline {
    agent { docker { image 'node:10.12.0' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
