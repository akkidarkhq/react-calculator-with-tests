pipeline {
    agent any
	
    stages {
     
		stage('Install') { 
            steps {
			echo 'npm install '
                bat 'npm install'
			
				
			echo 'npm test running'				
				bat 'npm test'
            }
        }
		
    }
}
