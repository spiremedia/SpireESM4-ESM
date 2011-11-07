<cfsilent>

	<cfset lcl.acc = createWidget('accordion')>
	<cfset lcl.acc.setID('browselist')>
	<cfset lcl.list = getDataItem('list')>
	
	<cfif requestObj.isformurlvarset('id')>
		<cfset lcl.id = requestObj.getformurlvar('id')>	
	<cfelse>
		<cfset lcl.id = 0>
	</cfif>

	<cfset lcl.count = 0>
	
	<cfset lcl.s = structnew()>
	<cfif lcl.list.recordcount>
		<cfsavecontent variable="lcl.s.html">
			<div class="nav">
			<ul>
			<cfoutput query="lcl.list">
				<li><a <cfif lcl.id EQ id>class="selected"</cfif> href="../editEvent/?id=#id#">#name#</a></li>
			</cfoutput>
			</ul>
			</div>
		</cfsavecontent>
		<cfset lcl.acc.add('Events',lcl.s.html)>
	<cfelse>
		<cfset lcl.acc.add("No Events Loaded","")>
	</cfif>
</cfsilent>

<cfoutput>#lcl.acc.showHTML()#</cfoutput>
