<cfset lcl.info = getDataItem('Info').getInfo()>

<cfset lcl.form = createWidget("formcreator")>

<cfset lcl.options = structnew()>

<cfset lcl.form.startform()>
<cfset lcl.options = structnew()>
<cfset lcl.options.size = "100">
<cfset lcl.form.addformitem('src', 'Location', true, 'text', lcl.info.src, lcl.options)>
<cfset lcl.form.addformitem('id', '', false, 'hidden', lcl.info.id)>
<cfset lcl.form.endform()>
<cfoutput>#lcl.form.showHTML()#</cfoutput>
<input type="button" onclick="self.close()" value="Cancel">
<input type="submit" value="Save">


<script>
	window.resizeTo(870, 287);
</script>