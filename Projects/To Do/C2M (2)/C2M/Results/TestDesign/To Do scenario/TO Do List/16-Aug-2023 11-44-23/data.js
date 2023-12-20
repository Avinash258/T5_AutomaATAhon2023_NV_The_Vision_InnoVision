var DATA={"axeReport":false,"releaseName":null,"noTests":1,"perfReport":false,"EXECUTIONS":[{"noTests":16,"iterationType":"Single","description":"Test Run","platform":"XP","exeTime":"00:00:50","iterations":1,"testcaseName":"TO Do List","browser":"Chrome","nopassTests":"15","startTime":"16-Aug-2023 11:44:23.023","endTime":"16-Aug-2023 11:45:14.014","scenarioName":"To Do scenario","bversion":"115","nofailTests":"1","STEPS":[{"data":[{"data":[{"data":{"stepno":1,"stepName":"Open","tStamp":"16-Aug-2023 11:44:28.028","action":"Open","description":"Opened Url: http:\/\/172.40.0.60:8009\/ouaf\/cis.jsp","status":"DONE"},"name":"Open the Url [<Data>] in the Browser","type":"step"},{"data":{"stepno":2,"stepName":"Click","tStamp":"16-Aug-2023 11:44:28.028","action":"Click","description":"Clicking on j_username","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":3,"stepName":"Set","tStamp":"16-Aug-2023 11:44:28.028","action":"Set","description":"Entered Text 'SYSUSER' on 'j_username'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":4,"stepName":"Click","tStamp":"16-Aug-2023 11:44:28.028","action":"Click","description":"Clicking on j_password","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":5,"stepName":"Set","tStamp":"16-Aug-2023 11:44:28.028","action":"Set","description":"Entered Text 'sysuser00' on 'j_password'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":6,"stepName":"Click","tStamp":"16-Aug-2023 11:44:29.029","action":"Click","description":"Clicking on Login","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"To Do scenario:Login","description":"","startTime":"16-Aug-2023 11:44:26.026","endTime":"16-Aug-2023 11:44:29.029","type":"reusable","status":"PASS"},{"data":{"stepno":7,"stepName":"Click","tStamp":"16-Aug-2023 11:44:37.037","action":"Click","description":"Clicking on Menu","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":8,"stepName":"mouseOverElement","tStamp":"16-Aug-2023 11:44:37.037","action":"mouseOverElement","description":"Mouse Over to Element 'To Do","status":"DONE"},"name":"Hover over the [<Object>] element","type":"step"},{"data":{"stepno":9,"stepName":"Click","tStamp":"16-Aug-2023 11:44:38.038","action":"Click","description":"Clicking on To Do List","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":10,"stepName":"switchToFrame","tStamp":"16-Aug-2023 11:44:39.039","action":"switchToFrame","description":"Webdriver switched to new frame by name[tabPage]","status":"DONE"},"name":"Switch to frame by name: [<Data>]","type":"step"},{"data":[{"data":{"stepno":11,"stepName":"pause","tStamp":"16-Aug-2023 11:44:41.041","action":"pause","description":"Thread sleep for '2000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"Wait:wait 2 sec","description":"","startTime":"16-Aug-2023 11:44:39.039","endTime":"16-Aug-2023 11:44:41.041","type":"reusable","status":"PASS"},{"data":{"stepno":12,"stepName":"setByJS","tStamp":"16-Aug-2023 11:44:41.041","action":"setByJS","description":"Entered Text 'Water' on 'enter type to do'","status":"DONE"},"name":"Set [<Data>] on [<Object>]","type":"step"},{"data":{"stepno":13,"stepName":"sendKeysToElement","tStamp":"16-Aug-2023 11:44:41.041","action":"sendKeysToElement","description":"Keys Submitted","status":"DONE"},"name":"Send Keys [<Data>]  to object [<Object>].","type":"step"},{"data":{"stepno":14,"stepName":"Click","tStamp":"16-Aug-2023 11:44:42.042","link":"\\img\\To Do scenario_TO Do List_Step-14_11-44-42.png","action":"Click","description":"org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found<br>  (Session info: chrome=115.0.5790.171)<br>For documentation on this error, please visit: https:\/\/www.seleniumhq.org\/exceptions\/stale_element_reference.html<br>Build info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'<br>System info: host: 'SHAILJAR', ip: '10.20.0.28', os.name: 'Windows 11', os.arch: 'amd64', os.version: '10.0', java.version: '20.0.1'<br>Driver info: org.openqa.selenium.chrome.ChromeDriver<br>Capabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.171, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\SHAILJ~1.RAJ\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:53668}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}<br>Session ID: 0422451a2ed430cab61e5663133ba657#CTAG","status":"FAIL"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":15,"stepName":"selectByVisibleText","tStamp":"16-Aug-2023 11:44:44.044","action":"selectByVisibleText","description":"Item\/s 'Open' is\/are selected from list SRCH_ENT_STAT_FLG","status":"DONE"},"name":"Select item in [<Object>] which has text: [<Data>]","type":"step"},{"data":[{"data":{"stepno":16,"stepName":"pause","tStamp":"16-Aug-2023 11:45:14.014","action":"pause","description":"Thread sleep for '30000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"Wait:wait 30 sec","description":"","startTime":"16-Aug-2023 11:44:44.044","endTime":"16-Aug-2023 11:45:14.014","type":"reusable","status":"PASS"}],"name":"Iteration_1","type":"iteration","status":"FAIL"}],"status":"FAIL"}],"iterationMode":"ContinueOnError","exeTime":"00:00:51","testRun":true,"runConfiguration":"Local","themes":["Amethyst","Coral","Pearl","Sapphire"],"testsetName":null,"nopassTests":"0","theme":"Sapphire","startTime":"16-Aug-2023 11:44:23.023","endTime":"16-Aug-2023 11:45:14.014","projectName":"C2M","maxThreads":1,"bddReport":false,"nofailTests":"1"};