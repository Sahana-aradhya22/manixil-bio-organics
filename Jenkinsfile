pipeline {

    agent {
        label 'docker-worker'
    }

    environment {

        AWS_REGION = 'ap-south-1'

        ECR_REPO = '334575333234.dkr.ecr.ap-south-1.amazonaws.com/manixil-app'

        IMAGE_TAG = "${BUILD_NUMBER}"

        K8S_HOST = '172.31.12.236'
    }

    stages {

        stage('Checkout') {

            steps {
                git branch: 'main',
                url: 'https://github.com/Sahana-aradhya22/manixil-bio-organics.git'
            }
        }

        stage('Install Dependencies') {

            steps {
                sh 'npm ci'
            }
        }

        stage('Build NextJS') {

            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {

            steps {

                sh '''
                docker build \
                -t $ECR_REPO:$IMAGE_TAG .
                '''
            }
        }

        stage('ECR Login') {

            steps {

                sh '''
                aws ecr get-login-password --region $AWS_REGION | \
                docker login \
                --username AWS \
                --password-stdin \
                334575333234.dkr.ecr.ap-south-1.amazonaws.com
                '''
            }
        }

        stage('Push Image') {

            steps {

                sh '''
                docker push $ECR_REPO:$IMAGE_TAG
                '''
            }
        }

        stage('Deploy') {

            steps {

                sshagent(['k8s-ssh']) {

                    sh '''
                    ssh -o StrictHostKeyChecking=no deploy@$K8S_HOST "
                    helm upgrade --install manixil-app \
                    ~/helm/manixil-app \
                    --set image.repository=$ECR_REPO \
                    --set image.tag=$IMAGE_TAG
                    "
                    '''
                }
            }
        }
    }
}
