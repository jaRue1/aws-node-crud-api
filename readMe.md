# Nodejs Crud Api Deployed on AWS

This is a tutorial on how to use aws service EC2 and cicd tools Code pipeline and Code deploy

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

<pre>a. Select Amazon Linux 2 Kernel 5.10 AMI 2.0.20220912.1 x86_64 HVM gp2, Instance Type should be t2.micro</pre>
<pre>b. Create a Key Pair for SSH</pre>
<pre>c. Add security group rule to allow HTTP traffic on port 80</pre>
<pre>d. Add security group rule to allow HTTP traffic on port 3000</pre>
<pre>e. For IAM Instance Profile select (EC2CodeDeployRole)</pre>
<pre>f. Add code deploy agent script in user data text area (see scripts folder)</pre>
<pre>g. Add tag to ec2 before lauch (DO NOT SKIP THIS STEP !)</pre>

## 4. Setup CodeDeploy

<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
