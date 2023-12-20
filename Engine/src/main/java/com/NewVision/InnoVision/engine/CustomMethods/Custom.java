package com.NewVision.InnoVision.engine.CustomMethods;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.NewVision.InnoVision.engine.commands.CommonMethods;
import com.NewVision.InnoVision.engine.commands.General;
import com.NewVision.InnoVision.engine.commands.JSCommands;
import com.NewVision.InnoVision.engine.constants.SystemDefaults;
import com.NewVision.InnoVision.engine.core.CommandControl;
import com.NewVision.InnoVision.engine.core.Control;
import com.NewVision.InnoVision.engine.execution.exception.ForcedException;
import com.NewVision.InnoVision.engine.execution.exception.element.ElementException;
import com.NewVision.InnoVision.engine.execution.exception.element.ElementException.ExceptionType;
import com.NewVision.InnoVision.engine.support.Status;
import com.NewVision.InnoVision.engine.support.methodInf.Action;
import com.NewVision.InnoVision.engine.support.methodInf.InputType;
import com.NewVision.InnoVision.engine.support.methodInf.ObjectType;


public class Custom extends General {
	WebDriverWait wait;
    public Custom (CommandControl cc) {
        super(cc);
    }{

}

@Action(object = ObjectType.BROWSER, desc = "Print Input and Condition",input=InputType.YES,condition=InputType.YES)
public void PrintInputCondition() {
    System.out.println("Input is "+Input);
    System.out.println("Input is "+Condition);
    System.out.println("Data is " + Data);
    Report.updateTestLog(Action, "["+Input+"]"+ ",["+Data+"]"+ ",["+Condition+"]", Status.DONE);
}

@Action(object = ObjectType.BROWSER, desc = "Returns Absolute Path %absPath%",input=InputType.NO,condition=InputType.NO)
public void returnAbsolutePath() {
    String projectLocation = Control.getCurrentProject().getLocation();
    String absolutePath = projectLocation + "/Uploads/" ;
    addVar("%absPath%",absolutePath);
    Report.updateTestLog(Action, "Path :["+absolutePath+"] generated", Status.DONE);

}

@Action(object = ObjectType.BROWSER, desc = "store  value [<Data>] in Variable [<Condition>]", input = InputType.YES, condition = InputType.YES)
public void updateUserDefine() {
    if (Condition.startsWith("%") && Condition.endsWith("%")) {
       	addGlobalVar(Condition, Data);
        Report.updateTestLog(Action, "Value" + Data
                + "' is stored in Variable '" + Condition + "'",
                Status.DONE);
    } else {
        Report.updateTestLog(Action, "Variable format is not correct", Status.DEBUG);
    }
}

@Action(object = ObjectType.BROWSER, desc = "fn before storeDataFromPreviousTestCase AddVar input<@(TCName)>Condition<%testCase%>,In fn input<DestinationSheet:DestnColumn> condition<fromSheetName:FromsheetColoum>", input = InputType.YES, condition = InputType.YES)
public void storeDataFromPreviousTestCase() {
	try {
		String sheetName = "";
		String columName = "";
		String inputData = Condition;
		String inputSheetName = inputData.split(":", 2)[0];
		String inputcolumnName = inputData.split(":", 2)[1];
		String inputtestcase = getVar("%testcase%");
		String scenario = userData.getScenario();
		String reportDescription = "";
		System.out.println("Input Test Case is:" + inputtestcase);
		String value = userData.getData(inputSheetName, inputcolumnName, scenario, inputtestcase,
				userData.getIteration(), userData.getSubIteration());
		if (Input.matches("%.*%")) {
			addVar(Input, value);
			reportDescription = Input.replaceAll("%", "");
		} else {
			String strObj = Input;
			sheetName = strObj.split(":", 2)[0];
			columName = strObj.split(":", 2)[1];
			reportDescription = columName;
			userData.putData(sheetName, columName, value, scenario,userData.getTestCase(),userData.getIteration(),
					userData.getSubIteration());
		}
		Report.updateTestLog(reportDescription, "Value : [" + value + "] is sucessfully stored", Status.DONE);

	} catch (Exception e) {
		e.printStackTrace();
	}
}

@Action(object = ObjectType.BROWSER, desc = "update the NPI in the sheet input<NPI to be update>condition<fileName.xlxs>",input=InputType.YES,condition=InputType.YES)
public void updateNPIExcel() {
	String projectLocation = Control.getCurrentProject().getLocation();
	String absolutePath = projectLocation + "/Uploads/" + Condition;
	try {
		FileInputStream fis = new FileInputStream(absolutePath);
		try {
			XSSFWorkbook wb = new XSSFWorkbook(fis);
			XSSFSheet sheet = wb.getSheetAt(0);
			// DataFormatter formatter = new DataFormatter();
			sheet = wb.getSheetAt(0);
			Cell cell2Update = sheet.getRow(1).getCell(0);// update A2 cell in excel
			cell2Update.setCellValue(Data);// Update NPI
			
			FileOutputStream outputStream = new FileOutputStream(absolutePath);
			wb.write(outputStream);
			wb.close();
			outputStream.close();

			Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
		} catch (Exception e) {
			Logger.getLogger(this.getClass().getName()).log(Level.OFF, e.getMessage(), e);
			Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
		}
	} catch (Exception e) {
		Logger.getLogger(this.getClass().getName()).log(Level.OFF, e.getMessage(), e);
		Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
	}

}

@Action(object = ObjectType.BROWSER, desc = "update the D1 in the sheet input<NPI to be update>condition<fileName.xlxs>",input=InputType.YES,condition=InputType.YES)
public void updateDate1Excel() {
	String projectLocation = Control.getCurrentProject().getLocation();
	String absolutePath = projectLocation + "/Uploads/" + Condition;
	try {
		FileInputStream fis = new FileInputStream(absolutePath);
		try {
			XSSFWorkbook wb = new XSSFWorkbook(fis);
			XSSFSheet sheet = wb.getSheetAt(0);
			// DataFormatter formatter = new DataFormatter();
			sheet = wb.getSheetAt(0);
						
			Cell cellD1Update = sheet.getRow(0).getCell(3);// update D1 cell in excel
			cellD1Update.setCellValue(Data);// Update Date
			
			FileOutputStream outputStream = new FileOutputStream(absolutePath);
			wb.write(outputStream);
			wb.close();
			outputStream.close();

			Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
		} catch (Exception e) {
			Logger.getLogger(this.getClass().getName()).log(Level.OFF, e.getMessage(), e);
			Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
		}
	} catch (Exception e) {
		Logger.getLogger(this.getClass().getName()).log(Level.OFF, e.getMessage(), e);
		Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
	}

}
@Action(object = ObjectType.BROWSER, desc = "update the D2 in the sheet input<NPI to be update>condition<fileName.xlxs>",input=InputType.YES,condition=InputType.YES)
public void updateDate2Excel() {
	String projectLocation = Control.getCurrentProject().getLocation();
	String absolutePath = projectLocation + "/Uploads/" + Condition;
	try {
		FileInputStream fis = new FileInputStream(absolutePath);
		try {
			XSSFWorkbook wb = new XSSFWorkbook(fis);
			XSSFSheet sheet = wb.getSheetAt(0);
			// DataFormatter formatter = new DataFormatter();
			sheet = wb.getSheetAt(0);
			
			Cell cellD2Update = sheet.getRow(0).getCell(4);// update E1 cell in excel
			cellD2Update.setCellValue(Data);// Update Date
			
			FileOutputStream outputStream = new FileOutputStream(absolutePath);
			wb.write(outputStream);
			wb.close();
			outputStream.close();

			Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
		} catch (Exception e) {
			Logger.getLogger(this.getClass().getName()).log(Level.OFF, e.getMessage(), e);
			Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
		}
	} catch (Exception e) {
		Logger.getLogger(this.getClass().getName()).log(Level.OFF, e.getMessage(), e);
		Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
	}

}
@Action(object = ObjectType.BROWSER, desc = "update the D3 in the sheet input<NPI to be update>condition<fileName.xlxs>",input=InputType.YES,condition=InputType.YES)
public void updateDate3Excel() {
	String projectLocation = Control.getCurrentProject().getLocation();
	String absolutePath = projectLocation + "/Uploads/" + Condition;
	try {
		FileInputStream fis = new FileInputStream(absolutePath);
		try {
			XSSFWorkbook wb = new XSSFWorkbook(fis);
			XSSFSheet sheet = wb.getSheetAt(0);
			// DataFormatter formatter = new DataFormatter();
			sheet = wb.getSheetAt(0);
			
			Cell cellD3Update = sheet.getRow(0).getCell(5);// update F1 cell in excel
			cellD3Update.setCellValue(Data);// Update Date

			FileOutputStream outputStream = new FileOutputStream(absolutePath);
			wb.write(outputStream);
			wb.close();
			outputStream.close();

			Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
		} catch (Exception e) {
			Logger.getLogger(this.getClass().getName()).log(Level.OFF, e.getMessage(), e);
			Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
		}
	} catch (Exception e) {
		Logger.getLogger(this.getClass().getName()).log(Level.OFF, e.getMessage(), e);
		Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
	}

}

@Action(object = ObjectType.SELENIUM, desc = "Enter the value [<Data>] in the Field [<Object>]", input = InputType.YES)
public void SetAndTab() {
    if (elementEnabled()) {
        Element.clear();
        Element.sendKeys(Data);
        Element.sendKeys(Keys.TAB);
        Report.updateTestLog(Action, "Entered Text '" + Data + "' on '"
                + ObjectName + "'", Status.DONE);
    } else {
        throw new ElementException(ExceptionType.Element_Not_Enabled, ObjectName);
    }
}

@Action(object = ObjectType.SELENIUM, desc = "Enter the value [<Data>] in the Field [<Object>]", input = InputType.YES)
public void SetOnly() {
    if (elementEnabled()) {
        Element.sendKeys(Data);
        Report.updateTestLog(Action, "Entered Text '" + Data + "' on '"
                + ObjectName + "'", Status.DONE);
    } else {
        throw new ElementException(ExceptionType.Element_Not_Enabled, ObjectName);
    }
}

@Action(object = ObjectType.SELENIUM, desc = "Set [<Data>] on [<Object>]", input = InputType.YES, condition = InputType.OPTIONAL)
public void findElementAndSendkey() {
    if (elementPresent()) {
		try {

			Element.sendKeys(Data);

			Report.updateTestLog(Action, "Entered Text '" + Data + "' on '" + ObjectName + "'", Status.DONE);
		} catch (Exception ex) {
            Logger.getLogger(JSCommands.class.getName()).log(Level.SEVERE, null, ex);
            Report.updateTestLog(Action, "Couldn't set value on " + ObjectName + " - Exception " + ex.getMessage(),
                    Status.FAIL);
        }
    } else {
        throw new ElementException(ElementException.ExceptionType.Element_Not_Found, ObjectName);
    }
}

@Action(object = ObjectType.SELENIUM, desc = "Enter the value [<Data>] in the Field [<Object>]", input = InputType.YES)
public void Upload() {
	try {
		try {

			Element.getAttribute("style").replace("display: none", "display: enable");
			Thread.sleep(200);
			Element.sendKeys(Data);
			Thread.sleep(1000);
			Element.getAttribute("style").replace("display: enable", "display: none");

			Thread.sleep(200);
		} catch (StaleElementReferenceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//Report.updateTestLog(Action, "Entered Text '" + Data + "' on '" + ObjectName + "'", Status.DONE);
	} catch (Exception e) {
	// TODO: handle exception
}
	
	
      
   
   
}

@Action(object = ObjectType.BROWSER, desc = "+1",input = InputType.YES)
public void increment() {
	String strObj = Input;
if (strObj.startsWith("%") && strObj.endsWith("%")) {
	int i=Integer.parseInt(strObj); 
	i=i+1;
	String j=String.valueOf(i);
    addVar(strObj, j);
    Report.updateTestLog(Action, "Current URL '" + j
            + "' is stored in variable '" + strObj + "'", Status.PASS);
} else {
    Report.updateTestLog(Action, "Variable format is not correct", Status.FAIL);
}}

@Action(object = ObjectType.SELENIUM, desc = "Simple sendKeys",input = InputType.YES)
public void simpleSet() {    
        Element.sendKeys(Data);
        Report.updateTestLog(Action, "Entered Text '" + Data + "' on '"
                + ObjectName + "'", Status.DONE);
}


@Action(object = ObjectType.BROWSER, desc = "Accept the alert present")
public void IfacceptAlert() {
    try {
        Driver.switchTo().alert().accept();
        Report.updateTestLog(Action, "Alert is accepted", Status.DONE);
    } catch (Exception e) {
        Logger.getLogger(CommonMethods.class.getName()).log(Level.SEVERE, null, e);
    }
}

@Action(object = ObjectType.BROWSER, desc = "Update the Sub-Iterations in sheet input<NPI to be update>condition<fileName.xlxs>",input=InputType.OPTIONAL,condition=InputType.YES)
public void subIterationsLooping() {
	String projectLocation = Control.getCurrentProject().getLocation();
	String absolutePath = projectLocation + "/TestData/" + Condition;

	int data = 5;
	if(!Data.isEmpty()) {
         data=Integer.parseInt(Data);		
	}
	try {
		FileInputStream fis = new FileInputStream(absolutePath);
		try {
			XSSFWorkbook wb = new XSSFWorkbook(fis);
			XSSFSheet sheet = wb.getSheetAt(0);
			// DataFormatter formatter = new DataFormatter();

			for(int i=0;i<=data ;i++) {
				//Scenario
				String ScenarioName = sheet.getRow(1).getCell(0).getStringCellValue();
				Cell UpdateScenarioName =sheet.getRow(i+2).getCell(0);
				UpdateScenarioName.setCellValue(ScenarioName);
				//Flow
				String Flow = sheet.getRow(1).getCell(1).getStringCellValue();
				Cell UpdateFlow =sheet.getRow(i+2).getCell(1);
				UpdateFlow.setCellValue(Flow);
				//Iteration
				String Iteration = sheet.getRow(1).getCell(2).getStringCellValue();
				Cell UpdateIteration =sheet.getRow(i+2).getCell(2);
				UpdateIteration.setCellValue(Iteration);
				//SubIteration
				Cell SubIteration =sheet.getRow(i+2).getCell(2);
				SubIteration.setCellValue(i+2);
			}
			FileOutputStream outputStream = new FileOutputStream(absolutePath);
			wb.write(outputStream);
			wb.close();
			outputStream.close();
 
			Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
		} catch (Exception e) {
			Logger.getLogger(this.getClass().getName()).log(Level.OFF, e.getMessage(), e);
			Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
		}
	} catch (Exception e) {
		Logger.getLogger(this.getClass().getName()).log(Level.OFF, e.getMessage(), e);
		Report.updateTestLog(Action, "Path :[" + absolutePath + "] generated", Status.DONE);
	}
 
}

@Action(object = ObjectType.BROWSER, desc = "Query and save the result in Datasheet ", input = InputType.YES, condition = InputType.YES)
public void storeMultipleIterations() {
    try {
       
        int totalRows = result.getRow();
        result.beforeFirst();
        int totalCols = resultData.getColumnCount();
        for (int colIndex = 0; colIndex < totalCols; colIndex++) {
            result.beforeFirst();
            for (int rowIndex = 1; rowIndex <= totalRows; rowIndex++) {
                if (result.absolute(rowIndex)) {
                    userData.putData(Condition, colNames.get(colIndex), result.getString(colIndex + 1), userData.getIteration(), Integer.toString(rowIndex));
                } else {
                    Report.updateTestLog(Action, "Row " + rowIndex + " doesn't exist",
                            Status.FAILNS);
                    return;
                }
            }
        }
        Report.updateTestLog(Action, " SQL Query Result has been saved in DataSheet: ",
                Status.PASSNS);
    } catch (SQLException ex) {
        Report.updateTestLog(Action, "Error executing the SQL Query: " + ex.getMessage(),
                Status.FAILNS);
    }
}
}





