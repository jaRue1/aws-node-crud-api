# Nodejs Crud Api Deployed on AWS

This is a tutorial on how to use aws service EC2 and CICD tools Code pipeline and Code deploy

## 1. Setup Source

<pre>a. Create Repo add source code to it</pre>
<pre>
  b. Add scripts within scripts folder
  - application_stop.sh
  - before_install.sh
  - application_start.sh 
note scripts are listed in order of execution  
</pre>

<pre>c. create appspec.yml file</pre>

## 2. Setup Aws Iam Roles

<pre>a. Create Role for CodeDeploy (CodeDeployRole)</pre>
<pre>b. Create Role for EC2 (EC2CodeDeployRole)</pre>

## 3. Setup EC2 Instance

<pre>a. Select Amazon Linux 2 Instance Type should be t2.micro</pre>
<pre>b. Create a Key Pair for SSH</pre>
<pre>c. Add security group rule to allow HTTP traffic on port 80</pre>
<pre>d. Add security group rule to allow HTTP traffic on port 3000</pre>
<pre>e. For IAM Instance Profile select (EC2CodeDeployRole)</pre>
<pre>f. Add code deploy agent script in user data text area (see scripts folder)</pre>
<pre>g. Add tag to ec2 before launch (DO NOT SKIP THIS STEP !)</pre>

## 4. Setup CodeDeploy

<pre>a. Create application in CodeDeploy (name it and select EC2/On Premises) </pre>
<pre>b. Create deployment group (name it and give it the role of CodeDeployRole) </pre>
<pre>c.Select In-place for Deployment Type</pre>
<pre>d.Select Amazon EC2 Instance for Environment Configuration</pre>
<pre>e.Select your tagged EC2 instance</pre>
<pre>f.Leave all other configurations as default EXCEPT for the Load Balancer (disable that option)</pre>
<pre>g. Create Deployment Group when all previous steps are complete</pre>

## 5. Setup CodePipeline

<pre>a. Name your pipeline</pre>
<pre>b. Select your source repo as Github (Version 2)</pre>
<pre>c. Create new Connect with Github and Authenticate</pre>
<pre>d. Select desired repository </pre>
<pre>e. Select desired branch </pre>
<pre>f. Skip build stage </pre>
<pre>g. For deploy stage select CodeDeploy as your provider</pre>
<pre>h. Select previously created CodeDeploy Application and Deployment Group </pre>
<pre>i. Once all previous step are completed create pipeline</pre>
