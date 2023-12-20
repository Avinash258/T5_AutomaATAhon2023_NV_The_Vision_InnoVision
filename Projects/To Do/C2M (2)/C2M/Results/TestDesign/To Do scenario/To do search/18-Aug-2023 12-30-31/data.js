var DATA={"axeReport":false,"releaseName":null,"noTests":1,"perfReport":false,"EXECUTIONS":[{"noTests":16,"iterationType":"Single","description":"Test Run","platform":"XP","exeTime":"00:00:21","iterations":1,"testcaseName":"To do search","browser":"Chrome","nopassTests":"13","startTime":"18-Aug-2023 12:30:31.031","endTime":"18-Aug-2023 12:30:53.053","scenarioName":"To Do scenario","bversion":"115","nofailTests":"3","STEPS":[{"data":[{"data":[{"data":{"stepno":1,"stepName":"Open","tStamp":"18-Aug-2023 12:30:34.034","action":"Open","description":"Opened Url: http:\/\/172.40.0.60:8009\/ouaf\/cis.jsp","status":"DONE"},"name":"Open the Url [<Data>] in the Browser","type":"step"},{"data":{"stepno":2,"stepName":"Click","tStamp":"18-Aug-2023 12:30:35.035","action":"Click","description":"Clicking on j_username","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":3,"stepName":"Set","tStamp":"18-Aug-2023 12:30:35.035","action":"Set","description":"Entered Text 'SYSUSER' on 'j_username'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":4,"stepName":"Click","tStamp":"18-Aug-2023 12:30:35.035","action":"Click","description":"Clicking on j_password","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":5,"stepName":"Set","tStamp":"18-Aug-2023 12:30:35.035","action":"Set","description":"Entered Text 'sysuser00' on 'j_password'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":6,"stepName":"Click","tStamp":"18-Aug-2023 12:30:36.036","action":"Click","description":"Clicking on Login","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"To Do scenario:Login","description":"","startTime":"18-Aug-2023 12:30:34.034","endTime":"18-Aug-2023 12:30:36.036","type":"reusable","status":"PASS"},{"data":{"stepno":7,"stepName":"Click","tStamp":"18-Aug-2023 12:30:43.043","action":"Click","description":"Clicking on Menu","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":8,"stepName":"mouseOverElement","tStamp":"18-Aug-2023 12:30:43.043","action":"mouseOverElement","description":"Mouse Over to Element 'To Do","status":"DONE"},"name":"Hover over the [<Object>] element","type":"step"},{"data":{"stepno":9,"stepName":"clickByJS","tStamp":"18-Aug-2023 12:30:43.043","action":"clickByJS","description":"Clicked on To Do Search","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":[{"data":{"stepno":10,"stepName":"pause","tStamp":"18-Aug-2023 12:30:45.045","action":"pause","description":"Thread sleep for '2000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"Wait:wait 2 sec","description":"","startTime":"18-Aug-2023 12:30:43.043","endTime":"18-Aug-2023 12:30:45.045","type":"reusable","status":"PASS"},{"data":{"stepno":11,"stepName":"switchToFrame","tStamp":"18-Aug-2023 12:30:46.046","action":"switchToFrame","description":"Webdriver switched to new frame by name[tabPage]","status":"DONE"},"name":"Switch to frame by name: [<Data>]","type":"step"},{"data":{"stepno":12,"stepName":"selectByVisibleText","tStamp":"18-Aug-2023 12:30:46.046","action":"selectByVisibleText","description":"Item\/s 'Specific To Do' is\/are selected from list Related to do filter","status":"DONE"},"name":"Select item in [<Object>] which has text: [<Data>]","type":"step"},{"data":{"stepno":13,"stepName":"Set","tStamp":"18-Aug-2023 12:30:46.046","action":"Set","description":"Entered Text '10853160561150' on 'To Do ID'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":14,"stepName":"selectByVisibleText","tStamp":"18-Aug-2023 12:30:46.046","link":"\\img\\To Do scenario_To do search_Step-14_12-30-46.png","action":"selectByVisibleText","description":"org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Specific To Do<br>For documentation on this error, please visit: https:\/\/www.seleniumhq.org\/exceptions\/no_such_element.html<br>Build info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'<br>System info: host: 'SHAILJAR', ip: '10.20.0.28', os.name: 'Windows 11', os.arch: 'amd64', os.version: '10.0', java.version: '20.0.1'<br>Driver info: driver.version: unknown#CTAG","status":"FAIL"},"name":"Select item in [<Object>] which has text: [<Data>]","type":"step"},{"data":{"stepno":15,"stepName":"Set","tStamp":"18-Aug-2023 12:30:48.048","link":"\\img\\To Do scenario_To do search_Step-15_12-30-48.png","action":"Set","description":"Seems Like the Element [To Do Type] is Not Visible or hidden at the moment","status":"FAIL"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":16,"stepName":"sendKeysToElement","tStamp":"18-Aug-2023 12:30:50.050","link":"\\img\\To Do scenario_To do search_Step-16_12-30-50.png","action":"sendKeysToElement","description":"org.openqa.selenium.ElementNotInteractableException: element not interactable<br>  (Session info: chrome=115.0.5790.173)<br>Build info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'<br>System info: host: 'SHAILJAR', ip: '10.20.0.28', os.name: 'Windows 11', os.arch: 'amd64', os.version: '10.0', java.version: '20.0.1'<br>Driver info: org.openqa.selenium.chrome.ChromeDriver<br>Capabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.173, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\SHAILJ~1.RAJ\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:63784}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}<br>Session ID: 6a0d958cbf0b1bd880beb5d0a7b4aaa1#CTAG","status":"FAIL"},"name":"Send Keys [<Data>]  to object [<Object>].","type":"step"}],"name":"Iteration_1","type":"iteration","status":"FAIL"}],"status":"FAIL"}],"iterationMode":"ContinueOnError","exeTime":"00:00:21","testRun":true,"runConfiguration":"Local","themes":["Amethyst","Coral","Pearl","Sapphire"],"testsetName":null,"nopassTests":"0","theme":"Sapphire","startTime":"18-Aug-2023 12:30:31.031","endTime":"18-Aug-2023 12:30:53.053","projectName":"C2M","maxThreads":1,"bddReport":false,"nofailTests":"1"};