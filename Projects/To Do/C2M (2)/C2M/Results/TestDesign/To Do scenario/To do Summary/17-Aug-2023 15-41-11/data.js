var DATA={"axeReport":false,"releaseName":null,"noTests":1,"perfReport":false,"EXECUTIONS":[{"noTests":17,"iterationType":"Single","description":"Test Run","platform":"XP","exeTime":"00:01:25","iterations":1,"testcaseName":"To do Summary","browser":"Chrome","nopassTests":"14","startTime":"17-Aug-2023 15:41:11.011","endTime":"17-Aug-2023 15:42:36.036","scenarioName":"To Do scenario","bversion":"115","nofailTests":"3","STEPS":[{"data":[{"data":[{"data":{"stepno":1,"stepName":"Open","tStamp":"17-Aug-2023 15:41:14.014","action":"Open","description":"Opened Url: http:\/\/172.40.0.60:8009\/ouaf\/cis.jsp","status":"DONE"},"name":"Open the Url [<Data>] in the Browser","type":"step"},{"data":{"stepno":2,"stepName":"Click","tStamp":"17-Aug-2023 15:41:14.014","action":"Click","description":"Clicking on j_username","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":3,"stepName":"Set","tStamp":"17-Aug-2023 15:41:14.014","action":"Set","description":"Entered Text 'SYSUSER' on 'j_username'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":4,"stepName":"Click","tStamp":"17-Aug-2023 15:41:14.014","action":"Click","description":"Clicking on j_password","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":5,"stepName":"Set","tStamp":"17-Aug-2023 15:41:14.014","action":"Set","description":"Entered Text 'sysuser00' on 'j_password'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":6,"stepName":"Click","tStamp":"17-Aug-2023 15:41:14.014","action":"Click","description":"Clicking on Login","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"To Do scenario:Login","description":"","startTime":"17-Aug-2023 15:41:13.013","endTime":"17-Aug-2023 15:41:14.014","type":"reusable","status":"PASS"},{"data":{"stepno":7,"stepName":"Click","tStamp":"17-Aug-2023 15:41:19.019","action":"Click","description":"Clicking on Menu","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":8,"stepName":"mouseOverElement","tStamp":"17-Aug-2023 15:41:19.019","action":"mouseOverElement","description":"Mouse Over to Element 'To Do","status":"DONE"},"name":"Hover over the [<Object>] element","type":"step"},{"data":{"stepno":9,"stepName":"Click","tStamp":"17-Aug-2023 15:41:20.020","action":"Click","description":"Clicking on To Do Summary1","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":[{"data":{"stepno":10,"stepName":"pause","tStamp":"17-Aug-2023 15:41:21.021","action":"pause","description":"Thread sleep for '1000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"Wait:wait 1 sec","description":"","startTime":"17-Aug-2023 15:41:20.020","endTime":"17-Aug-2023 15:41:21.021","type":"reusable","status":"PASS"},{"data":{"stepno":11,"stepName":"switchToFrame","tStamp":"17-Aug-2023 15:41:21.021","action":"switchToFrame","description":"Webdriver switched to new frame by name[tabPage]","status":"DONE"},"name":"Switch to frame by name: [<Data>]","type":"step"},{"data":{"stepno":12,"stepName":"switchToFrame","tStamp":"17-Aug-2023 15:41:21.021","action":"switchToFrame","description":"No frame element found by name or id dataframe<br>Build info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'<br>System info: host: 'SHAILJAR', ip: '10.20.0.28', os.name: 'Windows 11', os.arch: 'amd64', os.version: '10.0', java.version: '20.0.1'<br>Driver info: driver.version: unknown#CTAG","status":"DEBUG"},"name":"Switch to frame by name: [<Data>]","type":"step"},{"data":{"stepno":13,"stepName":"highlight","tStamp":"17-Aug-2023 15:41:23.023","link":"\\img\\To Do scenario_To do Summary_Step-13_15-41-23.png","action":"highlight","description":"org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found<br>  (Session info: chrome=115.0.5790.171)<br>For documentation on this error, please visit: https:\/\/www.seleniumhq.org\/exceptions\/stale_element_reference.html<br>Build info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'<br>System info: host: 'SHAILJAR', ip: '10.20.0.28', os.name: 'Windows 11', os.arch: 'amd64', os.version: '10.0', java.version: '20.0.1'<br>Driver info: org.openqa.selenium.chrome.ChromeDriver<br>Capabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.171, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\SHAILJ~1.RAJ\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:61372}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}<br>Session ID: 77a353f92fd87233489e6754b5e4092a#CTAG","status":"FAIL"},"name":"Highlight the element [<Object>]","type":"step"},{"data":[{"data":{"stepno":14,"stepName":"pause","tStamp":"17-Aug-2023 15:41:54.054","action":"pause","description":"Thread sleep for '30000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"Wait:wait 30 sec","description":"","startTime":"17-Aug-2023 15:41:24.024","endTime":"17-Aug-2023 15:41:54.054","type":"reusable","status":"PASS"},{"data":{"stepno":15,"stepName":"setObjectProperty","tStamp":"17-Aug-2023 15:41:54.054","action":"setObjectProperty","description":"Setting Object Property for #To Do type  with Water High Bill Consumption for Object [To do Summary - WObject0]","status":"DONE"},"name":"Set object [<Object>] property  as [<Data>] at runtime","type":"step"},{"data":{"stepno":16,"stepName":"Click","tStamp":"17-Aug-2023 15:42:05.005","link":"\\img\\To Do scenario_To do Summary_Step-16_15-42-05.png","action":"Click","description":"Seems Like the Element [WObject0] is Not Present\/Found in the page Try Adding wait or heal it","status":"FAIL"},"name":"Click the [<Object>] ","type":"step"},{"data":[{"data":{"stepno":17,"stepName":"pause","tStamp":"17-Aug-2023 15:42:36.036","action":"pause","description":"Thread sleep for '30000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"Wait:wait 30 sec","description":"","startTime":"17-Aug-2023 15:42:06.006","endTime":"17-Aug-2023 15:42:36.036","type":"reusable","status":"PASS"}],"name":"Iteration_1","type":"iteration","status":"FAIL"}],"status":"FAIL"}],"iterationMode":"ContinueOnError","exeTime":"00:01:25","testRun":true,"runConfiguration":"Local","themes":["Amethyst","Coral","Pearl","Sapphire"],"testsetName":null,"nopassTests":"0","theme":"Sapphire","startTime":"17-Aug-2023 15:41:11.011","endTime":"17-Aug-2023 15:42:37.037","projectName":"C2M","maxThreads":1,"bddReport":false,"nofailTests":"1"};