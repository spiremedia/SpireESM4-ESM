<cfoutput>
<input type="submit" value="Upload">
<input type="button" value="Cancel" onclick="location.href='../editVideo/?id=#requestObj.getFormUrlVar("id")#';">
<input type="hidden" name="id" value="#requestObj.getFormUrlVar("id")#">
</cfoutput>