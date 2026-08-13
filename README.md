Project Title

End-to-End CI/CD Pipeline Deployment using Jenkins, Docker, AWS ECR, Kubernetes, and Helm

Objective

To automate application deployment using a CI/CD pipeline where source code changes pushed to GitHub automatically trigger Jenkins, build a Docker image, push it to Amazon ECR, and deploy the latest version to a Kubernetes cluster using Helm.

Architecture
Developer
    |
    v
 GitHub Repository
    |
    v
 GitHub Webhook
    |
    v
 Jenkins Master
    |
    v
 Jenkins Worker Node
    |
    +--> Build Application
    +--> Build Docker Image
    +--> Push Image to AWS ECR
    |
    v
 Kubernetes Cluster
    |
    +--> Helm Upgrade
    |
    v
 Deployment
    |
    v
 Pods
    |
    v
 Service
    |
    v
 Ingress / Load Balancer
    |
    v
 Application URL
Step 1: Infrastructure Setup

Created AWS EC2 instances:

Jenkins Server

Installed:

Java 21
Jenkins
Git
Docker
AWS CLI

Verified:

java -version
jenkins --version
docker --version
aws --version
Kubernetes Server

Installed:

Docker
kubectl
kubeadm
kubelet

Initialized cluster:

kubeadm init

Configured kubectl:

mkdir -p $HOME/.kube
cp /etc/kubernetes/admin.conf $HOME/.kube/config

Installed networking:

kubectl apply -f flannel.yaml

Verified:

kubectl get nodes
Step 2: GitHub Repository Setup

Created repository.

git init
git add .
git commit -m "Initial Commit"
git remote add origin <repo-url>
git push origin master

Stored:

Application Source Code
Dockerfile
Jenkinsfile
Helm Chart
Kubernetes Manifests
Step 3: AWS ECR Setup

Created repository:

aws ecr create-repository \
--repository-name manixil-app \
--region ap-south-1

Repository:

334575333234.dkr.ecr.ap-south-1.amazonaws.com/manixil-app

Configured Jenkins IAM permissions:

AmazonEC2ContainerRegistryFullAccess

Verified:

aws sts get-caller-identity
Step 4: Jenkins Configuration

Installed plugins:

Git
Docker
Pipeline
AWS Credentials
SSH Agent
Kubernetes CLI

Created Worker Node:

docker-worker

Configured:

Master -> Trigger Job
Worker -> Build and Push Image
Step 5: GitHub Webhook Configuration

Added webhook:

http://<jenkins-public-ip>:8080/github-webhook/

Event:

Push Event

Purpose:

Automatically trigger Jenkins pipeline whenever code is pushed.
Step 6: Dockerization

Created Dockerfile.

Built image:

docker build -t manixil-app .

Tested:

docker run -p 3000:3000 manixil-app

Verified application locally.

Step 7: Jenkins Pipeline

Created Jenkinsfile.

Pipeline stages:

Checkout
git clone

Fetch latest code.

Install Dependencies
npm install

or

mvn clean package

depending on application.

Build Docker Image
docker build -t manixil-app:${BUILD_NUMBER} .
Login to ECR
aws ecr get-login-password \
| docker login \
--username AWS \
--password-stdin
Push Image

Tag image:

docker tag manixil-app:${BUILD_NUMBER} \
334575333234.dkr.ecr.ap-south-1.amazonaws.com/manixil-app:${BUILD_NUMBER}

Push:

docker push \
334575333234.dkr.ecr.ap-south-1.amazonaws.com/manixil-app:${BUILD_NUMBER}
Deploy to Kubernetes

Update Helm values:

image:
  repository: 334575333234.dkr.ecr.ap-south-1.amazonaws.com/manixil-app
  tag: BUILD_NUMBER

Deploy:

helm upgrade --install manixil-app ./helm-chart
Step 8: Helm Chart Creation

Created structure:

helm-chart/
├── Chart.yaml
├── values.yaml
└── templates
    ├── deployment.yaml
    ├── service.yaml
    ├── ingress.yaml

Purpose:

deployment.yaml

Creates pods.

service.yaml

Exposes pods internally.

ingress.yaml

Routes external traffic.

values.yaml

Stores configurable values.

Step 9: Kubernetes Deployment

Verified:

kubectl get deployments
kubectl get pods
kubectl get svc
kubectl get ingress

Checked logs:

kubectl logs <pod-name>

Verified rollout:

kubectl rollout status deployment/manixil-app
Step 10: Application Access

Service types:

ClusterIP

Internal access only.

NodePort
http://<node-ip>:30080
LoadBalancer
http://<load-balancer-url>
Ingress
http://manixil.example.com
Issues Faced and Resolved
Docker Permission Issue

Error:

permission denied while trying to connect to docker.sock

Resolution:

sudo usermod -aG docker jenkins
systemctl restart jenkins
No Space Left on Device

Error:

no space left on device

Resolution:

docker system prune -a

Cleaned old images and containers.

Jenkins Build Killed

Cause:

Insufficient RAM

Resolution:

Increased memory and optimized build process.
ECR Authentication Failure

Resolution:

aws ecr get-login-password

Used IAM permissions and AWS CLI login.
