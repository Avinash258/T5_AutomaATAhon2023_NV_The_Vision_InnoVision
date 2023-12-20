var DATA={"axeReport":false,"releaseName":null,"noTests":1,"perfReport":false,"EXECUTIONS":[{"noTests":20,"iterationType":"Single","description":"Test Run","platform":"XP","exeTime":"00:00:24","iterations":1,"testcaseName":"to do entry","browser":"Chrome","nopassTests":"19","startTime":"04-Aug-2023 14:53:08.008","endTime":"04-Aug-2023 14:53:32.032","scenarioName":"To Do scenario","bversion":"115","nofailTests":"1","STEPS":[{"data":[{"data":[{"data":{"stepno":1,"stepName":"Open","tStamp":"04-Aug-2023 14:53:11.011","action":"Open","description":"Opened Url: http:\/\/172.40.0.60:8009\/ouaf\/cis.jsp","status":"DONE"},"name":"Open the Url [<Data>] in the Browser","type":"step"},{"data":{"stepno":2,"stepName":"Click","tStamp":"04-Aug-2023 14:53:11.011","action":"Click","description":"Clicking on j_username","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":3,"stepName":"Set","tStamp":"04-Aug-2023 14:53:11.011","action":"Set","description":"Entered Text 'SYSUSER' on 'j_username'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":4,"stepName":"Click","tStamp":"04-Aug-2023 14:53:11.011","action":"Click","description":"Clicking on j_password","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":5,"stepName":"setEncrypted","tStamp":"04-Aug-2023 14:53:11.011","action":"setEncrypted","description":"Entered Encrypted Text S\/DuxGW4WhUofNaPo6mQyw== on j_password","status":"DONE"},"name":"Enter the Decrypted value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":6,"stepName":"Click","tStamp":"04-Aug-2023 14:53:12.012","action":"Click","description":"Clicking on Login","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"To Do scenario:Login","description":"","startTime":"04-Aug-2023 14:53:11.011","endTime":"04-Aug-2023 14:53:12.012","type":"reusable","status":"PASS"},{"data":{"stepno":7,"stepName":"Click","tStamp":"04-Aug-2023 14:53:16.016","action":"Click","description":"Clicking on Menu","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":8,"stepName":"mouseOverElement","tStamp":"04-Aug-2023 14:53:17.017","action":"mouseOverElement","description":"Mouse Over to Element 'To Do","status":"DONE"},"name":"Hover over the [<Object>] element","type":"step"},{"data":{"stepno":9,"stepName":"clickByJS","tStamp":"04-Aug-2023 14:53:17.017","action":"clickByJS","description":"Clicked on To Do Entry","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":10,"stepName":"clickByJS","tStamp":"04-Aug-2023 14:53:17.017","action":"clickByJS","description":"Clicked on Add","status":"DONE"},"name":"Click on [<Object>]","type":"step"},{"data":{"stepno":11,"stepName":"switchToFrame","tStamp":"04-Aug-2023 14:53:17.017","action":"switchToFrame","description":"Webdriver switched to new frame by name[uiMap]","status":"DONE"},"name":"Switch to frame by name: [<Data>]","type":"step"},{"data":{"stepno":12,"stepName":"highlight","tStamp":"04-Aug-2023 14:53:17.017","action":"highlight","description":"Element Highlighted","status":"PASS"},"name":"Highlight the element [<Object>]","type":"step"},{"data":{"stepno":13,"stepName":"Click","tStamp":"04-Aug-2023 14:53:21.021","action":"Click","description":"Clicking on selectedType1","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":14,"stepName":"selectByVisibleText","tStamp":"04-Aug-2023 14:53:21.021","action":"selectByVisibleText","description":"Item\/s 'Billing Related Problem' is\/are selected from list selectedType1","status":"DONE"},"name":"Select item in [<Object>] which has text: [<Data>]","type":"step"},{"data":[{"data":{"stepno":15,"stepName":"pause","tStamp":"04-Aug-2023 14:53:23.023","action":"pause","description":"Thread sleep for '2000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"Wait:wait 2 sec","description":"","startTime":"04-Aug-2023 14:53:21.021","endTime":"04-Aug-2023 14:53:23.023","type":"reusable","status":"PASS"},{"data":{"stepno":16,"stepName":"Click","tStamp":"04-Aug-2023 14:53:23.023","action":"Click","description":"Clicking on OK button","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":[{"data":{"stepno":17,"stepName":"pause","tStamp":"04-Aug-2023 14:53:25.025","action":"pause","description":"Thread sleep for '2000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"Wait:wait 2 sec","description":"","startTime":"04-Aug-2023 14:53:23.023","endTime":"04-Aug-2023 14:53:25.025","type":"reusable","status":"PASS"},{"data":{"stepno":18,"stepName":"highlight","tStamp":"04-Aug-2023 14:53:26.026","link":"\\img\\To Do scenario_to do entry_Step-18_14-53-26.png","action":"highlight","description":"org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found<br>  (Session info: chrome=115.0.5790.111)<br>For documentation on this error, please visit: https:\/\/www.seleniumhq.org\/exceptions\/stale_element_reference.html<br>Build info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'<br>System info: host: 'SHAILJAR', ip: '10.20.0.60', os.name: 'Windows 11', os.arch: 'amd64', os.version: '10.0', java.version: '20.0.1'<br>Driver info: org.openqa.selenium.chrome.ChromeDriver<br>Capabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.111, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\SHAILJ~1.RAJ\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:59783}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}<br>Session ID: d4ef8101b59ff7a11b21e0716c9ae2a1#CTAG","status":"FAIL"},"name":"Highlight the element [<Object>]","type":"step"},{"data":{"stepno":19,"stepName":"Set","tStamp":"04-Aug-2023 14:53:28.028","action":"Set","description":"Entered Text 'reading ' on 'Subject text'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":20,"stepName":"pause","tStamp":"04-Aug-2023 14:53:32.032","action":"pause","description":"Thread sleep for '4000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"Iteration_1","type":"iteration","status":"FAIL"}],"status":"FAIL"}],"iterationMode":"ContinueOnError","exeTime":"00:00:24","testRun":true,"runConfiguration":"Local","themes":["Amethyst","Coral","Pearl","Sapphire"],"testsetName":null,"nopassTests":"0","theme":"Sapphire","startTime":"04-Aug-2023 14:53:08.008","endTime":"04-Aug-2023 14:53:33.033","projectName":"C2M","maxThreads":1,"bddReport":false,"nofailTests":"1"};