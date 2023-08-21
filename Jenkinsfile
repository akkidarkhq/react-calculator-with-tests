pipeline {
    agent any
	
    stages {
     
		stage('Install') { 
            steps {
			echo 'npm install '
                bat 'npm install'
			
			echo 'npm build running'				
				bat 'npm run build'
				
			echo 'npm test running'				
				bat 'npm test'
            }
        }
		
    }
}
