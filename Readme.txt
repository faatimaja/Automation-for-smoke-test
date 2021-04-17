Automation tests are done using Protractor with Jasmine framework. In oreder to run those test cases there should be done some actions:

1. If Node.js is not installed on your machine, you should install it from the internet

2. You should set Node in your System variables 

3. To install Protractor in the command prompt or in the terminal write: npm install -g protractor

4. Start selenium server to help you connect your protracotr commands to your browser. Since the webdriver must be compatibile to the crhome version 
you use, you need to write the crhome version. Terminal must be opened so that Protractor can work. Before starting the webdriver manager, you need to 
do update. So two command are:
webdriver-manager update --versions.chrome=<put here current version of your chrome>
webdriver-manager start --versions.chrome=<put here current version of your chrome>

6. You need to install JavaScript editor on your machine. I prefer Webstorm which I used to create tests.

7. In cofiguration file we have to write where is selenium server in order to know where to send the request. 
To check where it is after we enter "webdriver-manager start" in cmd, it usually shows port 4444.
So, this is what shoudl be written in cinfig file: seleniumAddress: 'http://localhost:4444/wd/hub'

8. Create the protractor testRunner file to run the script
(Webstorm -> Run -> Edit Configuration -> "+" icon -> Node.js -> JavaScript file -> select "cli.js" file (because it triggers all executions)
In Application parameter write the name of the your cofiguration file (This is the test file you want to trigger)
Than click Apply and Ok

9. In order for Jasmine framework to work you need to clcik Settings in Webstorm and choose "Languages & Framework", where you choose "Libraries" and dowload and install Jasmine.

**
Maybe you will need to install JAVA SE if you can not run webdriver and than add it in your System variables.

Also, if any error occures, read how the problem is defined in the terminal, try to understand it and ask Google for the solution, and apply it. 
