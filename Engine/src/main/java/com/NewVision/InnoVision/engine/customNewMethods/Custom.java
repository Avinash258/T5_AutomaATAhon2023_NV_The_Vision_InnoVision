package com.NewVision.InnoVision.engine.customNewMethods;

import com.NewVision.InnoVision.engine.commands.General;
import com.NewVision.InnoVision.engine.core.CommandControl;
import com.NewVision.InnoVision.engine.execution.exception.element.ElementException;
import com.NewVision.InnoVision.engine.execution.exception.element.ElementException.ExceptionType;
import com.NewVision.InnoVision.engine.support.Status;
import com.NewVision.InnoVision.engine.support.methodInf.Action;
import com.NewVision.InnoVision.engine.support.methodInf.InputType;
import com.NewVision.InnoVision.engine.support.methodInf.ObjectType;

public class Custom extends General  {

    public Custom(CommandControl cc) {
        super(cc);
   
}

@Action(object = ObjectType.BROWSER, desc = "Print Input and Condition", input=InputType.YES, condition =InputType.YES)
public void PrintInputCondition() {
  
    System.out.println("Input is " + Input);
    System.out.println("Condition is " + Condition);
    System.out.println("Data is " + Data);
    Report.updateTestLog(Action, "["+Input+"]" + "["+Data+"]" + "["+Condition+"]", Status.DONE);
}
}