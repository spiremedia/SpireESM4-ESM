<cfsavecontent variable="modulexml">
<module name="SimpleContent" label="Simple Content" menuOrder="0" securityitems="">
	<action name="editClientModule" isform="1" template="popup-onecol" formsubmit="saveClientModule">
		<template name="title" title="label" file="titlelabel.cfm"/>
		<template name="title" title="label" file="titlebuttons.cfm"/>
		<template name="mainContent" title="Properties" file="editform.cfm"/>
	</action>
	<action name="saveClientModule"/>
	<action name="deleteClientModule"/>
</module>
</cfsavecontent>

<cfset modulexml = xmlparse(modulexml)>



