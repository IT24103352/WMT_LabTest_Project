Backend

---- cd "C:\Users\WAZNI\Desktop\PROJECTS\LAB-TEST\WMT_LabTest_Project (share this with students)\WMT_LabTest_Project_01\backend"
---- npm install

Database

---- https://cloud.mongodb.com/v2#/org/69c45dd7f40025309d19c7eb/projects
[new project] -> [Name Your Project = Demo ] -> [Next] -> [create project]
[create cluster] -> [free] -> [Name = Cluster0] -> [create Deployment]
[Create Database ] -> [choose a connection method] -> [divers] ->
-copy
---- mongodb://wazniahamed0241_db_user:<db_password>@ac-hsdlrdx-shard-00-00.cpiymov.mongodb.net:27017,ac-hsdlrdx-shard-00-01.cpiymov.mongodb.net:27017,ac-hsdlrdx-shard-00-02.cpiymov.mongodb.net:27017/?ssl=true&replicaSet=atlas-ane7p2-shard-0&authSource=admin&appName=Cluster0

Backend

---- .evn file (past in the MONGO_URI , SRV Connection String = off)
PORT=5000
MONGO_URI=mongodb://wazniahamed0241_db_user:<db_password>@ac-hsdlrdx-shard-00-00.cpiymov.mongodb.net:27017,ac-hsdlrdx-shard-00-01.cpiymov.mongodb.net:27017,ac-hsdlrdx-shard-00-02.cpiymov.mongodb.net:27017/?ssl=true&replicaSet=atlas-ane7p2-shard-0&authSource=admin&appName=Cluster0
Done

Database

----- [Database & Network Access] -> [IP Access List] -> [edit] -> [0.0.0.0/0] -> [confirm]

Backend

---- npm run dev

Frontend

---- cd "C:\Users\WAZNI\Desktop\PROJECTS\LAB-TEST\WMT_LabTest_Project (share this with students)\WMT_LabTest_Project_01\frontend"
---- npm install
npm run dev

"Take screenshot of the frontend running in the browser and submit it as part of your lab test submission."

root
cd ---

git init
git status

-- ensure env file

git add .
git commit -m "Initial commit"
